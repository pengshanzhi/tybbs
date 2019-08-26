<template>

<div>
 <van-nav-bar
      title="天翼超市"
      class="topColor"
      style="position:fixed;z-index:100;width: 100%;"
    />
<br><br>
  <!-- ********广告轮播栏******** -->
    <swiper
      :list="marketPicList"
      :interval="1500"

      :auto="true"
      :loop="true"
    ></swiper>

<!-- ********商品导航栏******** -->
    <van-tabs v-model="activeName" animated type="line">
  
      <van-tab title="水果" name="a">
        <van-card @click="goCarFruit(index)" v-for="(item,index) in fruitList"  :num="item.num" :price="item.price" :desc="item.desc" :title="item.title" tag="特价" :thumb="item.url" :key="index" /> 
      </van-tab>

      <van-tab title="零食" name="b">
        <van-card @click="goCarSnack(index)" v-for="(item,index) in snackList"  :num="item.num" :price="item.price" :desc="item.desc" :title="item.title"  tag="特价" :thumb="item.url" :key="index" /> 
      </van-tab>  

      <van-tab title="男装" name="c">
        <van-card @click="goCarMan(index)" v-for="(item,index) in manList" :num="item.num" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.url" tag="特价" :key="index" > 
    
       </van-card>
      </van-tab>

      <van-tab title="女装" name="d">
        <van-card @click="goCarWoman(index)" v-for="(item,index) in womanList" :num="item.num" :price="item.price" :desc="item.desc" :title="item.title" :thumb="item.url" tag="特价" :key="index" /> 
      </van-tab>

    </van-tabs>

  <van-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000">
  <van-tabbar-item name="Home" icon="home-o" @click="go('/Home')">主页</van-tabbar-item>
  <van-tabbar-item name="Community" icon="friends-o" @click="go('/Community')">社区</van-tabbar-item>
  <van-tabbar-item name="Message" icon="chat-o" @click="go('/Message')">消息</van-tabbar-item>
  <van-tabbar-item name="shop" icon="shop-o" @click="go('/Shop')">超市</van-tabbar-item>
  <van-tabbar-item name="Me" icon="contact" @click="go('/Me')">我的</van-tabbar-item>
  </van-tabbar>

</div>
</template>


<script>
import { TabbarItem,Tabbar,NavBar } from "vant";
import { XHeader, Swiper, Search } from "vux";
import { Button } from "vant";
import { Card } from "vant";
import { Tab, Tabs } from "vant";
import { Icon, GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

export default {
    name:'ShopMain',
     components: {
   XHeader, 
   Swiper, 
   Search,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem, 
    [NavBar.name]:NavBar,
     [Button.name]: Button,
    [Card.name]: Card,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,  
    [GoodsActionButton.name]: GoodsActionButton,
  },
  data(){
      return{
          active: "shop",
          
          // 超市广告轮播信息
      marketPicList: [
        {
          url: "https://www.taobao.com",
          img: require("../assets/swiperImg1.png")
          // title: '天翼社区超市特价优惠'
        },
        {
          url: "https://www.taobao.com",
          img: require("../assets/swiperImg2.png")
          // title: '清凉一夏，水果特惠'
        },
        {
          url: "https://www.taobao.com",
          img: require("../assets/swiperImg3.png")
          // title: '好吃，等你来！'
        },
        {
          url: "https://www.taobao.com",
          img: require("../assets/swiperImg4.png")
          // title: '牛肉大特价！'
        },
        {
          url: "https://www.taobao.com",
          img: require("../assets/swiperImg5.png")
          // title: '周六大促销！'
        }
      ],
      }
  }
}
</script>

<style scoped>
.topColor{
  background-color:rgb(191, 243, 208);
}
</style>