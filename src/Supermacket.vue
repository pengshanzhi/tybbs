<template>
    <div>
            <van-nav-bar
      title="标题"
    
      @click-left="onClickLeft"
  
    />

          <!-- ********搜索栏******** -->
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="searchContent"
      position="absolute"
      auto-scroll-to-top
      :auto-fixed="false"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
    ></search>

<!-- ********商品导航栏******** -->
   <van-tabs v-model="active" animated type="line">
  
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

<!-- 底部导航 -->
  <van-tabbar
  v-model="active"
  active-color="#07c160"
  inactive-color="#000">
  <van-tabbar-item name="Home" icon="home-o" @click="go('/Home')">主页</van-tabbar-item>
  <van-tabbar-item name="Community" icon="friends-o" @click="go('/Community')">社区</van-tabbar-item>
  <van-tabbar-item name="Message" icon="chat-o" @click="go('/Message')">消息</van-tabbar-item>
  <van-tabbar-item name="Supermacket" icon="shop-o" @click="go('/Supermacket')">超市</van-tabbar-item>
  <van-tabbar-item name="Me" icon="contact" @click="go('/Me')">我的</van-tabbar-item>
  </van-tabbar>
    </div>
</template>


<script>
import axios from 'axios';
import { Search } from "vux";
import { Tabbar, TabbarItem,NavBar,Tab, Tabs,Card } from 'vant';
export default {
    name:'Supermacket',
    components: {
    Search,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
    [NavBar.name]:NavBar,
    [Card.name]: Card,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    },
    
    data(){
    return {
      active: 'Supermacket',
      activeName: "a",
      manList:[],
      womanList:[],
      fruitList:[{
        num: "20",
        price: "168",
        desc: "Vans新款上市！" ,
        title: "男士短袖",
        img: require("../src/assets/productPic/man/T-shirt1.png")
      },
      {
        num: "12",
        price: "198",
        desc: "Vans新款上市！" ,
        title: "男士短袖",
        img: require("../src/assets/productPic/man/T-shirt2.png")
      },
      {
        num: "8",
        price: "118",
        desc: "Vans新款上市！" ,
        title: "男士短袖",
        img: require("../src/assets/productPic/man/T-shirt3.png")
      },
      {
        num: "35",
        price: "119",
        desc: "特价，热销！" ,
        title: "男士牛仔裤",
        img: require("../src/assets/productPic/man/jeans1.png")
      },
      {
        num: "20",
        price: "168",
        desc: "Vans新款上市！" ,
        title: "男士牛仔裤",
        img: require("../src/assets/productPic/man/jeans2.png")
      },
      {
        num: "50",
        price: "199",
        desc: "Vans新款上市！" ,
        title: "男士牛仔裤",
        img: require("../src/assets/productPic/man/jeans3.png")
      }
      ],

// 零食产品信息列表
snackList:[{
        num: "20",
        price: "168",
        desc: "Vans新款上市！" ,
        title: "男士短袖",
        img: require("../src/assets/productPic/man/T-shirt1.png")
      },
      {
        num: "12",
        price: "198",
        desc: "Vans新款上市！" ,
        title: "男士短袖",
        img: require("../src/assets/productPic/man/T-shirt2.png")
      },
      {
        num: "8",
        price: "118",
        desc: "Vans新款上市！" ,
        title: "男士短袖",
        img: require("../src/assets/productPic/man/T-shirt3.png")
      },
      {
        num: "35",
        price: "119",
        desc: "特价，热销！" ,
        title: "男士牛仔裤",
        img: require("../src/assets/productPic/man/jeans1.png")
      },
      {
        num: "20",
        price: "168",
        desc: "Vans新款上市！" ,
        title: "男士牛仔裤",
        img: require("../src/assets/productPic/man/jeans2.png")
      },
      {
        num: "50",
        price: "199",
        desc: "Vans新款上市！" ,
        title: "男士牛仔裤",
        img: require("../src/assets/productPic/man/jeans3.png")
      }
      ],

// 超市广告轮播信息
      marketPicList: [
        {
          url: "https://www.taobao.com",
          img: require("../src/assets/swiperImg1.png")
          // title: '天翼社区超市特价优惠'
        },
        {
          url: "https://www.taobao.com",
          img: require("../src/assets/swiperImg2.png")
          // title: '清凉一夏，水果特惠'
        },
        {
          url: "https://www.taobao.com",
          img: require("../src/assets/swiperImg3.png")
          // title: '好吃，等你来！'
        },
        {
          url: "https://www.taobao.com",
          img: require("../src/assets/swiperImg4.png")
          // title: '牛肉大特价！'
        },
        {
          url: "https://www.taobao.com",
          img: require("../src/assets/swiperImg5.png")
          // title: '周六大促销！'
        }
      ],
  
      
      }
    },
    created(){
      this.getList();
    },

    
    methods:{
      go(where){
          this.$router.push(where)
    },
    goCarFruit(id){  
      {
        this.$router.push({ 
          path: "/car", 
          query:{
              List:this.fruitList[id]
          }
          })
      }    
    },
     goCarSnack(id){  
      {
        this.$router.push({ 
          path: "/car", 
          query:{
              List:this.snackList[id]
          }
          })
      }    
    },
    goCarMan(id){  
      {
        this.$router.push({ 
          path: "/car", 
          query:{
              List:this.manList[id]
          }
          })
      }    
    },
    goCarWoman(id){  
      {
        this.$router.push({ 
          path: "/car", 
          query:{
              List:this.womanList[id]
          }
          })
      }    
    },
    clickopen() {
      this.show = true;
    },
    onSubmit() {
   
      this.$router.push({ path: "/car" });
    },

    goCar(){
      this.$router.push({ path: "/car" });
    },
    goPay(){
      this.$router.push({ path: "/pay" });
    },
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
       },
    
    getList(){
      axios.get('https://www.easy-mock.com/mock/5d47cf5fb94f1f053cf8cfec/shop/man').then((res) => {
        console.log(res)
        this.manList = res.data.manList
        this.womanList = res.data.manList
      });
    }
  },
   

}
</script>


<style scoped>
.van-tabbar{
  height:60px;
}

.buttonTry {
  width: 50px;
  height: 20px;
  background: #660099;
  /* position:static;  */
  /* position: relative; */
  /* /* position:absolute;  */
  position:fixed;  
  top: 0px;
  left: 100px;

  /* top:400px; 
  left:140px; */
  /* left:200px; */
  /* margin: auto; */
  /* position:relative;	 */
  /* padding-left:100px */
}
.product {
  width: 380px;
  height: 100px;
  position: relative;
  margin: auto;
  text-align: left;
  /* top: 100px;
  left: 100px; */
}
.productBtn {
  position: absolute;
  top: 80px;
  left: 260px;
}
</style>
