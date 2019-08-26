<template>
  <div style="text-align:left">
      <van-nav-bar
      title="消息"
      class="topColor"
      style="position:fixed; z-index:100000; width: 100%;"
    />
    <div>
      <br><br><br>
     
      <van-row class="all"  v-for="(msg,i) in msgs" :key=i>
        <div @click="msg_show">
        <van-col span="7" >
          <van-image
            class="image"
            width="5rem"
            height="5rem"
            round
            fit="cover"
            :src="msg.image"
          />
        </van-col>
       
        <van-col class="msg" span="16">
          <div class="title_div">
            <span class="wuye">{{msg.title}}</span>
            <span class="time">{{msg.time}}</span>
          </div>
          <br />
          <div>
            <span class="title">{{msg.description}}</span>
          </div>

          <div>
            <span class="describe">{{msg.abstract}}</span>
          </div>
        </van-col>
         </div>
      </van-row>
    </div>


    <!-- 底部导航 -->
  <van-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000">
  <van-tabbar-item name="Home" icon="home-o" @click="go('/Home')">主页</van-tabbar-item>
  <van-tabbar-item name="Community" icon="friends-o" @click="go('/Community')">社区</van-tabbar-item>
  <van-tabbar-item name="Message" icon="chat-o" @click="go('/Message')">消息</van-tabbar-item>
  <van-tabbar-item name="Supermacket" icon="shop-o" @click="go('/shop')">超市</van-tabbar-item>
  <van-tabbar-item name="Me" icon="contact" @click="go('/Me')">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
import { XHeader, Tab, TabItem, XButton } from "vux";
import { Cell, Row, Col, Image,NavBar,Tabbar,TabbarItem } from "vant";
export default {
  name:'message',
  components: {
    XHeader,
    Tab,
    TabItem,
    XButton,
    [Cell.name]: Cell,
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image,
    [NavBar.name]:NavBar,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
  },

  data() {
    return {
      active:'Message',
      msgs: [
        {
          image:"https://img.yzcdn.cn/vant/cat.jpeg",
          title: "物业消息",
          time: "2019年9月8日",
          description: "您的物业费缴了吗？",
          abstract: "截至9月8日您已经。。"
        },
        {
          image:"https://img.yzcdn.cn/vant/cat.jpeg",
          title: "物业消息",
          time: "昨天18：00",
          description: "您的物业费缴了吗？",
          abstract: "截至9月8日您已经。。"
        },
        {
          image:"https://img.yzcdn.cn/vant/cat.jpeg",
          title: "物业消息",
          time: "昨天18：00",
          description: "您的物业费缴了吗？",
          abstract: "截至9月8日您已经。。"
        },
      ]
    };
  },
  methods: {
    msg_show(){
      this.$router.push({ path:'/message/ShowMsg'})
    },
    go(where){
          this.$router.push(where)
    },
  }
};
</script>

<style scoped>
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
.msg_cell {
  height: 200px;
  font-size: 20px;
}
.msg {
  height: 50px;
}
.all {
  height: 100px;
}
.img {
  height: 75px;
}
.wuye {
  margin-top: 10px;
  font-size: 17px;
}
.time {
  font-size: 13px;
  margin-left: 90px;
  color: darkgray;
}
.title {
  font-size: 14px;
  color: orange;
}
.describe {
  font-size: 13px;
  color: darkgray;
}
.image {
  margin-top: 10px;
  margin-left: 10px;
}
.title_div {
  margin-top: 10px;
}
.van-tabbar{
  height:60px;
}
</style>
