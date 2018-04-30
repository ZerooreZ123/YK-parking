<template>
  <div class="warp">
      <div class="validOrder">
          <div class="single" v-for="item in orderList" :key="item.math">
              <img  class="photo" :src="require('../../assets/images/icon_order.png')" alt="">
              <div class="information">
                  <div class="carNum">{{item.licensePlateNumber}}</div>
                  <div class="placeName"><span>{{item.parkingGarageName}}</span><span class="timeslot">{{item.startTime}} - {{item.endTime}}</span></div>
              </div>
              <div @click="Renewals" class="renew">续费</div>
          </div>
      </div>
      <div class="invalidOrder">
          <div class="item" v-for="(item,index) in backOrder" :key="index">
              <img class="photoGray" :src="require('../../assets/images/iconLight.png')" alt="">
              <div class="information">
                  <div class="carNumGray">{{item.licensePlateNumber}}</div>
                  <div class="placeNameGray"><span>{{item.parkingGarageName}}</span><span class="time">{{item.startTime}} - {{item.endTime}}</span></div>
                  <div class="text">该包月套餐已到期,请前往车场管理处重新开通。</div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import XHR from '@/utils/request'
import API from '@/utils/api.js'
export default {
  mounted() {
    this.getMonthlyPlansOrderList();
  },
  name: 'MonthlyOrders',
  data () {
    return {
      orderList: [],
      backOrder: []
    }
  },
  methods: {
    Renewals() {
      this.$router.push({path: '/monthlyRecharge'})
    },
    async getMonthlyPlansOrderList() {
      const result = await XHR.get(window.admin + API.getMonthlyPlansOrderList + '?userId=1');
      const dataList = JSON.parse(result).data;
      dataList.forEach(el => {
        if (el.identifying === 1) {
          this.orderList.push({
            startTime: el.startTime.slice(0, 10).replace(/-/g, '.'),
            endTime: el.endTime.slice(0, 10).replace(/-/g, '.'),
            licensePlateNumber: el.licensePlateNumber,
            parkingGarageName: el.parkingGarageName,
            id: el.id
          });
        }
        if (el.identifying === 2) {
          this.backOrder.push({
            startTime: el.startTime.slice(0, 10).replace(/-/g, '.'),
            endTime: el.endTime.slice(0, 10).replace(/-/g, '.'),
            licensePlateNumber: el.licensePlateNumber,
            parkingGarageName: el.parkingGarageName,
            id: el.id
          });
        }
      });
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
.time{
  display:inline-block;
  margin-left:20px;
}
</style>
