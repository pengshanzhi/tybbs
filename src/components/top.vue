<template>
    <div class="mainColor">
      <!-- 页面头部 -->
      <van-nav-bar
      title="生活缴费"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
    />


    </div>
</template>
<script>
import { Tabbar, TabbarItem,NavBar } from 'vant';
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
   

},
    data(){
    return {

         
      }
    },
    methods:{
     onClickLeft() {
      this.$router.push('/Home');
      
    }
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
