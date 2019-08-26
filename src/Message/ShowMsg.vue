<template>
  <div style="text-align:left">
              <!-- 页面头部 -->
      <van-nav-bar
      title="天翼超市"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
      style="position:fixed;z-index:100;width: 100%;"
    />

    <br><br>

    <div class="title">
      <span class="font_title">{{description}}</span>
    </div>
    <van-divider dashed></van-divider>
    <div>
      <span class="tianyi">天翼社区物业管理中心</span>
      <span class="time">{{time}}</span>
    </div>
    <br>
    <br>
    <div class="value_div">
      <span class="value">{{value}}</span>
    </div>
  </div>
</template>

<script>
import { XHeader } from "vux";
import { Divider,NavBar } from "vant";
export default {
  components: {
    XHeader,
    [Divider.name]: Divider,
    [NavBar.name]:NavBar,
  },
  data() {
    return {
      time: "2019年9月8日",
      description: "您的物业费交了吗？",
      value:"为保障居民生活的安全，物业管理是保障大家的。。。ffsfsfsfsf的身份和恢复哈哈。。。为保障居民生活的安全，物业管理是保障大家的。。。。。。为保障居民生活的安全，物业管理是保障大家的。。。。。。"
    };
  },
  methods: {
     onClickLeft() {
      this.$router.push('/message');
      
    },
  }
};
</script>


<style scoped>
.title {
  margin-top: 20px;
  text-align: center;
}
.font_title {
  font-size: 20px;
  font-weight: bold;
}
.time {
  margin-left: 120px;
  color: darkgray;
  font-size: 13px;
}
.tianyi {
  margin-left: 20px;
  font-size: 13px;
  color: cadetblue;
}
.value {
    margin-left: 15px;
}
.value_div {
    margin-left:15px;
    margin-right:15px;
}
</style>

