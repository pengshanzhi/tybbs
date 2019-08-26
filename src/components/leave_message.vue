<template>
  <div  style="text-align:left;">
          <!-- 页面头部 -->
      <van-nav-bar
      title="活动信息"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      
     
    />
       


    <div style="text-align:center;margin-top:20px">
      <!-- <span style="font-size: 15px; color:darkgray">{{title}}</span> -->
    </div>
    <!-- <van-divider :style="{ color: '#1989fa', borderColor: 'darkgray', padding: '0 16px' }"></van-divider> -->

    <group>
      <x-textarea :max="200" v-model="data" placeholder="评论将由管理员筛选后显示，对所有人可见" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
    </group>

<br>
<br>
<div style="text-align:center"> <van-button  style="height:40px" plain type="primary" @click="tohoutai">发布评论</van-button></div>
   
  </div>
</template>

<script>

import axios from "axios";
import { XHeader ,XTextarea,Group,XButton} from "vux";
import { Divider, Image, Row, Col, Icon, Dialog, Button,NavBar } from "vant";
export default {
  name: "leave_message",
  components: {
    XHeader,
    XTextarea,
    XButton,
    Group,
    [Divider.name]: Divider,
    [Image.name]: Image,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Dialog.naem]: Dialog,
    [Button.name]:Button,
    [NavBar.name]:NavBar,
  },
  data() {
    return {
      title: "单亲派对活动",
      data:"",
      id:"",
      actid:"",
      username:this.$store.state.currentUser,
    };
  },
  methods: {
      tohoutai(){
          console.log(this.data);
            this.postComment();
                     Dialog.alert({
        message: "提交成功"
        
      }).then(() => {
        this.$router.push({
        path:"/Home/ActivityMain/Detail",
        name:'Detail',
        params:{
                 id : this.id,
                }
        });
       
      })
           

      
          
      },
      getParams () {
        
        this.id=this.$route.params.id
        this.actid = this.$route.params.actid
       
      },
      onClickLeft() {
      this.$router.push({
        path:"/Home/ActivityMain/Detail",
        name:'Detail',
        params:{
                 id : this.id,
                 
                }
        });
      
    },
    postComment(){
      axios.post(domain.testUrl+'/Activity/AddComment?userName='+this.username+'&actid='+this.actid+'&comment='+this.data)
        .then((res) => {
          console.log(res);
          
      
      
      
      })
    }
  },
  created(){
    this.getParams();
    
  }
};
</script>


<style scoped>

</style>

