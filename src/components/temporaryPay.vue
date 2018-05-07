<template>
  <div class="warp">
      <div class="content">
          <div class="inputBox">
              <input type="text" placeholder="车牌" class="inputText" v-model="inputValue" ref="inputFocus">
              <div class="transparentButton" @click= "selectCar"></div>
              <div @click="query(inputValue)" class="inquiry">查询</div>
          </div>
          <div class="forExample">例:苏A8888</div>
          <div class="block">
            <div class="promptText">
              <img class="icon" :src="require('@/assets/images/temporaryPay_bind.png')" alt="">
              <span>已绑定车辆</span>
            </div>
            <div class="carList" v-for="(item, index) in carName" :key="index" >
                <div class="car">{{item.licensePlateNumber}}</div>
                <div @click="query(item.licensePlateNumber)" class="query">查询</div>
            </div>
          </div>
          <div>
            <div class="promptText">
              <img class="icon" :src="require('@/assets/images/temporaryPay_history.png')" alt="">
              <span>历史临停车辆</span>
            </div>
            <div class="carList" v-for="(item, index) in carHistory" :key="index" >
                <div class="car">{{item.licensePlateNumber}}</div>
                <div @click="query(item.licensePlateNumber)" class="query">查询</div>
            </div>
          </div>
      </div>
      <mask-box :data="dataRuselt" v-if="isShow" @oncancel="onCancel($event)" @onconfire="onConfire($event)"></mask-box>
      <tip-mes :msg="message" v-if="isDisplay"></tip-mes>
      <place-name v-if="isPlace"  @onselect="onSelect($event)" @onclose="onClose($event)" ></place-name>
  </div>
</template>
<script>
import MaskBox from '@/components/common/maskBox'
import TipMes from '@/components/common/tipMes'
import PlaceName from '@/components/common/placeName'
import XHR from '@/utils/request'
import API from '@/utils/api.js'
export default {
  mounted() {
    this.getCarList();
  },
  name: 'TemporaryPay',
  components: {
    MaskBox,
    TipMes,
    PlaceName
  },
  data () {
    return {
      inputValue: null,
      carName: [], // 绑定车辆列表
      carHistory: [], // 历史临停车辆列表
      dataRuselt: [],
      message: '抱歉，未找到该车辆停车信息',
      isShow: false,
      isDisplay: false,
      isPlace: false
    }
  },
  methods: {
    onCancel (isState) {
      this.isShow = isState;
    },
    selectCar() { // 弹出车牌选择
      this.isPlace = true;
    },
    onSelect(placeName) {
      this.$refs.inputFocus.focus();
      this.isPlace = false;
      this.inputValue = placeName;
    },
    onClose(state) {
      this.isPlace = state;
    },
    async onConfire(payResult) {
      const dataArray = [];
      payResult.forEach(ev => {
        dataArray.push(ev.result)
      });
      const result = await XHR.get(window.admin + API.getParkingPaymentInfo + '?licensePlateNumber=' + encodeURI(dataArray[0]));
      const dataValue = JSON.parse(result).data[0]
      if (JSON.parse(result).status === 200) {
        const valueData = await XHR.post(window.admin + API.temporaryPayParkingFee, {
          duration: dataValue.elapsedTime,
          licensePlateNumber: dataArray[0],
          money: dataValue.payable,
          orderNo: dataValue.orderNo,
          parkId: dataValue.parkId,
          parkingGarageName: dataValue.parkName,
          startTime: dataValue.entryTime,
          userId: '1'
        })
        if (JSON.parse(valueData).status === 200) {
          this.isShow = false;
          this.$router.push({path: '/personal/temp'})
        } else {
          alert(JSON.parse(valueData).msg)
        }
      } else {
        alert(JSON.parse(result).msg)
      }
    },
    removeSpace(str) {
      return str.replace(/\s/ig, '');
    },
    async query(carName) { // 查询
      if (!carName) {
        return false
      }
      const result = await XHR.get(window.admin + API.getParkingPaymentInfo + '?licensePlateNumber=' + encodeURI(this.removeSpace(carName)));
      if (JSON.parse(result).status === 200) {
        const dataResult = JSON.parse(result).data[0];
        this.dataRuselt = [
          { name: '车牌', result: this.removeSpace(carName) },
          { name: '停车时长', result: dataResult.elapsedTime % 60 === 0 ? dataResult.elapsedTime / 60 + '小时' : parseInt(dataResult.elapsedTime / 60) + '小时' + dataResult.elapsedTime % 60 + '分' },
          { name: '所在车场', result: dataResult.parkName },
          { name: '金额', result: dataResult.payable / 100 + '元' }
        ]
        this.isShow = true;
      } else {
        this.isDisplay = true;
        setTimeout(() => {
          this.isDisplay = false;
        }, 1.5e3)
      }
    },
    async getCarList() { // 获取车辆列表
      const result = await XHR.get(window.admin + API.getVehicleList + '?userId=1' + '&type=1');
      const dataList = JSON.parse(result).data.vehicleList || [];
      const dataArray = JSON.parse(result).data.temporaryList || [];
      dataList.forEach(el => {
        this.carName.push({
          licensePlateNumber: this.removeSpace(el.licensePlateNumber),
          id: el.id
        });
      });
      dataArray.forEach(el => {
        this.carHistory.push({
          licensePlateNumber: this.removeSpace(el.licensePlateNumber),
          id: el.id
        });
      });
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 750px;
}
.inputBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 118px;
  padding: 0 30px;
  border-bottom: 2px solid #f7f7f7;
}
.inputBox::-webkit-input-placeholder {
  color: #777777;
}
.inputText {
  width: 520px;
  height: 40px;
  padding:0;
  font-size: 30px;
  line-height: 40px;
  color: #000;
  outline: none;
  border: none;
  background: transparent;
  -webkit-appearance: none;
}
.transparentButton{
  position: absolute;
  top:0;
  left:0;
  width:600px;
  height:118px;
}
.inquiry,
.query {
  width: 116px;
  line-height: 56px;
  font-size: 26px;
  border: 2px solid #569bf6;
  border-radius: 4px;
  text-align: center;
  color: #569bf6;
}
.block {
  margin-bottom: 55px;
}
.forExample,
.promptText {
  font-size: 26px;
  color: #bbbbbb;
}
.icon{
  display: inline-block;
  width: 38px;
  height: 38px;
  margin-right:14px;
}
.forExample {
  text-indent: 30px;
  margin: 20px 0 48px;
}
.promptText {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 2px solid #f7f7f7;
}
.carList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 116px;
  margin: 0 30px;
  border-bottom: 2px solid #f7f7f7;
}
.car {
  font-size: 30px;
  color: #000;
}
</style>
