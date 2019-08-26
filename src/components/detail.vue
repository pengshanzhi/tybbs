<template>
  <div>
    <div style="text-align:center;margin-top:20px">
      <span style="font-size: 20px">{{title}}</span>
    </div>

    <div style="margin-top: 20px">
      <span style="color: darkgray; font-size:14px;margin-left: 30px">天翼社区中心</span>
      <span style="color: darkgray; font-size:14px;margin-left: 120px;">{{time}}</span>
    </div>
    <br />
    <br />
    <div style="margin-left:23px; width:338px">
      <span>{{dqpd_content}}</span>
    </div>

    <br />
    <br />
    <div style="text-align:center">
      <van-image width="180" height="150" :src="image1" />
    </div>
    <br />
    <div style="text-align:center">
      <van-image width="180" height="150" :src="image2" />
    </div>
    <br />
    <div style="text-align:center">
      <van-image width="180" height="150" :src="image3" />
    </div>

    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">快去发表你的评论吧</van-divider>

    <div>
      <span style="margin-left:20px; font-size:13px ; color: darkgray">精选留言</span>
      <span style="margin-left:220px;font-size:14px; color: cadetblue" @click="write_content">写留言</span>
    </div>

    <br />
    <div v-for="(msg,i) in msgs" :key="i">
      <van-row>
        <van-col span="5">
          <van-image
            style="margin-left:20px;margin-top:5px"
            width="40"
            height="40"
            :src="msg.tx_image"
          />
        </van-col>
        <van-col span="18">
          <span style="font-size:13px;color: darkgray">{{msg.username}}</span>

          <div style="margin-left:220px;width:50px;margin-top=-20px">
           <span style="font-size:13px">
            <van-icon :name="dz_icon" />
            {{msg.zan_sum}}
          </span>
          </div>

          

          <br />
          <span style="font-size:13px;">{{msg.content}}</span>
        </van-col>
      </van-row>
      <br />
    </div>
  </div>
</template>

<script>
import {} from "vux";
import { Divider, Image, Row, Col, Icon, Dialog } from "vant";
export default {
  name: "detail",
  components: {
    [Divider.name]: Divider,
    [Image.name]: Image,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Dialog.naem]: Dialog
  },
  data() {
    return {
      Aitems:[],
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
      ],
      title: "单亲派对活动",
      time: "2019年12月18日",
      // zan_sum:"137",
      // username:"隆剑杰",
      // tx_image:"https://img.yzcdn.cn/vant/cat.jpeg",
      dqpd_content:
        "放松放松放松粉色条纹翻侧王妃v法沙发沙发服务shoo和发顺丰色条纹翻侧王妃v法沙发沙发服务shoo和发顺丰色条纹翻侧王妃v法沙发沙发服务shoo和发顺丰色条纹翻侧王妃v法沙发沙发服务shoo和发顺丰反思反思文革东西哦我发送哦放松放松放松粉色条纹翻侧王妃v法沙发沙发服务shoo和发顺丰反思反思文革东西哦我发送放松放松放松粉色条纹翻侧王妃v法沙发沙发服务shoo和发顺丰反思反思文革东西哦我发送",
      dz_icon: require("../assets/dz.png"),
      image1: "https://img.yzcdn.cn/vant/cat.jpeg",
      image2: "https://img.yzcdn.cn/vant/cat.jpeg",
      image3: "https://img.yzcdn.cn/vant/cat.jpeg"
    };
  },
  methods: {
    write_content() {
       this.$router.push({ path: "/leave_message" });
    },
    getAll(){
      axios.get(domain.testUrl+'/Activity')
        .then((res) => {
          console.log(res);
        this.Aitems = res.data.data
      for(i;i<this.Aitems.length;i++){
        this.Aitems[i].Activity.a_date = moment(this.Aitems[i].Activity.a_date).format("YYYY-MM-DD")
       
      }
      
      })
    }
  }
};
</script>


<style scoped>
</style>

