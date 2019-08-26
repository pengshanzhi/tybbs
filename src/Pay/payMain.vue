<template>
    <div class="mainColor">
      <!-- 页面头部 -->
      <van-nav-bar
      title="生活缴费"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
      style="position:fixed;z-index:100;width: 100%;"
    />
<br><br>
<hr>

    <van-row style="padding-top:15px;padding-bottom:15px;">
      <van-col span="12" >
          <img  :src="itemList1.src" ><br>{{itemList1.label}}<br>
      </van-col>
      <van-col span="6" style="padding-top:14px;padding-bottom:12px;text-align:right"> 
          <span style="font-size:18px;">余额: {{Discount.h_eCost}}&nbsp;&nbsp;</span>
      </van-col>
      <van-col span="6" style="text-align:left;padding-top:5px;"> 
          <button style="margin-top:8px;" @click="goes(Discount.h_eCost,1)">缴费</button><br>
      </van-col> 
    </van-row>
    <hr>

    <van-row style="padding-top:15px;padding-bottom:15px;">
      <van-col span="12" >
          <img  :src="itemList2.src" ><br>{{itemList2.label}}<br>
      </van-col>
      <van-col span="6" style="padding-top:14px;padding-bottom:12px;text-align:right"> 
          <span style="font-size:18px;">余额: {{Discount.h_wCost}}&nbsp;&nbsp;</span>
      </van-col>
      <van-col span="6" style="text-align:left;padding-top:5px;"> 
          <button style="margin-top:8px;" @click="goes(Discount.h_wCost,2)">缴费</button><br>
      </van-col> 
    </van-row>
<hr>
    
    <van-row style="padding-top:15px;padding-bottom:15px;">
      <van-col span="12" >
          <img  :src="itemList3.src" ><br>{{itemList3.label}}<br>
      </van-col>
      <van-col span="6" style="padding-top:14px;padding-bottom:12px;text-align:right"> 
          <span style="font-size:18px;">余额: {{Discount.h_gCost}}&nbsp;&nbsp;</span>
      </van-col>
      <van-col span="6" style="text-align:left;padding-top:5px;"> 
          <button style="margin-top:8px;" @click="goes(Discount.h_gCost,3)">缴费</button><br>
      </van-col> 
    </van-row>
<hr>
    
    <van-row style="padding-top:15px;padding-bottom:15px;">
      <van-col span="12" >
          <img  :src="itemList4.src" ><br>{{itemList4.label}}<br>
      </van-col>
      <van-col span="6" style="padding-top:14px;padding-bottom:12px;text-align:right"> 
          <span style="font-size:18px;">余额: {{Discount.h_telCost}}&nbsp;&nbsp;</span>
      </van-col>
      <van-col span="6" style="text-align:left;padding-top:5px;"> 
          <button style="margin-top:8px;" @click="goes(Discount.h_telCost,4)">缴费</button><br>
      </van-col> 
    </van-row>
<hr>

    
    <van-row style="padding-top:15px;padding-bottom:15px;">
      <van-col span="12" >
          <img  :src="itemList5.src" ><br>{{itemList5.label}}<br>
      </van-col>
      <van-col span="6" style="padding-top:14px;padding-bottom:12px;text-align:right"> 
          <span style="font-size:18px;">余额: {{Discount.h_intCost}}&nbsp;&nbsp;</span>
      </van-col>
      <van-col span="6" style="text-align:left;padding-top:5px;"> 
          <button style="margin-top:8px;" @click="goes(Discount.h_intCost,5)">缴费</button><br>
      </van-col> 
    </van-row>
<hr>

    
    <van-row style="padding-top:15px;padding-bottom:15px;">
      <van-col span="12" >
          <img  :src="itemList6.src" ><br>{{itemList6.label}}<br>
      </van-col>
      <van-col span="6" style="padding-top:14px;padding-bottom:12px;text-align:right"> 
          <span style="font-size:18px;">余额: {{Discount.h_comCost}}&nbsp;&nbsp;</span>
      </van-col>
      <van-col span="6" style="text-align:left;padding-top:5px;"> 
          <button style="margin-top:8px;" @click="goes(Discount.h_comCost,6)">缴费</button><br>
      </van-col> 
    </van-row>


<hr>






<br><br><br><br><br><br><br><br><br>
    </div>
</template>
<script>

import axios from 'axios'
import { Tabbar, TabbarItem,NavBar,Row,Col } from 'vant';
import { Swiper,Grid,GridItem, } from 'vux';
export default {
    name:'payMain',
    components: {
    Swiper,
    Grid,
    GridItem,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
    [NavBar.name]:NavBar,
    [Row.name]:Row,
    [Col.name]:Col,

},
    data(){
    return {
        Discount:"",
         // 按钮图片文字
         itemList1:{
        label:'电费',
        src:require("../assets/payEle.png"),
        },
        itemList2:{
        label:'水费',
        src:require("../assets/payWater.png")
        },
        itemList3:{
        label:'气费',
        src:require("../assets/payGas.png")
        },

      itemList4:{
        label:'有线电视',
        src:require("../assets/payTel.png"),
        go:'/Home/payMain'
        },
        itemList5:{
        label:'宽带',
        src:require("../assets/payInt.png")
        },
        itemList6:{
        label:'物业费',
        src:require("../assets/payCom.png")
      }          
      }
    },
    methods:{
     onClickLeft() {
      this.$router.push('/Home');
      
    },goes(cost,sign){
     
      this.$router.push({
                path:'/Home/payMain/Cost',
                name:'Cost',
                params:{
                cost : cost,
                sign : sign
                }
              })
    },
  },created(){
        axios.get(domain.testUrl+"/Cost?UserId="+this.$store.state.currentUser)
        .then((res) => {
          console.log(res);
        this.Discount = res.data.data
      })
    }
}
</script>

<style scoped>
.topColor{
  background-color:rgb(191, 243, 208);
}
.mainColor{
  background-color:#f7fefa;
  
}
</style>
