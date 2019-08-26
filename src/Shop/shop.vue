<template>
  <div>
    <!-- ********超市标题栏******** -->
    <van-nav-bar
      title="天翼超市"
    
      style="position:fixed; z-index:100000; width: 100%;"
    />
<br><br><br>


 <div style="text-align:right;margin-right:20%">
  <!-- <van-button round type="danger" 
      style="position:fixed;z-index:100;margin-top:135%;" 
      @click="go('/pay')" > -->
  <van-icon  size="45px" name="cart-o" color="red"  @click="go('/pay')" style="position:fixed;z-index:100;margin-top:128%;" />
   <!-- &nbsp;&nbsp;购物车</van-button> -->

</div>


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

    <!-- ********广告轮播栏******** -->
    <swiper
      :list="marketPicList"
      :interval="1500"
      v-model="demo01_index"
      @on-index-change="demo01_onIndexChange"
      :auto="true"
      :loop="true"
    ></swiper>

    <!-- ********商品导航栏******** -->
    <van-tabs v-model="activeName" animated type="line" style="text-align:left">
  
      <van-tab title="水果" name="a">
        <van-card @click="goCarFruit(index)" v-for="(item,index) in fruitLists"   :price="item.g_price" :desc="item.g_desc" :title="item.g_title" tag="特价" :thumb="testUrl+item.g_images" :key="index" /> 
      </van-tab>

      <van-tab title="零食" name="b">
        <van-card @click="goCarSnack(index)" v-for="(item,index) in snackLists"   :price="item.g_price" :desc="item.g_desc" :title="item.g_title"  tag="特价" :thumb="testUrl+item.g_images" :key="index" /> 
      </van-tab>  

      <van-tab title="男装" name="c">
        <van-card @click="goCarMan(index)" v-for="(item,index) in manLists"  :price="item.g_price" :desc="item.g_desc" :title="item.g_title" :thumb="testUrl+item.g_images" tag="特价" :key="index" > 
       <!-- 商品可加按钮 -->
        <div slot="footer">
          <van-button size="mini" @click="goCar">加入购物车</van-button>
          <van-button size="mini" @click="goPay">购买</van-button>
        </div>
       </van-card>
      </van-tab>

      <van-tab title="女装" name="d">
        <van-card @click="goCarWoman(index)" v-for="(item,index) in womanLists"  :price="item.g_price" :desc="item.g_desc" :title="item.g_title" :thumb="testUrl+item.g_images" tag="特价" :key="index" /> 
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
import { XHeader, Swiper, Search } from "vux";
import { Button } from "vant";
import { Card } from "vant";
import { Tab, Tabs } from "vant";
import { Icon, GoodsAction, GoodsActionIcon, GoodsActionButton,  TabbarItem,Tabbar,NavBar} from "vant";
import axios from 'axios';

export default {
  name:'ShopMain',
  components: {
    XHeader,
    Swiper,
    Search,
    [Button.name]: Button,
    [Card.name]: Card,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,  
    [GoodsActionButton.name]: GoodsActionButton,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem, 
    [NavBar.name]:NavBar,
 
   
  },
  data() {
    return {
     
      g_id:"",
      active: "shop",
      show: false,
      searchContent: "",
      activeName: "a",
      testUrl:domain.testUrl,
      // 轮播图片路径
      // iconLink: [
      //   {
      //     img: require("../assets/taobao.png")
      //   },
      //   {
      //     img: require("../assets/logo.png")
      //   },
      //   {
      //     img: require("../assets/taobao.png")
      //   },
      //   {
      //     img: require("../assets/taobao.png")
      //   }
      // ],
        fruitList:[],
        snackList:[],
        manList:[],
        womanList:[],


        fruitLists:[],
        snackLists:[],
        manLists:[],
        womanLists:[],


// 超市广告轮播信息
      marketPicList: [
        {
          url: '',
          img: require("../assets/swiperImg1.png")
          // title: '天翼社区超市特价优惠'
        },
        {
          url: '',
          img: require("../assets/swiperImg2.png")
          // title: '清凉一夏，水果特惠'
        },
        {
          url: '',
          img: require("../assets/swiperImg3.png")
          // title: '好吃，等你来！'
        },
        {
          url: '',
          img: require("../assets/swiperImg4.png")
          // title: '牛肉大特价！'
        },
        {
          url: '',
          img: require("../assets/swiperImg5.png")
          // title: '周六大促销！'
        }
      ],
    };
  },

//方法一：axios（get方法）
  created(){
        
      this.getShopList();
   },

//方法二：axios（get方法）
  // created(){
  //   this.$http.get('https://www.easy-mock.com/mock/5d47cf5fb94f1f053cf8cfec/shop/fruit')
  //   .then((data) => {
  //       this.fruitList = data.body.fruitList,
  //       this.snackList = data.body.snackList,
  //       this.manList = data.body.manList,
  //       this.womanList = data.body.womanList
  //     })
  // },


  methods: { 
    goCarFruit(id){  
      {
        this.$router.push({ 
          path: "/car", 
          query:{
              List:this.fruitLists[id],
              g_id:this.fruitLists[id].g_id

          }
          })
      }    
    },
    getShopList(){
      var kind=0;
      var i = 0;
      var list=[];
      var a = 0;
      var b = 0;
      var c= 0;
      var d = 0;
       axios.get(domain.testUrl+"/shopItem").then((res) => {
              list=res.data.data; 
              console.log(list);
              for(i;i<list.length;i++){
        if(list[i].g_kind==1){
          this.fruitLists[a]=list[i];
          a++;
        }else if(list[i].g_kind==2){
          this.snackLists[b]=list[i];
          b++;
        }else if(list[i].g_kind==3){
          this.manLists[c]=list[i];
          c++;
        }else if(list[i].g_kind==4){
          this.womanLists[d]=list[i];
          d++;
        }
      }
     


            });


        //     fruitLists:[],
        // snackLists:[],
        // manLists:[],
        // womanLists:[],
      
    },
  
     goCarSnack(id){  
      {
        this.$router.push({ 
          path: "/car", 
          query:{
              List:this.snackLists[id],
              g_id:this.snackLists[id].g_id
          }
          })
      }    
    },
    goCarMan(id){  
      {
        this.$router.push({ 
          path: "/car", 
          query:{
              List:this.manLists[id],
              g_id:this.womanLists[id].g_id
          }
          })
      }    
    },
    goCarWoman(id){  
      {
        this.$router.push({ 
          path: "/car", 
          query:{
              List:this.womanLists[id],
              g_id:this.womanLists[id].g_id
          }
          })
      }    
    },
      go(where){
          this.$router.push(where);
    
    },
    // gocar1(){
    //     this.$router.push({ path: "/fruit1" });
    // },
    clickopen() {
      this.show = true;
    },
    onSubmit() {
      // alert(this.searchContent)
      //将搜索内容送到后台进行搜索
      //进入下一个搜索列表页面
      this.$router.push({ path: "/car" });
    },
    // goCar(){
    //   this.$router.push({ path: "/car" });
    // },
    goPay(){
      this.$router.push({ path: "/pay" });
    },
    // POST方法
    // submit() {
    //        // alert(this.username + "," + this.password)
    //         this.$http({
    //             method: "post",
    //             url: "/api/user/login",
    //             data: {
    //                 username: this.username,
    //                 password: this.password
    //             }
    //         }).then((res) => {
    //             console.log(res.data);
    //             if(!res.data.ok){
    //                 alert(res.data.msg);
    //             }else{
    //                 //
    //             }

    //         })
    //     }
  }
}
</script>

<style scoped>
.vux-header {
  /* background-color: #660099; */
  background-color: #3bb142;
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
.van-tabbar{
  height:60px;
}
.topColor{
  background-color:rgb(191, 243, 208);
}
</style>
