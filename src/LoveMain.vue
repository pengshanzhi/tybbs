<template>
    <div class="mainColor" style="text-align:left;">
      <!-- 页面头部 -->
      <van-nav-bar
      title="相亲派对"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
      style="position:fixed;z-index:100;width: 100%;"
    />

<!-- 活动信息 -->
<br><br><br>
<!-- <van-panel  :title="Aitem.title"  :status="Aitem.date" v-for="(Aitem,index) in Aitems" :key=index>
  <div class="mainText" >
      <van-row>
        <van-col span="12"><van-image
            width="100"
            height="100"
            :src="Aitem.src"/>
        </van-col>
        <van-col span="12"> 
            {{Aitem.content}}
        </van-col>
    </van-row>      <br><br><br></div>
</van-panel> -->


<van-panel  :title="Aitem.title"  :status="Aitem.date" v-for="(Aitem,index) in Aitems" :key=index>
  <div class="mainText" >
      <van-row>
         
            {{Aitem.content}} <br><br><br>

            <div >
            <van-image   
             
            :src="Aitem.src"/>
            </div>
 
        
    </van-row>      <br><br><br></div>
</van-panel>


    </div>
</template>
<script>

import axios from 'axios'
import { Tabbar, TabbarItem,NavBar,IndexBar, IndexAnchor,Panel,Row,Col,Image } from 'vant';
import { Swiper,Grid,GridItem,} from 'vux';
export default {
    name:'LoveMain',
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
    [Row.name]: Row,
    [Col.name]:Col,
    [Image.name]:Image,
   

},
    data(){

        //活动信息列表
    return {
        Aitems:[]
         
      }
    },
    methods:{
     onClickLeft() {
      this.$router.push('/Home');
      
    }
  },created(){
        axios.post('https://www.easy-mock.com/mock/5d47a880f801d914c45657c4/example_copy/Love')
        .then((res) => {
          console.log(res);
        this.Aitems = res.data.data
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
.mainText{
    margin-left: 3%;
    margin-right: 3%;
    text-align: left;
}
</style>
