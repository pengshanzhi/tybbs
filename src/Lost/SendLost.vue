<template>
    <div class="mainColor" style="text-align:left;">
      <!-- 页面头部 -->

      <van-nav-bar 
     
      title="失物信息发布"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
      fixed="true"
    />
<!-- <form action="" style="margin-top:80px;margin-left:20px">
    标题：<input type="text">
</form> -->

<!-- <van-cell-group style="margin-top:52px;">

  <van-field 
    v-model="title"
    label="标题"
    placeholder="请输入密码"
    required
  />


</van-cell-group> -->

<!-- 一些输入框 -->
<group style="margin-top:52px;">
  <x-input title="标题" v-model="Ltitle"></x-input>
  <selector title="信息类别" :options="['寻物', '招领']" v-model="messKind"></selector>
<datetime title="时间&emsp;&emsp;" v-model="time" value-text-align="left"></datetime>
<x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="5" v-model="detailMsg"></x-textarea>
</group>


<!-- 上传图片 -->
<p style="margin-left:15px">上传图片（最多三张）</p>
<van-uploader style="margin-left:15px"
  v-model="fileList"
  multiple
  :max-count="3"
  :after-read="onRoad"
/>

<br><br><br>
<div style="text-align:center">

  <!-- 提交按钮 -->
  <x-button plain mini  type="primary" 
  style="border-radius:80px; 
  font-size:17px"
  @click.native="tellUs">&nbsp;&nbsp;提交&nbsp;&nbsp;
  </x-button>


  </div>
<!-- <img src="fileList[0].content">
<p>{{fileList[0]}}</p> -->

    </div>
</template>
<script>

import axios from 'axios'
import { Tabbar, TabbarItem,NavBar,Button,Icon,Uploader,Dialog} from 'vant';
import { Swiper,Grid,GridItem, Group,Datetime, XInput, XTextarea,XButton,Selector} from 'vux';
export default {
    name:'SendLost',
    components: {
    Swiper,
    Grid,
    GridItem,
     Group,
     Datetime,
    XInput,
     XTextarea,
     XButton,
     Selector,
     

    [Tabbar.name]:Tabbar, 
    [TabbarItem.name]:TabbarItem,
    [Button.name]:Button,
    [Icon.name]:Icon,
    [NavBar.name]:NavBar,
    [Uploader.name]:Uploader,
  
   
    // [CellGroup.name]:CellGroup,
    // [Field.name]:Field,
},
    data(){

    return { 
        fileList: [],
        show: false,
        detailMsg:'',
        Ltitle:'',
        messKind:'',
        time:'',
         
      }
    },
    methods:{

      posts:function(){
            axios.post(domain.testUrl+"/Lost/Add?messKind="+this.messKind+"&detailMsg="+this.detailMsg+"&title="+this.Ltitle)
            // {
            //     detailMsg:this.detailMsg,
            //     title:this.Ltitle,
            //     messKind:this.messKind,
            //     time :this.time,

            // }
            
            .then(function(data){
                console.log(data);
            })
        },


      // post(){
      //           this.$axios({
      //           method:"post",
      //           url:"https://www.easy-mock.com/mock/5d47a880f801d914c45657c4/example_copy/Lost",
      //           data:{
      //           detailMsg:this.detailMsg,
      //           title:this.Ltitle,
      //           messKind:this.messKind,
      //           time :this.time,
                          
      //           }
                       
      //         }).then((res)=>{
      //         console.log(res);
      //         })
      // },

      
     onClickLeft() {
      this.$router.push('/Home/LostMain');
      
    },go(id){
      this.$router.push({
                path:'/Home/Detail',
                name:'Detail',
                params:{
                Aitem:this.Aitems[id]
                }
              })
    },tellUs() {
                Dialog.confirm({
                    title: '确定提交',
                    message: '确认提交失物招领信息？',
                    beforeClose
                    
                }).then(() => {
                    this.posts();
                    this.$router.push({ path: "/Home/LostMain" });


                }).catch(() => {
                   
                });
            },

  },
  created(){
        // axios.get()
        
        // .then((res) => {
        //   console.log(res);
        // this.Aitems = res.data.Activity
    //   })
    },
    
}

function beforeClose(action, done) {
  if (action === "confirm") {
    setTimeout(done, 1000);
  } else {
    done();
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

</style>
