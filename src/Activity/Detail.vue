<template>
    <div  style="text-align:left;">
      <!-- 页面头部 -->
      <van-nav-bar
      title="活动信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
     
    />

    

    <div style="margin:0px 8px">

         <div style="text-align:center;margin-top:20px">
            <span style="font-size: 20px">{{Aitems[id].Activity.a_title}}</span>
        </div>
        <!-- <h2 style="text-align:center">{{Aitem.a_title}}</h2> -->

        
    <div style="margin-top: 20px">
      <span style="color: darkgray; font-size:14px;margin-left: 30px">天翼社区中心</span>
      <span style="color: darkgray; font-size:14px;margin-left: 120px;">{{Aitems[id].Activity.a_date}}</span>
    </div>
        <br />
    <br />
    <div style="margin:0 10px; width:338px">
      <span>{{Aitems[id].Activity.a_content}}</span>

    
    </div>

     <br />
    <br />
    <div style="text-align:center">
      <van-image width="180" height="150" :src="testUrl+Aitems[id].Activity.a_image" />
    </div>
    <br />
    <div style="text-align:center">
      <van-image width="180" height="150" :src="testUrl+Aitems[id].Activity.a_image" />
    </div>
    <br />
    <div style="text-align:center">
      <van-image width="180" height="150" :src="testUrl+Aitems[id].Activity.a_image" />
    </div>


        <!-- <img style="margin:0 auto" :src="Aitem.a_image"> -->
    </div>
    
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">快去发表你的评论吧</van-divider>

    <div>
      <span style="margin-left:20px; font-size:13px ; color: darkgray">精选留言</span>
      <span style="margin-left:220px;font-size:14px; color: cadetblue" @click="write_content(id)">写留言</span>
    </div>

    <br />
    <div v-for="(msg,i) in msgss" :key="i">
      <van-row>
        <van-col span="5">
          <van-image
            style="margin-left:20px;margin-top:5px"
            width="40"
            height="40"
            :src="testUrl+msg.user.u_headImg"
          />
        </van-col>
        <van-col span="18">
          <span style="font-size:13px;color: darkgray">{{msg.user.u_name}}</span>
          <span style="margin-left:194px; font-size:13px">
            <van-icon :name="dz_icon" />
            50
          </span>

          <br />
          <span style="font-size:13px;">{{msg.comment}}</span>
        </van-col>
      </van-row>
      <br />
    </div>



    </div>
</template>
<script>

import axios from 'axios'
import moment from 'moment'
import { Tabbar, TabbarItem,NavBar,IndexBar, IndexAnchor,Panel } from 'vant';
import { Divider, Image, Row, Col, Icon, Dialog } from "vant";
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
    [Divider.name]: Divider,
    [Image.name]: Image,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Dialog.naem]: Dialog
   

},
    data(){
    return {
       Aitems:[],
       Aitem :'',
       id:'',
       testUrl:domain.testUrl,
       dz_icon: require("../assets/dz.png"),
       msgss:[],
       msgs: [
        {
          // title:"单亲派对活动",
          // time: "2019年12月18日",
          content:
            "放松放松放松粉色条纹翻侧王妃v法沙发沙发服务法沙发沙发服务松放松放松粉色条纹翻侧王妃v法松放松放松粉色条纹翻侧王妃v粉色条纹翻侧王妃v法松放松放松粉色条纹翻侧法松",
          zan_sum: "137",
          username: "隆剑杰",
          tx_image: "https://img.yzcdn.cn/vant/cat.jpeg"
        },
        {
          // title:"单亲派对活动",
          // time: "2019年12月18日",
          content:
            "放松放松放松粉色条纹翻侧王妃v法沙发沙发服务松放松放松粉色条纹翻侧王妃v法松放松放松粉色条纹翻侧王妃v法松放松放松粉色条纹翻侧王妃v法松放松放松粉色条纹翻侧王妃v法松放松放松粉色条纹翻侧王妃v法松放松放松粉色条纹翻侧王妃v法",
          zan_sum: "137",
          username: "隆剑杰",
          tx_image: "https://img.yzcdn.cn/vant/cat.jpeg"
        }
      ]
   
      }
    },
    created(){
       this.getParams();
       this.getAll();
       
       
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
      this.$router.push('/Home/ActivityMain');
      
    },
    getParams () {
        // 取到路由带过来的参数 
        var routerParams = this.$route.params.Aitem
        // 将数据放在当前组件的数据内
        this.Aitem = routerParams
        this.id=this.$route.params.id
        console.log(this.Aitem)
        console.log(this.id)
      },
      getAll(){
        var i =0;
      axios.get(domain.testUrl+'/Activity')
        .then((res) => {
          console.log(res);
        this.Aitems = res.data.data
        this.msgss = this.Aitems[this.id].Comments;
        
      for(i;i<this.Aitems.length;i++){
        this.Aitems[i].Activity.a_date = moment(this.Aitems[i].Activity.a_date).format("YYYY-MM-DD")
      }
      
      })
    },
       write_content(id) {
       this.$router.push({ 
         path: "/Home/ActivityMain/Detail/leave_message" ,
         name:'leave_message',
       params:{
                 id : id,
                 actid : this.Aitems[id].Activity.a_id
               
      
                }
       });
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
