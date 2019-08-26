<template>
  <div class="mainColor" style="text-align:left">
    <!-- 页面头部 -->
    <van-nav-bar title="个人中心" fixed />

    <van-row class="row">
      <van-col span="15" offset="1">
        <van-image
          @click="login"
          fit="cover"
          round
          width="90"
          height="90"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
      <van-col class="name" span="3" offset="2">
        <span @click="login" class="text"></span>
      </van-col>
      <!-- <van-col class="name" span="10" offset="2">
        <span>17783432170</span>
      </van-col>
      <van-col span="10" offset="2">
        <span>重庆市渝北区XXX</span>
      </van-col>-->
    </van-row>

    <van-cell-group title="基本信息">
      <van-cell icon="friends-o" title="用户名" v-model="username" />
      <van-cell icon="phone-o" title="电话" v-model="phone" />
      <!-- <van-cell icon="location-o" title="住址" v-model="ComName" /> -->
    </van-cell-group>

    

    <van-collapse v-model="activeNames">
      <van-collapse-item title="家庭费用" name="1" :icon="house_icon">
        <van-cell :icon="water_icon" title="水费" :value="Discount.h_eCost" />
        <van-cell :icon="dian_icon" title="电费" :value="Discount.h_wCost" />
        <van-cell :icon="qi_icon" title="燃气费" :value="Discount.h_gCost" />
        <van-cell :icon="ds_icon" title="有线电视" :value="Discount.h_telCost" />
        <van-cell :icon="kd_icon" title="宽带" :value="Discount.h_intCost" />
        <van-cell :icon="wy_icon" title="物业费" :value="Discount.h_comCost" />
      </van-collapse-item>
    </van-collapse>

    <van-cell :icon="zd_icon" title="账单" is-link @click="to_bill" />

    <van-cell :icon="sc_icon" title="收藏" is-link url="//youzan.github.io/vant/mobile.html" />

    <van-cell :icon="sz_icon" title="设置" is-link url="//youzan.github.io/vant/mobile.html" />

    <div class="exit">
      <van-button class="exit_b" round type="danger" @click="go('/')">退出登录</van-button>
    </div>
    <br />
    <br />
    <br />
    <br />
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000">
      <van-tabbar-item name="Home" icon="home-o" @click="go('/Home')">主页</van-tabbar-item>
      <van-tabbar-item name="Community" icon="friends-o" @click="go('/Community')">社区</van-tabbar-item>
      <van-tabbar-item name="Message" icon="chat-o" @click="go('/Message')">消息</van-tabbar-item>
      <van-tabbar-item name="Supermacket" icon="shop-o" @click="go('/shop')">超市</van-tabbar-item>
      <van-tabbar-item name="Me" icon="contact" @click="go('/Me')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script>
import {
  Button,
  Collapse,
  CollapseItem,
  Image,
  Card,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  List,
  Row,
  Col,
  TabbarItem,
  Tabbar,
  NavBar
} from "vant";
import { METHODS } from "http";
import axios from "axios";
export default {
  name: "Me",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Button.name]: Button,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Image.name]: Image,
    [Card.name]: Card,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [List.name]: List,
    [Row.name]: Row,
    [Col.name]: Col,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      username: this.$store.state.currentUser,
     
      phone: "",
      ComName: "",
      Discount: "",
      msg: "",
      active: "Me",
      activeNames: ["1"],
      water_icon: require("../assets/Me/water.png"),
      dian_icon: require("../assets/Me/dian(1).png"),
      qi_icon: require("../assets/Me/rq.png"),
      house_icon: require("../assets/Me/house.png"),
      zd_icon: require("../assets/Me/zd.png"),
      sc_icon: require("../assets/Me/sc.png"),
      kd_icon: require("../assets/Me/kd.png"),
      wy_icon: require("../assets/Me/wy.png"),
      ds_icon: require("../assets/Me/ds(1).png"),
      sz_icon: require("../assets/Me/sz.png")
    };
  },
  methods: {
    getList() {
      axios.post( domain.testUrl+"/PerInformation?UserId="+this.username)
        .then(res => {
            // this.phone = u_phoneNum;
            // this.ComName = "ok";
            console.log(res)
            this.phone=res.data.data.u_phoneNum
        });
      // axios.get('https://www.easy-mock.com/mock/5d47cf5fb94f1f053cf8cfec/shop/man').then((res) => {
      //   console.log(res)
      //   this.manList = res.data.manList
      //   this.womanList = res.data.manList
      // });
    },
    login() {
      this.$router.push({ path: "/" });
    },
    to_bill() {
      this.$router.push({ path: "/Home/Me/bill" });
    },
    go(where) {
      this.$router.push(where);
    },
    getDiscount() {
      // axios
      //   .post(
      //     "https://www.easy-mock.com/mock/5d47a880f801d914c45657c4/example_copy/Cost"
      //   )
      //   .then(res => {
      //     console.log(res);
      //     this.DisCount = res.data;
      //   });

      
    },
    getUer() {
      //得到用户信息
      axios
        .post("", {
          userId: this.username
        })
        .then(res => {
          console.log(res);

          this.ComName = res.data.ComName;
          this.phone = res.data.phone;
        });
    }
  },
  created() {
    
    
    this.getList();
    axios.get(domain.testUrl+"/Cost?UserId="+this.$store.state.currentUser)
        .then((res) => {
          // console.log(res);
        this.Discount = res.data.data
        console.log(this.Discount)
      })
    // console.log(this.DisCount)
  }
};
</script>

<style scoped>
.vux-header {
  background-color: #32cd32;
}
.row {
  height: 100px;
  color: #000;
  margin-top: 80px;
  margin-left: 8px;
}

.user {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 10px;
}
.text {
  font-size: 20px;
}
.name {
  margin-top: 5px;
  color: #1296db;
}
.exit {
  text-align: center;
}
.exit_b {
  width: 250px;
}
.topColor {
  background-color: rgb(191, 243, 208);
}
.mainColor {
  background-color: #f7fefa;
}
.van-tabbar {
  height: 60px;
}
</style>
