<template>
  <div class="warp">
      <div class="validOrder">
          <div class="single" v-for="item in orderList" :key="item.math">
              <img  class="photo" v-bind:src="item.photoSrc" alt="">
              <div class="information">
                  <div class="carNum">{{item.plateNum}}</div>
                  <div class="placeName"><span>{{item.place}}</span><span class="timeslot">{{item.timeslot}}</span></div>
              </div>
              <div class="renew">续费</div>
          </div>
      </div>
      <div class="invalidOrder">
          <div class="item" v-for="item in backOrder" :key="item.math">
              <img class="photoGray" v-bind:src="item.photoSrc" alt="">
              <div class="information">
                  <div class="carNumGray">{{item.plateNum}}</div>
                  <div class="placeNameGray"><span>{{item.place}}</span><span>{{item.timeslot}}</span></div>
                  <div class="text">该包月套餐已到期,请前往车场管理处重新开通。</div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "MonthlyOrders",
  data() {
    return {
      orderList: [
        {
          photoSrc: require("../../assets/images/icon_order.png"),
          plateNum: "苏A888888",
          place: "创意中央",
          timeslot: "2018.1.12-2018.6.18",
          match: 1
        },
        {
          photoSrc: require("../../assets/images/icon_order.png"),
          plateNum: "苏A888888",
          place: "创意中央",
          timeslot: "2018.1.12-2018.6.18",
          match: 2
        }
      ],
      backOrder: [
        {
          photoSrc: require("../../assets/images/iconLight.png"),
          plateNum: "苏A888888",
          place: "创意中央",
          timeslot: "2018.1.12-2018.6.18",
          match: 1
        }
      ]

    }
  }
};
</script>
<style scoped>
.wrap {
  width: 750px;
}
.single {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  width: 690px;
  padding: 0 30px;
  border-bottom: 2px solid #f7f7f7;
}
.photo {
  display: inline-block;
  width: 41px;
  height: 41px;
}
.information {
  flex: 1;
  margin-left: 20px;
}
.carNum {
  font-size: 30px;
  color: #000;
  margin-bottom: 18px;
}
.placeName {
  font-size: 26px;
  color: #000;
}
.timeslot {
  display: inline-block;
  margin-left: 20px;
  color: #ababab;
}
.renew {
  width: 116px;
  line-height: 56px;
  border: 2px solid #c6defc;
  text-align: center;
  border-radius: 5px;
  font-size: 26px;
  color: #8ebcf9;
}
.item {
  display: flex;
  padding: 0 30px;
  border-bottom: 2px solid #f7f7f7;
}
.photoGray {
  display: inline-block;
  width: 41px;
  height: 41px;
  margin-top: 52px;
}
.carNumGray {
  margin-top: 34px;
  font-size: 30px;
  color: #d5d5d5;
  margin-bottom: 18px;
}
.placeNameGray {
  font-size: 26px;
  color: #d5d5d5;
}
.text {
  margin: 26px 0;
  font-size: 26px;
  color: #999;
}
</style>
