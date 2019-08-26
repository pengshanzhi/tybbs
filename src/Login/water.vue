<template>
    <div>

      <van-nav-bar
      title="标题"
      left-text="返回"

      left-arrow
      @click-left="onClickLeft"
  
    />

    </div>
</template>
<script>
import { Tabbar, TabbarItem,NavBar,Image } from 'vant';

export default {
    name:'water',
    components: {
    Swiper,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
    [NavBar.name]:NavBar,
    [Image.name]: Image,

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
      this.$router.push('/Me');
      
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
