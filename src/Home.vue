<template>

    <div class="mainColor">


 

<!-- 顶部 -->
<div>
    <van-row class="top">
      <van-col span="2" class="locationIcon"><van-icon name="location-o" size=20px /></van-col>
      <van-col span="14" style="text-align: left" class="topText">融汇温泉</van-col>
      <van-col span="3" class="topText"><van-icon name="manager-o" size=25px /></van-col>
      <van-col span="3" class="topText"><van-icon name="chat-o" size=25px /></van-col>
    </van-row>
</div>
    
<!-- 轮播广告图 -->
<div><swiper :list="images" auto  style="width:100%;margin-top:52px;margin-bottom:5px;" 
        height="180px" 
        dots-class="custom-bottom"
        dots-position="center" scoped>
      </swiper></div>

      

<!-- 第一层功能按钮 -->
    <grid :show-lr-borders="false" :show-vertical-dividers="false" :cols=4>
      <grid-item height:20px :label="item.label" v-for="(item,index) in itemList1" :key="index" >
        <img  slot="icon" :src="item.src" @click="go(item.go)">
      </grid-item>
    </grid>


<!-- 第二层功能按钮 -->    
    <!-- <grid :show-lr-borders="false"  :show-vertical-dividers="false">
      <grid-item height:20px :label="item.label" v-for="(item,index) in itemList2" :key="index" >
        <img  slot="icon" :src="item.src" @click="go(item.go)">
      </grid-item>
    </grid> -->


    <!-- 公告牌 -->
<van-row style="height:22px; margin-top:28px;">
  <van-col  span="3"><van-icon :name = "List.notice"  class="leftIcon"  /></van-col>
  <van-col span="16" style="margin-top:5px; font-size:16px; color: black; text-align: left; font-weight:bold;"> &nbsp;&nbsp;公告牌</van-col>
  <van-col span="3" style="margin-top:8px; font-size:20px; color: black;">  </van-col>
</van-row>

  <group>
  <van-row style="margin-top:0px">
      <van-col span="4" style="margin-top:20px"><van-icon :name="List.trumpet" size=16px /></van-col>
      <van-col span="19" style="font-size:15px;color:#515151">
       
          <marquee style="margin-top:8px;margin-bottom:8px"  >
            <marquee-item v-for="(list,i) in SList1" :key="i"  class="align-middle">{{list.a}} <br> </marquee-item>
          </marquee>

          <marquee style="margin-top:8px;margin-bottom:8px" >
            <marquee-item v-for="(list,i) in SList2" :key="i"  class="align-middle">{{list.a}}</marquee-item>
          </marquee>
         
      </van-col>
      <!-- <van-col span="3" style="margin-top:28px" ><van-icon :name="List.right" size=15px /></van-col> -->
    </van-row>
  </group>

<!-- 半径优选广告 -->
<van-row  class="text"  style="height:36px; margin-top:25px">
  <van-col  span="3" style="margin-top:0px;"><van-icon :name = "List.shop"  class="leftIcon" /></van-col>
  <van-col span="16" style="margin-top:5px; font-size:16px; color: black; text-align: left; font-weight:bold;"> &nbsp;&nbsp;半径优选</van-col>
  <van-col span="3" style="margin-top:8px; font-size:20px; color: black;">  </van-col>
</van-row>
    <grid :cols="3" :show-lr-borders="false">
      <grid-item v-for="(ShopImage,index) in ShopImages" :key="index">
        <span class="grid-center">
          <van-image
            width="5rem"
            height="5rem"
            fit="cover"
            :src= "ShopImage.image"/>
        </span>
        <p style="margin-top:0px; margin-bottom:0px; font-size:12px; color:black; text-align: center;">{{ShopImage.des}}</p>
        <p style="margin-top:0px; font-size:14px; color:red; text-align: center;">{{ShopImage.price}}</p>
      </grid-item>
    </grid>



  



<!-- 底线 -->
<br><br>
<divider>我是有底线的</divider>
><br><br>

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

import axios from 'axios'
import { XHeader,Swiper,Grid,GridItem,Divider,Marquee, MarqueeItem, Panel, Group, Card,Cell} from 'vux';
import { Button ,Icon,NavBar,Row, Col,Swipe, SwipeItem,Tabbar, TabbarItem, Image} from 'vant';
// import { homedir } from 'os';

export default {
    name:'Home',
    components: {
    XHeader,
    Swiper,
    Grid,
    GridItem,
    Divider,
    Marquee, 
    MarqueeItem,
    Panel,
    Group,
    Cell,

    [Button.name]:Button,
    [Icon.name]:Icon,
    [NavBar.name]:NavBar,
    [Row.name]: Row,
    [Col.name]:Col,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
    [Image.name]:Image,




  },


    data(){
    return {
      active:"Home",
      key:0,
      Aitems:[],
      username:"123",

      // 按钮图片文字
      itemList1:[{
        label:'充值缴费',
        src:require("../src/assets/Pay.png"),
        go:'/Home/payMain'
        },{
        label:'小区活动',
        src:require("../src/assets/Activity.png"),
        go:'/Home/ActivityMain'
        },{
        label:'失物招领',
        src:require("../src/assets/find.png"),
        go:'/Home/LostMain'
      },{
        label:'相亲派对',
        src:require("../src/assets/love.png"),
        go:'/Home/LoveMain'
      },
      {
        label:'星座运程',
        src:require("../src/assets/star.png"),
        go:'/Home/Star'
        },{
        label:'外卖送',
        src:require("../src/assets/waimai.png"),
        go:'/Home/takeout'
        },{
        label:'快递100',
        src:require("../src/assets/express.png"),
        go:'/Home/express',
      },{
        label:'事务所',
        src:require("../src/assets/tell.png")
      }],
        itemList2:[{
        label:'星座运程',
        src:require("../src/assets/star.png"),
        go:'/Home/Star'
        },{
        label:'外卖送',
        src:require("../src/assets/waimai.png"),
        go:'/Home/takeout'
        },{
        label:'快递100',
        src:require("../src/assets/express.png"),
        go:'/Home/express',
      },{
        label:'事务所',
        src:require("../src/assets/tell.png")
      }],

      //轮播图片
        images: [

          
        {
            url: 'javascript:',
            img: require('../src/assets/swiper1.png'),
        }, {
            url: 'javascript:',
            img: require('../src/assets/swiper2.png'),
        },{
          url: 'javascript:',
            img: require('../src/assets/swiper3.png'),
        }
      ],
      
      //一些图标
      List:
        {shop: require("../src/assets/shopping.png"),
         notice: require("../src/assets/notice.png"),
         trumpet: require("../src/assets/trumpet.png"),
         right: require("../src/assets/right.png"),
         Pay: require("../src/assets/Pay.png"),
         find: require("../src/assets/find.png"),
         love: require("../src/assets/love.png"),
         Activity: require("../src/assets/Activity.png"),
         star: require("../src/assets/star.png"),
         day: require("../src/assets/day.png")

         },
      SList1:[{
        a:"画画比赛将在8月16日举行"
      },{
        a:"近日天气炎热，大家注意防暑降温"
      },{
        a:"社区瑜伽课堂开课啦...."
      },{
        a:"电信办理宽带送话费啦..."
      },{
        a:"飞虎队VS大猫队，篮球联赛等你来"
      }
      ],

      SList2:[{
        a:"阳光义教活动来了...."
      },{
        a:"争当小区志愿者，我们都是社会主义接班人"
      },{
        a:"勇往直前，激流勇进，加油"
      },{
        a:"叮叮当，今日立秋，你在干嘛..."
      },{
        a:"8月中旬，手拉手活动就差你了..."
      }
      ],



      //半径优选商品和描述,需要后台数据
      ShopImages:[
        {
          image: require("../src/assets/shop1.png"),
          des: "精选女装",  
          price: "￥80"
      },{
          image: require("../src/assets/shop2.png"),
          des: "化妆达人",  
          price: "￥80"
      },{
          image: require("../src/assets/shop3.png"),
          des: "面膜护肤",  
          price: "￥90"
      },{
          image: require("../src/assets/shop4.png"),
          des: "粉扑工具",  
          price: "￥20"
      },{
          image: require("../src/assets/shop5.png"),
          des: "日常工具",  
          price: "￥10"
      },{
          image: require("../src/assets/shop6.png"),
          des: "雨伞日用",  
          price: "￥30"
      }
      ],

    
        
      
    }
  },

 

  methods:{
      go(where){
          this.$router.push(where);
    
    },
    goes(where){
          window.open(where,"_self");
    
    },
    
  },watch: {
// 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
'$route': 'getParams'
},
  created(){
   
        axios.get('https://www.easy-mock.com/mock/5d47a880f801d914c45657c4/example_copy/Activity')
        .then((res) => {
          console.log(res);
        this.Aitems = res.data.Activity
      })
      
    }

}


</script>


<style  lang="less" scoped>
.locationIcon{
  margin-top: 8px;
  text-align: left;
  margin-left: 5%;
  
  color: rgb(104, 170, 126);
}
.mainColor{
  background-color:#f7fefa;
  margin: 0 5px
}
.topText{
  margin-top: 5px;
  font-size: 20px;
  color: black;
}

.top{
  margin-top: 0px;
  position: fixed;
  top:0px;
  padding: 8px 0;
  box-sizing: border-box;
  background-color:white;
  z-index: 1000;
  width: 100%;

}
.van-tabbar{
  height:60px;
}

.weui-grid{
  padding-top: 4%;
  padding-bottom:0;  
}
.MoudleTitle{
  margin-top: 10px;
  margin-bottom:5px; 
  text-align: left;
  color: rgb(104, 170, 126);
}

/* 半径优先图标logo样式 */
.van-image__loading {
    display: block;
    width: 32px;
    height: 32px;
}

/* 左边的图标 */
.leftIcon{
  font-size:30px;
}

.align-middle {
  text-align: left;
}



</style>

