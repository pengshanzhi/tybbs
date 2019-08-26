<template>
    <div class="mainColor" style="text-align:left;">
      <!-- 页面头部 -->
      <van-nav-bar
      title="活动信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
     
    />

    <div>
        <h2 style="text-align:center">{{Aitem.l_title}}</h2>
        <p>{{Aitem.l_detailMsg}}</p>
        <img  style="text-align:center" :src="Aitem.l_images">
        <img  style="text-align:center" :src="Aitem.l_images">
        <img  style="text-align:center" :src="Aitem.l_images">
    </div>
    



    </div>
</template>
<script>

// import axios from 'axios'
import { Tabbar, TabbarItem,NavBar,IndexBar, IndexAnchor,Panel } from 'vant';
import { Swiper,Grid,GridItem,} from 'vux';
export default {
    name:'Detail',
    components: {
    Swiper,
    Grid,
    GridItem,
    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
    [NavBar.name]:NavBar,
     [IndexBar.name]:IndexBar,
    [IndexAnchor.name]:IndexAnchor,
    [Panel.name]:Panel,
   

},
    data(){
    return {
       Aitems:[],
       Aitem :''
   
      }
    },
    created(){
       this.getParams()
      //  axios.get(`https://www.easy-mock.com/mock/5d47a880f801d914c45657c4/example_copy/Activity`)
      //   // .then(function(data){
      //   //     console.log(data);
      //   //     this.Aitems = data.body;
      //   // })
      //   .then((res) => {
      //     // console.log(res);

      //   this.Aitems = res.data.data
      //   console.log( this.Aitems)
      // })
    },
    methods:{
     onClickLeft() {
      this.$router.push('/Home/LostMain');
      
    },
    getParams () {
        // 取到路由带过来的参数 
        var routerParams = this.$route.params.Aitem
        // 将数据放在当前组件的数据内
        this.Aitem = routerParams
        console.log(this.Aitem)
      }


  },
   watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
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
.mainText{
    margin-left: 3%;
    text-align: left;
}
</style>
