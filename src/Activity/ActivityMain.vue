<template>
    <div class="mainColor" style="text-align:left;">
      <!-- 页面头部 -->
      <van-nav-bar
      title="活动信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      
      fixed
      style="z-index:100;width: 100%;"
    />
<br><br><br>
<img  width="100%" height="150px"  :src="Ahead" >
<!-- 活动信息 -->
<van-panel style="border-style:solid;border-width:medium;margin:6px 10px;border-color:rgb(191, 243, 208)" 
:title="Aitem.Activity.a_title"  :status= Aitem.Activity.a_date v-for="(Aitem,index) in Aitems" :key=index>
  <div class="mainText">{{Aitem.Activity.a_des}} 
    <div slot="footer">
 <p style="text-align:right;margin-right:5%" @click="go(index)">详情</p>  </div></div><br>
</van-panel>


    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
import { Tabbar, TabbarItem,NavBar,IndexBar, IndexAnchor,Panel } from 'vant';
import { Swiper,Grid,GridItem,} from 'vux';
export default {
    name:'ActivityMain',
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

        //活动信息列表
    return {
        Aitems:[] ,
        Ahead:require("../assets/Ahead.png")
        
         
      }
    },
    methods:{
     onClickLeft() {
      this.$router.push('/Home');
      
    },go(id){
      this.$router.push({
                path:'/Home/Detail',
                name:'Detail',
                params:{
                 id : id,
                Aitem:this.Aitems[id]
      
                }
              })
    }
  },
  created(){
    var i=0;
        axios.get(domain.testUrl+'/Activity')
        // this.$http.get('https://www.easy-mock.com/mock/5d47a880f801d914c45657c4/example_copy/Activity')
        // .then(function(data){
        //     console.log(data);
        //     this.Aitems = data.list
        // })
        .then((res) => {
          console.log(res);
        this.Aitems = res.data.data
      for(i;i<this.Aitems.length;i++){
        this.Aitems[i].Activity.a_date = moment(this.Aitems[i].Activity.a_date).format("YYYY-MM-DD")
       
      }
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
    text-align: left;
    
   
}


</style>

