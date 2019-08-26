<template>
  <div style="text-align:center ">

      <br>
      <br>
    <van-icon :name="zfcg_icon" class="success" />

    <div>
      <span class="zfcg_font">支付成功</span>
    </div>

    <br />
    <br />
    <br>
    <br>
    <div>
      <span>天翼社区翼支付提供服务</span>
    </div>
    <br />
    <br />
    <div>
      <van-icon :name="qian_icon" style="font-size:30px" />
      <span style="font-size:30px;font-weight: bold">{{money}}</span>
    </div>
    <br>
    <br><br>
    <van-button  class="ok_button" plain type="primary" @click="go(where)">确定</van-button>
  </div>
</template>

<script>
import {} from "vux";
import { Icon,Button } from "vant";
export default {
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button
  },
  data() {
    return {
      zfcg_icon: require("../assets/zfcg.png"),
      qian_icon: require("../assets/qian.png"),
      money:"98.20",
      where:""
    };
  },
  methods:{
    getCost () {
      // 取到路由带过来的参数 
      var routerParams = this.$route.params.payMoney
      // 将数据放在当前组件的数据内
  
      this.money = routerParams
      this.where = this.$route.params.where
     
      
      },go(where){
          this.$router.push(where);
    }
  },
  created(){
    this.getCost();
  }
};
</script>


<style scoped>
.success {
  font-size: 100px;
  margin-top: 30px;
}
.zfcg_font {
  font-weight: bold;
  color: rgb(116, 187, 116);
}
.ok_button {
    width: 180px;
    height: 40px;
}
</style>


