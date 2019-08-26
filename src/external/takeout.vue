<template>
    <div>
    <van-nav-bar
      title="饿了吗"
      left-text="返回"
        fixed
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
        iframeSrc:'https://h5.ele.me/'
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
      height: 680px;
  }
 
  
  </style>
  