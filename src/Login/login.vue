<template>
  <div>
    <!-- <x-header title="登录" :left-options="{showBack: false}"></x-header> -->
    <van-nav-bar
      title="登录"
      fixed
    />
    <br><br>
    <div class="tx">
      <van-image
        class="div_tx"
        round
        fit="cover"
        width="10rem"
        height="10rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />


    </div>

    <br />
    <br />
    <br />
    <van-cell-group>

        <van-field
      class="field"
    v-model="username"
 
    clearable
    :left-icon="yhm_icon"
    label="用户名"
    placeholder="请输入用户名"

  />  <br />


      <van-field
        class="field"
        v-model="password"
        :left-icon="mm_icon"
        type="password"
        label="密码"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <br />

    <van-row>
      <van-col span="10" offset="5">
        <van-checkbox class="check" icon-size="13px" v-model="checked">
          <span class="rmber">记住密码</span>
        </van-checkbox>
      </van-col>
      <van-col span="6" offset="1">
        <span @click="forget_code" class="rmber">忘记密码？</span>
      </van-col>
    </van-row>

    <br />
    <br />

    <van-row>
      <van-col span="6" offset="3">
        <van-button @click="submit" class="login_in"  round type="danger">登录</van-button>
      </van-col>
      <!-- <van-col span="6" offset="5">
        <van-button class="login_in" round type="danger">注册</van-button>
      </van-col> -->
    </van-row>

    <br>

    <span @click="register" class="zc">还没有注册？  点此注册</span>

  </div>
</template>

<script>
import axios from 'axios'
import { XHeader, XInput } from "vux";
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
  NavBar
} from "vant";
export default {
  name: "login",
  components: {
    XHeader,
    XInput,
    [Checkbox.name]: Checkbox,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Image.name]: Image,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [NavBar.name]:NavBar,
  },
  data() {
    return {
     
      username: "",
      password: "",
      isSign: "",
      msg: "",
      activeNames: ["1"],
      checked: true,
      mm_icon: require("../assets/Me/mm.png"),
      tx: require("../assets/Me/tx.png"),
      yhm_icon: require("../assets/Me/yhm(1).png")
    };
  },
  methods: {
    forget_code() {

    },
    register(){
      this.$router.push({ path:'/register'})
    },
    submit(){
      // alert(this.username+','+ this.password);
      axios.post(domain.testUrl+"/Sign?UserName="+this.username+"&UserPassword="+this.password
      // this.$http({ 
      //           method: "post",
      //           url: domain.testUrl+'/Sign',
      //           data: {
      //               userId: this.UserName,
      //               password: this.UserPassword
      //           }
            // }
            ).then((res) => {
                console.log(res.data);

               this.isSign = res.data.code;
               if(this.isSign == -1){
                 this.msg = '账号或密码错误！'
                 this.Hint();
               }else{
                 this.msg = '登录成功'
                 this.Hint();
               }

            })

            

    },
      Hint(){//登录弹出提示框,成功后进入主界面
              Dialog.alert({
        message: this.msg
        
      }).then(() => {
        
        if(this.isSign == 0){
        this.$router.push({ 
          path: "/Home" ,
          name:'Home',
         
          });
          //将用户名放入sessionStorage
             sessionStorage.setItem('userName',this.username);
             //将用户名放入vuex
            this.$store.dispatch('setUser',this.username);

          

         
        }else{
          this.$router.push({ path: "/"});
         
        }
      
      })

    }
  }
};
</script>

<style scoped>
.tx {
  text-align: center;
  margin-top: 60px;
}
.rmber {
  font-size: 13px;
}
.van-cell {
  padding: 15px 20 px;
  font-size: 17px;
}
.login_in {
  width: 280px;
  height: 40px;
}
.field {
  margin-left: 18px;
  width: 340px;
}
.zc {
  font-size: 12px;
  margin-left: 200px;
}
</style>
