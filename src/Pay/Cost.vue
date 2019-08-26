<template>
    
   <div class="mainColor">
      <!-- 页面头部 -->
      <van-nav-bar
      title="缴费"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
      style="position:fixed;z-index:100;width: 100%;"
    />
    <br><br>
<h3>当前用户：{{this.$store.state.currentUser}}</h3>
<br><br>

<!-- 缴费按钮 -->
<div style="margin:0px 10px">
    
      <flexbox>
        <flexbox-item>
          <x-button plain type="primary" @click.native="sub(10.00)">10元</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button plain type="primary" @click.native="sub(20)">20元</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button plain type="primary" @click.native="sub(50)">50元</x-button>
        </flexbox-item>
      </flexbox>
<br>
       <flexbox>
        <flexbox-item>
          <x-button plain type="primary" @click.native="sub(100)">100元</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button plain type="primary" @click.native="sub(200)">200元</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button plain type="primary" @click.native="sub(500)">500元</x-button>
        </flexbox-item>
      </flexbox>

     
      <br>
      <van-row>
        <van-col span="18" >
          <x-input title="其他金额"  placeholder="自定义金额" v-model="money"></x-input>
        </van-col>
        <van-col span="6" >
          <x-button mini plain type="primary" @click.native="sub(money)">充值</x-button>
        </van-col>
          <br>
      </van-row>
</div>

 <br> <br> <br>
 

    </div>
</template>


<script>
import axios from 'axios'
import { NavBar,Row,Col,Dialog} from 'vant'
import { XButton,Flexbox, FlexboxItem,XInput, } from 'vux'
export default {
    name:'Cost',
    components: {
    [NavBar.name]:NavBar,
    [Row.name]:Row,
    [Col.name]:Col,
    
    XButton,
    Flexbox, 
    FlexboxItem,
    XInput,
    },

     data(){
         return{
             userId:"123456",
             cost: 1,
             money:'',
             DisCount:'',
             sign:'',
             payMoney:''//支付的钱
         }
     },
     methods:{
         onClickLeft() {
      this.$router.push('/Home/payMain');
      
    },sub(num){
        this.payMoney=num;
        
        Dialog.confirm({
        title: '确认付款？',
        message: '￥'+num,
        beforeClose
      }).then(() => {
        // on confirm
        this.cost=parseInt(this.cost)+parseInt(num);
        console.log(this.cost)
     
        if(this.sign ==1){
          this.DisCount.h_eCost=String(this.cost);
          console.log(this.DisCount.h_eCost)
        }else if(this.sign ==2){
          this.DisCount.h_wCost=String(this.cost);
        }else if(this.sign ==3){
          this.DisCount.h_gCost=String(this.cost);
        }else if(this.sign ==4){
          this.DisCount.h_telCost=String(this.cost);
        }else if(this.sign ==5){
          this.DisCount.h_intCost=String(this.cost);
        }else if(this.sign ==6){
          this.DisCount.h_comCost=String(this.cost);
        }
        console.log(this.DisCount)
         this.goPaySuccess();
        
       
        
      }).catch(() => {
        // on cancel
      });
    },
    getParams () {
      // 取到路由带过来的参数 
      var routerParams = this.$route.params.cost
      // 将数据放在当前组件的数据内
      this.cost = routerParams
      this.sign = this.$route.params.sign
      
      },
      getDiscount(){ //取到当前账户的账单
      axios.post('https://www.easy-mock.com/mock/5d47a880f801d914c45657c4/example_copy/Cost')
        .then((res) => {
          console.log(res);
        this.DisCount = res.data})
    },
    getDiscount1(){ //需要用
      axios.get( domain.testUrl+"/Cost?UserId="+this.$store.state.currentUser)
        .then((res) => {
          console.log(res);
        this.DisCount = res.data.data
         })
    },
    goPaySuccess(){
     
      this.$router.push({
                path:'/Home/payMain/Cost/pay_success',
                name:'pay_success',
                params:{
                payMoney : this.payMoney,
                where:'/Home/payMain/Cost'
              
                }
              })
    },


    postCost(){//需要调用Y
      axios.post(domain.testUrl+'/RCost?uid='+
      this.$store.state.currentUser+
      '&eleCost='+this.DisCount.h_eCost+
      '&waterCost='+this.DisCount.h_wCost+
      '&gasCost='+this.DisCount.h_gCost+
      '&telCost='+this.DisCount.h_telCost+
      '&intCost='+this.Discount.h_intCost+
      '&comCost='+this.DisCount.h_comCost)
.then((res) => {
console.log(res)
})
    }

    
  },created(){
   this.getParams();
    this.getDiscount1();
    
    console.log(this.cost)
    
  }
  
}

function beforeClose(action, done) {
  if (action === 'confirm') {
    setTimeout(done, 1000);
  } else {
    done();
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
