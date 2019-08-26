<template>
    <div>

      <van-nav-bar
      title="社区"
    />


<!-- 顶部标签选择导航 -->
<van-tabs v-model="activeName" >
  <van-tab title="小区闲聊" name="a" >
     <div style="text-align:left">
      <div style="margin: 15px; overflow: hidden;">
          <van-tag type="danger">热推</van-tag>
          <span>[ 这个暑假，哪吒你看了吗？]</span>
           <van-image  style="margin-top:5px" height="130px" class="image" fit="cover" :src="img" />
    </div>
    
 <div style="margin: 15px; overflow: hidden;">
          <van-tag type="danger">热爆</van-tag>
          <span>[ 培训结束了，你开心吗？]</span>
           <van-image  style="margin-top:5px" height="130px" class="image" fit="cover" :src="img1" />
    </div>

<div style="margin: 15px; overflow: hidden;">
          <van-tag type="danger">讨论</van-tag>
          <span>[ 后面的暑假，你怎么玩？]</span>
           <van-image  style="margin-top:5px" height="130px" class="image" fit="cover" :src="img2" />
    </div>

    <div style="margin: 15px; overflow: hidden;">
          <van-tag type="danger">热推</van-tag>
          <span>[ 这样的冷饮，还不点购？]</span>
           <van-image  style="margin-top:5px" height="130px" class="image" fit="cover" :src="img3" />
    </div>
  </div>
  <br><br>
  <br><br>
  </van-tab>
  <van-tab title="新闻热点" name="b" >

<div style="text-align:left"> <div style="margin-left:10px;margin-right:10px">
      <swiper
        :list="images"
        :show-dots="false"
        auto
        style="width:100%;margin-top:52px;margin-bottom:5px;"
        height="180px"
        dots-class="custom-bottom"
        dots-position="center"
        scoped
      ></swiper>
    </div>

    <van-cell-group title="军事">
      <div style="text-align:center">
        <van-image
          width="150px"
          style="margin-top:5px"
          height="130px"
          class="image"
          fit="cover"
          :src="img4"
        />

        <van-image
          width="150px"
          style="margin-top:5px;margin-left:15px"
          height="130px"
          class="image"
          fit="cover"
          :src="img5"
        />
      </div>

</van-cell-group>
    <van-cell-group>
      <span style="font-size:13px;margin-left:25px">武警毕业学员岗前培训</span>   <span style="font-size:13px;margin-left:37px">直击山东寿光洪灾救援</span>
    </van-cell-group>

<van-cell-group title="生活">

   <div style="margin: 15px; overflow: hidden;text-align:center">
       <van-image
 
        src="http://www.chinanews.com/life2013sd_homepage/U564P51T26D111F813DT20190708133202.jpg"
      />

      <span style="font-size:15px">上海“最美书店”成为民众“避暑胜地</span>
    </div>

</van-cell-group>

<van-cell-group title="热点追踪">
<span style="color:#191970;margin-left:15px;font-size:14px">女子驾劳斯莱斯堵北京一医院应急通道</span>
   <div style="margin: 15px; overflow: hidden;">
      <van-row>

        <van-col span="5">
          <van-image
          width="130px"
          style="margin-left:2px"
          height="80px"
          class="image"
          fit="cover"
          :src="img6"
        />
        </van-col>
        <van-col span="12" offset="5">

          <div style="margin-top:-50px;margin-left:150px;"><span  style="font-size:13px;">院方称，交警到场处罚，医院大门口处现已经恢复正常。</span>
          <span style="color:#191970;font-size:13px">[详情]</span></div>
          
        </van-col>
      </van-row>

    </div>

</van-cell-group>
   <div>
     <span style="margin-left:15px;color:#191970;font-size:13px">· 北大退档后补录考生是“留守少年” 一度插班复读</span>
   </div>
   <div>
     <span style="margin-left:15px;color:#191970;font-size:13px">· 乔家大院景区整改提升 全面清理过度商业化</span>
   </div>
   <div>
     <span style="margin-left:15px;color:#191970;font-size:13px">· 男子在网上辱骂抗洪殉职英雄遭网民声讨 已被刑拘</span>
   </div>
   <div>
     <span style="margin-left:15px;color:#191970;font-size:13px">· 河南永城通报玛莎拉蒂追尾致2死 3犯罪嫌疑人被批捕</span>
   </div></div>
<br><br><br><br>
   
  </van-tab>
  <van-tab title="生活妙招" name="c">内容 3</van-tab>
</van-tabs>


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
import {Swiper} from 'vux'
import { Tabbar, TabbarItem,Tab, Tabs, NavBar,Tag,Image ,Cell, CellGroup} from 'vant';
import axios from 'axios';
import VueResource from 'vue-resource';
export default {
    name:'Community',
    components: {
      Swiper,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [NavBar.name]:NavBar,
    [Tag.name]:Tag,
    [Image.name]:Image,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup
    },

    data(){
    return {
      active: 'Community',
      activeName: 'a',
      News:[],
      img: require ('../src/assets/nz.png'),
      img1:require ('../src/assets/mtbsb.png'),
      img2:require ('../src/assets/cqw.png'),
      img3:require ('../src/assets/yp.png'),
      img4:require ('../src/assets/news4.jpg'),
      img5:require ('../src/assets/news5.jpg'),
      img6:require ('../src/assets/news6.jpg'),
      images: [
        {
          url: "javascript",
          img: require("../src/assets/news1.jpg"),
          title: "航拍寿光弥河营里段西岸决口抢修"
        },
        {
          url: "javascript",
          img: require("../src/assets/news2.jpg"),
          title: "190余件清代沉船瓷器入藏国家博物馆"
        },
        {
          url: "javascript",
          img: require("../src/assets/news3.jpg"),
          title: "台风“罗莎”逼近日本 当地海岸附近掀起巨浪"
        }
      ]
      }
    },
    methods:{
      go(where){
          this.$router.push(where);
    },
    
  },
  created(){
        // axios.get('/api')
        // .then((res) => {
        //   console.log(res.data);
        // this.News = res.data.result.data;
        // console.log(this.News)
      // })


      //  this.$http({
      //           method: "post",
      //           url: "/Eapi",
      //           data: {
      //               key: "b7ff3663d67404eab815f53e3e9adebb",
      //               type: "top"
      //           }
      //       }).then((res) => {
      //           console.log(res.data);
      //          })

     }

}
</script>

<style scoped>
.van-tabbar{
  height:60px;
}
.topColor{
  background-color:rgb(191, 243, 208);
}
</style>
