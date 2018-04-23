<template>
  <div class="layout layoutBottom">
    <div class="cell" :key="index" v-for="(item,index) in items">
      <div class="center">
        <img class="cellImage" :src="require('@/assets/images/icon_order.png')" alt="">
      </div>
      <div class="columnContent">
        <div class="flexContent center textFont textColor">
          <span class="carNO">{{item.carNO}}</span>
          <span class="flexContent priceText">{{item.price}}</span>
          <span >{{item.timeLength}}</span>
        </div>
        <div class="flexContent center detailTextFont">
          <span class="flexContent textColor">{{item.park}}</span>
          <span class="detailTextColor">{{item.time}}</span>
        </div>
      </div>
    </div>
    <span class="footBtn textFont center">
      新增临停订单
    </span>
  </div>
</template>

<script>
import "@/assets/css/publicStyle.css";
export default {
  name: 'TempOrder',
  data() {
    return {
      items: [
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' },
        { carNO: '苏A 88888', price: '120元', timeLength: '1小时', park: '创意中心', 'time': '2018.01.02 19:20-22:00' }
      ]
    }
  },
  methods: {
    goDetail: function () {

    }
  }
}
</script>
<style scoped>
.layoutBottom{
  margin-bottom: 100px;
}
.cell {
  height: 150px;
  padding: 30px;
  border-bottom: 2px solid #f3f3f3;
}
.cellImage {
  width: 40px;
  height: 40px;
  margin-right: 30px;
}
.carNO {
  width: 180px;
}
.priceText {
  color: #5a9df3;
}
</style>
