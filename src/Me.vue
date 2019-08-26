<template>
    <div>

      <van-nav-bar
      title="标题"
      left-text="返回"

      left-arrow
      @click-left="onClickLeft"
  
    />




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
import { Tabbar, TabbarItem,NavBar } from 'vant';
import { Swiper } from 'vux';
export default {
    name:'Me',
    components: {
    Swiper,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
    [NavBar.name]:NavBar,

},
    data(){
    return {
      active: 'Me',
      
              
      }
    },
    methods:{
      go(where){
          this.$router.push(where)
    }, onClickLeft() {
      this.$router.push('/Home');
      
    }
  }

}
</script>

<style scoped>
.vux-img{
  height: 180px
}
.van-tabbar{
  height:60px;
}
</style>
