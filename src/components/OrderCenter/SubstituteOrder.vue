<template>
  <div>
    <div class="layout layoutBottom">
      <div class="cell" :key="index" v-for="(item,index) in items">
        <div class="center">
          <img class="cellImage" :src="require('@/assets/images/icon_order.png')" alt="">
        </div>
        <div class="columnContent">
          <div class="flexContent center textFont textColor">
            <span class="carNO">{{item.carNO}}</span>
            <span class="flexContent priceText">{{item.price}}</span>
          </div>
          <div class="flexContent center detailTextFont">
            <span class="carName textColor">{{item.park}}</span>
            <span class="flexContent detailTextColor">{{item.time}}</span>
          </div>
        </div>
        <div class="center">
          <div class="priceText detailTextFont substituteBtn">再次代缴</div>
        </div>
      </div>
      <span class="footBtn textFont center" @click="addOrder">
        新增代缴订单
      </span>
    </div>
    <pop-up :data="dataRuselt" v-if="isShow" @oncancel="onCancel($event)" @onconfire="onConfire($event)"></pop-up>
  </div>
</template>

<script>
import "@/assets/css/publicStyle.css";
import PopUp from '@/components/common/popUp'
export default {
  name: 'SubstituteOrder',
  components: {
    PopUp
  },
  data() {
    return {
      items: [
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' },
        { carNO: '苏A 88888', price: '120元', park: '创意中心', 'time': '2018.01.02 19:20' }
      ],
      dataRuselt: [
        { name: '车牌', result: '苏A888888', match: 1 },
        { name: '停车时长', result: '2小时15分', match: 2 },
        { name: '所在车场', result: '创意中央', match: 3 },
        { name: '金额', result: '15元', match: 4 }
      ],
      isShow: false
    }
  },
  methods: {
    addOrder() {
      this.isShow = true;
    },
    onCancel (isState) {
      this.isShow = isState;
    },
    onConfire(Num) {
      this.isShow = false;
      console.log(Num)
    }
  }
}
</script>
<style scoped>
.layoutBottom {
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
.carName{
  margin-right:20px;
}
.carNO {
  width: 180px;
}
.priceText {
  color: #5a9df3;
}
.substituteBtn {
  background-color: transparent;
  padding: 10px;
  border: 2px solid #5a9df3;
  border-radius: 5px;
  margin-left: 30px;
}
</style>
