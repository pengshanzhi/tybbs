<template>
    <div class="mainColor" style="text-align:left;">
      <!-- 页面头部 -->

      <van-nav-bar
      title="失物招领"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
     
      style="position:fixed;z-index:100;width: 100%;"
    />
<br><br>
<!-- 按钮 -->
  <div style="text-align:right;margin-right:30%">
  <van-button round type="danger" 
      style="position:fixed;z-index:100;margin-top:140%;" 
      @click="goto('/Home/LostMain/SendLost')" >
  <van-icon  size="22px" name="edit" /> &nbsp;&nbsp;发布</van-button>
</div>
<img  width="100%" height="150px"  src="../assets/Lhead.png" >



<br>


<!-- 活动信息 -->
<van-panel  style="border-style:solid;border-width:medium;margin:6px 10px;border-color:rgb(240, 240, 164)" :title="Aitem.l_title"  :status="Aitem.l_time" v-for="(Aitem,index) in Aitems" :key=index>
  <div class="mainText">{{Aitem.l_detailMsg}}<br></div>
  <p style="text-align:right;margin-right:5%" @click="go(index)">详情</p>
</van-panel>



<br><br>
    </div>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
import { Tabbar, TabbarItem,NavBar,IndexBar, IndexAnchor,Panel,Button,Icon } from 'vant';
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
    [Button.name]:Button,
    [Icon.name]:Icon,

},
    data(){

        //活动信息列表
    return {
        Aitems:[
            // {
            //     title:'标题1',
            //     date:'日期1',
            //     content:'内容。。。内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
            // },
            // {
            //     title:'标题2',
            //     date:'日期2',
            //     content:'内容。。。内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
            // },
            // {
            //     title:'标题3',
            //     date:'日期3',
            //     content:'内容。。。内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
            // },
            // {
            //     title:'标题4',
            //     date:'日期4',
            //     content:'内容。。。内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
            // },
            // {
            //     title:'标题5',
            //     date:'日期5',
            //     content:'内容。。。内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
            // },
            
        ]
         
      }
    },
    methods:{
     onClickLeft() {
      this.$router.push('/Home');
      
    },go(id){
      this.$router.push({
                path:'/Home/LostMain/LostDetail',
                name:'LostDetail',
                params:{
                Aitem:this.Aitems[id]
                }
              })
    },goto(where){
      this.$router.push(where);
    }
  },created(){
      
        axios.get(domain.testUrl+"/PLost")
        
        .then((res) => {
          console.log(res);
        this.Aitems = res.data.data
        var i=0
         for(i;i<this.Aitems.length;i++){
        this.Aitems[i].l_time = moment(this.Aitems[i].l_time).format("YYYY-MM-DD")
       
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
    margin-top:30px;
}
</style>
