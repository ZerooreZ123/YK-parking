<template>
  <div>
    <div class="layout layoutBottom">
      <div class="cell" :key="index" v-for="(item,index) in items">
        <div class="center">
          <img class="cellImage" :src="require('@/assets/images/icon_order.png')" alt="">
        </div>
        <div class="columnContent">
          <div class="flexContent center textFont textColor">
            <span class="carNO">{{item.licensePlateNumber}}</span>
            <span class="flexContent priceText">{{item.money}}元</span>
          </div>
          <div class="flexContent center detailTextFont">
            <span class="carName textColor">{{item.parkingGarageName}}</span>
            <span class="flexContent detailTextColor">{{item.creationTime}}</span>
          </div>
        </div>
        <div class="center">
          <div class="substituteBtn" @click = 'addOrder'>再次代缴</div>
        </div>
      </div>
      <span class="footBtn textFont center" @click="addSubstituteOrder">
        新增代缴订单
      </span>
    </div>
    <pop-up :data="dataRuselt" v-if="isShow" @oncancel="onCancel($event)" @onconfire="onConfire($event)"></pop-up>
  </div>
</template>

<script>
import "@/assets/css/publicStyle.css";
import PopUp from '@/components/common/popUp'
import XHR from '@/utils/request'
import API from '@/utils/api.js'
export default {
  mounted() {
    this.getReplaceOrderList();
  },
  name: 'SubstituteOrder',
  components: {
    PopUp
  },
  data() {
    return {
      items: [],
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
    addOrder() { // 再次代缴
      this.isShow = true;
    },
    onCancel (isState) { // 取消
      this.isShow = isState;
    },
    onConfire(Num) { // 确定
      this.isShow = false;
      console.log(Num)
    },
    addSubstituteOrder() { // 新增代缴订单
      this.$router.push({path: '/surrender'})
    },
    async getReplaceOrderList() { // 获取代缴订单
      const result = await XHR.get(window.admin + API.getReplaceOrderList + '?userId=1');
      const dataList = JSON.parse(result).data;
      dataList.forEach(el => {
        this.items.push({
          creationTime: el.creationTime.replace(/-/g, '.').slice(0, 16),
          money: el.money,
          licensePlateNumber: el.licensePlateNumber.replace(/\s/ig, ''),
          parkingGarageName: el.parkingGarageName,
          id: el.id
        });
      });
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
  /* width: 180px; */
}
.priceText {
  color: #5a9df3;
  margin-left:10px;
}
.substituteBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 156px;
  height:56px;
  border: 2px solid #5a9df3;
  border-radius: 4px;
  font-size: 28px;
  color: #5a9df3;
}
</style>
