<template>
  <div class="goods">
    <!-- 页面头部 -->
    <van-nav-bar
      title="天翼超市"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
      style="position:fixed;z-index:100;width: 100%;"
    />
    <br><br><br><br>
    <!-- <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="url in msg.g_images" :key="url"> -->
        <img  height="200px"  :src="testUrl+msg.g_images" />
      <!-- </van-swipe-item>
    </van-swipe> -->

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ msg.g_title }}</div>
        <div class="goods-price">¥{{ msg.g_price }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ msg.num }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="商品详情" />
    </van-cell-group>
    <p style="text-align:left;margin:2px 15px">{{msg.g_content}}</p>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="addToCar">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="pay">立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import axios from 'axios';
import { XHeader } from "vux";
import {
  Dialog,
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  NavBar
} from "vant";
export default {
  components: {
    XHeader,
    [Dialog.name]: Dialog,
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton,
    [NavBar.name]: NavBar
  },
  data() {
    return {
      testUrl: domain.testUrl,
      msg: [],
      g_id: "",
      goods: {
        title: "",
        price: "",
        express: "免运费",
        remain: "",
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/shop");
    },
    getParams() {
      //接收函数
      console.log(this.$router);
      this.msg = this.$router.history.current.query.List;
      this.g_id = this.$router.history.current.query.g_id;
    },
    formatPrice() {
      return "¥" + msg.price;
    },
    onClickCart() {
      this.$router.push("pay");
    },

    addToCar() {
      Dialog.confirm({
        message: "已加入购物车",
        beforeClose
      })
        .then(() => {
          this.$router.push({
            path: "/pay",
            // query: {
            //   payList: this.msg[id]
            // }
          });
          this.postCar();
        })
        .catch(() => {
          // on cancel
        });
    },
    postCar() {
      axios.post(domain.testUrl + "/Cart/Add?userName="+this.$store.state.currentUser+"&gid="+this.g_id).then(res => {
        console.log(res)
      });
    },

    pay() {
      if (this.msg.num > 0) {
        Dialog.alert({
          message: "立即支付",
          beforeClose
        }).then(() => {
          //  this.goPaySuccess();
        });
      } else
        Dialog.alert({
          message: "库存不足"
        });
      this.msg.num = this.msg.num > 0 ? this.msg.num - 1 : 0;
    },
    goPaySuccess() {
      this.$router.push({
        path: "/Home/payMain/Cost/pay_success",
        name: "pay_success",
        params: {
          payMoney: this.msg.price.toFixed(2),
          where: "/shop"
        }
      });
    }
  },
  created() {
    //在模板编译进路由前调用created方法，触发接收函数
    var self = this;
    self.getParams();
    this.postCar();
  }
};

function beforeClose(action, done) {
  if (action === "confirm") {
    setTimeout(done, 1000);
  } else {
    done();
  }
}
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      height: 300px;
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>