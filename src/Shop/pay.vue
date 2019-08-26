<template>
  <div>
    <!-- 页面头部 -->
    <van-nav-bar
      title="天翼超市"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      class="topColor"
      style="position:fixed;z-index:100;width: 100%;"
    />
    <br />
    <br />
    <!-- <van-checkbox-group class="card-goods" >
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
    >-->

    <van-row v-for="item in goods" :key="item.id" :name="item.id">
      <van-col span="14">
        <van-icon name="location-o" size="20px" />
        <van-card
          :title="item.g_title"
          :desc="item.g_desc"
          :price="formatPrice(item.g_price)"
          :thumb="testUrl+item.g_images"
        />
      </van-col>
      <van-col span="10">
        <x-number
          style="margin-top:30px"
          align="right"
          v-model="item.num"
          button-style="round"
          :min="0"
          :max="5"
        ></x-number>
      </van-col>
    </van-row>

    <!-- </van-checkbox>
      
    </van-checkbox-group>-->

    <van-submit-bar :price="totalPrice" :button-text="submitBarText" @submit="onSubmit" />
  </div>
</template>

<script>
import axios from 'axios';
import { XHeader, XNumber } from "vux";
import {
  Dialog,
  Checkbox,
  CheckboxGroup,
  Card,
  SubmitBar,
  Toast,
  NavBar,
  Row,
  Col
} from "vant";
export default {
  name: "pay",
  components: {
    XHeader,
    XNumber,
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup,
    [Dialog.Component.name]: Dialog.Component,
    [NavBar.name]: NavBar,
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      num:[],
      Citem:[],
      testUrl: domain.testUrl,
      totalprice: 2.5,
      checkedGoods: ["1", "2"],
      username: this.$store.state.currentUser,
      
      goods: [
        // {
        //   id: "1",
        //   title: "进口香蕉",
        //   desc: "约250g，2根",
        //   price: 200,
        //   num: 1,
        //   thumb:
        //     "https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg"
        // },
        // {
        //   id: "2",
        //   title: "陕西蜜梨",
        //   desc: "约600g",
        //   price: 690,
        //   num: 1,
        //   thumb:
        //     "https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
        // },
        // {
        //   id: "3",
        //   title: "美国伽力果",
        //   desc: "约680g/3个",
        //   price: 2680,
        //   num: 2,
        //   thumb:
        //     "https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
        // }
      ]
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      // return '结算' + (count ? `(${count})` : '');
      return "结算";
    },
    totalPrice() {
      // return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
      var i = 0;
      var total = 0;
      for (i; i < this.goods.length; i++) {
        total = total + this.goods[i].g_price * 1;
      }
      this.totalprice = total;
      return total;
    }
  },
  methods: {
    getParams() {
      //接收函数
      console.log(this.$router);
      this.goods = this.$router.history.current.query.payList;
    },
    onClickLeft() {
      this.$router.push("/shop");
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Dialog.confirm({
        message: "立即支付",
        beforeClose
      }).then(() => {
        this.goPaySuccess();
      });
    },
    goPaySuccess() {
      this.$router.push({
        path: "/Home/payMain/Cost/pay_success",
        name: "pay_success",
        params: {
          payMoney: (this.totalprice / 100).toFixed(2),
          where: "/pay"
        }
      });
    }
  },
  created() {
    axios.get(domain.testUrl + "/Cart/list?userName="+this.username).then(res => {
      this.goods=res.data.data;
    });
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
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
    }
  }
}
</style>