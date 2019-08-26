<template>
    <div>
    <van-nav-bar
      title="星座运程"
      left-text="返回"

      left-arrow
      @click-left="onClickLeft"
  
    />

        <iframe class="Iframe" :src="iframeSrc" >
        </iframe>
    </div>
</template>
 <script>

 import { NavBar } from 'vant';
 export default {
    components: {
    [NavBar.name]:NavBar,

},data(){
    return{
        iframeSrc:'https://m.xzw.com/'
    }
},
methods:{
     onClickLeft() {
      this.$router.push('/Home');
      }
}
 }
 </script>
  <style <style scoped>
  .Iframe{
      width: 100%;
      height: 800px;
  }
 
  
  </style>
  