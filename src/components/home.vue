<template>
  <div class="wrap">
    <div class="item" v-for="item in itemName" :key="item.math">
      <div class="single" >
        <img class="photo" v-bind:src="item.photoSrc" alt="">
        <div class="text">{{item.text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data () {
    return {
      itemName: [
        {
          photoSrc: require("@/assets/images/home_month.png"),
          text: "包月充值",
          math: 1
        },
        {
          photoSrc: require("@/assets/images/home_temp.png"),
          text: "临停缴费",
          math: 2
        },
        {
          photoSrc: require("@/assets/images/home_substitute.png"),
          text: "代缴",
          math: 3
        },
        {
          photoSrc: require("@/assets/images/home_cars.png"),
          text: "车辆管理",
          math: 4
        },
        {
          photoSrc: require("@/assets/images/home_orders.png"),
          text: "订单中心",
          math: 5
        },
        {
          photoSrc: require("@/assets/images/home_msgs.png"),
          text: "消息",
          math: 6
        }
      ]
    };
  }
};
</script>
<style scoped>
.wrap {
  height: 100%;
  width: 750px;
  background: #fff;
}
.item {
  display: inline-block;
  width: 249px;
  height: 250px;
  border-right: 1px solid #fbfbfb;
  border-bottom: 1px solid #fbfbfb;
}
.single {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.photo {
  display: inline-block;
  width: 98px;
  height: 98px;
  margin: 60px 0 35px;
}
.text {
  font-size: 30px;
  line-height: 30px;
  color: #000;
}
</style>
