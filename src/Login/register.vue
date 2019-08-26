<template>
  <div style="text-align:left">
    <!-- <x-header title="注册" :left-options="{showBack: true}"></x-header> -->
    
      <van-nav-bar
      title="注册"
      left-text="返回"
      fixed
      left-arrow
      @click-left="onClickLeft"
    />
<br><br>
    <div class="tx">
      <van-image
        round
        fit="cover"
        width="10rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />

      <!-- <van-uploader v-model="headList" multiple :max-count="1" /> -->
    </div>

    <br />

    <van-cell-group title="账户信息">
      <van-field
        class="field"
        v-model="userId"
        clearable
        required
        label="用户名"
        placeholder="只能为字母和数字"
      />

      <van-field
        class="field"
        v-model="password"
        type="password"
        required
        label="密码"
        placeholder="不能小于6位"
      />

      <van-field
        class="field"
        v-model="password1"
        required
        type="password"
        label="确认密码"
        placeholder="请确认密码"
      />
    </van-cell-group>

    <van-cell-group title="资料信息">
      <van-field class="field" v-model="phone" required clearable label="手机号" placeholder="请输入手机号" />
      <van-field class="field" v-model="homeId" required clearable label="户号" placeholder="请输入户号" />

      <div>
        <group class="popup" label-margin-right="2.5em">
          <popup-picker
            class="choose_xiaoqu"
            title="居住小区"
            placeholder="请选择"
            :data="list"
            v-model="ComName1"
            value-text-align="left"
          ></popup-picker>
        </group>
      </div>
    </van-cell-group>
    <br />
    <br />

    <br />
    <div class="register_div">
      <van-button @click="zc" class="register" round type="danger">注册</van-button>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import { XHeader, Group, PopupPicker } from "vux";
import {
  CellGroup,
  Field,
  Row,
  Col,
  Checkbox,
  Cell,
  Icon,
  Image,
  Button,
  Dialog,
  Uploader,
  NavBar
} from "vant";
export default {
  name: "login",
  components: {
    XHeader,
    Group,
    PopupPicker,
    [Checkbox.name]: Checkbox,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Image.name]: Image,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Dialog.Component.name]: Dialog.Component,
    [Uploader.name]: Uploader,
    [NavBar.name]:NavBar,
  },
  data() {
    return {
      headList: [],
      List: [],
      i: 0,
      sucess: false,
      isok: 1,
      msge: "",
      msg: "",
      userId: "",
      password: "",
      password1: "",
      phone: "",
      homeId: "",
      UserImage: "",
      ComId: "",

      ComName1: [], //选中的社区名字
      ComList: [], //所有社区信息，包括id和名字

      list: [[]] //所有社区名字，和上面动态绑定
    };
  },
  methods: {
    zc() {
      console.log(this.isok);
      this.isRe();

      // Dialog.alert({
      //   message: this.msge

      // }).then(() => {
      //   console.log(this.msge);

      //   if(this.isok == 0){
      //   this.$router.push({ path: "/" });

      //   //  console.log(this.findComId())
      //   }else{
      //     this.$router.push({ path: "/register"});

      //   }

      // });
    },
    Dialog1() {
      Dialog.alert({
        message: this.msge
      }).then(() => {
        this.$router.push({ path: "/register" });
      });
    },
    Dialog2() {
      Dialog.alert({
        message: this.msge
      }).then(() => {
        this.$router.push({ path: "/" });
      });
    },
    isRe() {
      //判断输入框中输入信息是否合法

      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      if (this.userId == "") {
        this.msge = "用户名不能为空";
        this.Dialog1();
      } else if (this.password.length < 6) {
        this.msge = "密码不能小于6位";
        this.Dialog1();
      } else if (this.password != this.password1) {
        this.msge = "两次密码输入不相等";
        this.Dialog1();
      } else if (!reg.test(this.phone)) {
        this.msge = "手机号码不合法";
        this.Dialog1();
      } else if (this.homeId == "") {
        this.msge = "户号不能为空";
        this.Dialog1();
      } else if (this.ComName == []) {
        this.msge = "不能为空";
        this.Dialog1();
      } else {
        this.setRegister();
        // this.isok = 0;
        // this.msge = this.msg;
      }
    },
    onClickLeft() {
      this.$router.push('/Home/ActivityMain');
      
    },
    // getIsOk(){//一个测试的函数，没有作用
    //   axios.get('https://www.easy-mock.com/mock/5d47a880f801d914c45657c4/example_copy/isRegister')
    //     .then((res) => {
    //     console.log(res);
    //     this.isok = res.data.isOK;
    //     this.msg = res.data.msg;
    //   })
    // },
    getCom() {
      axios.get(
          domain.testUrl+"/AllCom"
        )

        .then(res => {
          console.log(res);

          this.ComList = res.data.data;
          console.log(res.data.data);
          var i = 0;
          for (i; i < this.ComList.length; i++) {
            this.list[0].push(this.ComList[i].c_name);
            // console.log(res.data[i]);
          }
          console.log(this.list);
        });
    },
    setRegister() {

      //上传注册信息
      var i = 1;
      axios
        .post(
          domain.testUrl +
            "/Register?" +
            "UserName=" +
            this.userId +
            "&UserPassword=" +
            this.password +
            "&UserPhone=" +
            this.phone +
            "&ComId="+this.findComId()+"&HomeId=" +
            this.homeId
        )
        .then(res => {
          console.log(res);

          this.isok = res.data.code;
          // console.log(res.data.code)
          if (this.isok == "-1") {
            this.msge = res.data.message;
            console.log(this.msge);
            this.Dialog1();
          } else if (this.isok == 0) {
            this.msge = "注册成功";
            console.log(this.msge);
            this.Dialog2();
          }
        });
    },
    findComId() {
      //找出当前选中社区id
      var i = 0;
      for (i; i < this.ComList.length; i++) {
        if (this.ComName1 == this.ComList[i].c_name) {
          // this.ComId = this.ComList[i].ComId;
          return this.ComList[i].c_id;
        }
      }
    },
    onClickLeft() {
      this.$router.push('/');
      
    },
  },
  created() {
    // this.getIsOk();
    // this.setRegister();
    this.getCom();
  }
};
</script>

<style scoped>
.tx {
  text-align: center;
  margin-top: 30px;
}
.field {
  margin-left: 18px;
  width: 340px;
}
.register {
  width: 280px;
  height: 40px;
}
.register_div {
  text-align: center;
}
.choose_xiaoqu {
  margin-left: 15px;
  font-size: 14px;
}
.popup {
  font-size: 14px;
}
</style>

