<template>
  <div class="warp">
      <div class="content">
          <div class="carList">
              <div class="car">苏A888888<span class="color1">黑色</span></div>
              <div class="buttonBox"><span class="cutOff" @click="deleteCar">删除</span><span @click='gotoOrder' class="seeOrder">查看包月订单</span></div>
          </div>
          <div class="carList" v-for="(item, index) in carYardName" :key="index" >
              <div class="car">{{item.licensePlateNumber}} <span class="color">{{item.color}}</span></div>
              <div @click="deleteCar(index)" class="delete">删除</div>
          </div>
          <div @click="addCar" class="button">新增车辆</div>
          <div class="mask" v-if="flag">
            <div class="popUp">
                <div class="sureTip">确认删除苏A888888?</div>
                <div class="selectButton">
                    <div @click="abolish" class="abolish">取消</div>
                    <div @click="remove" class="sure">确认</div>
                </div>
            </div>
          </div>
           <div class="mask" v-if="show">
                <div class="maskWrap">
                    <div class="content">
                        <div class="inputBox">
                            <input type="text" placeholder="车牌" class="inputText" v-model= "inputValue">
                        </div>
                        <div class="forExample">例:苏A8888</div>
                        <div class="promptText">选择颜色</div>
                        <div class="carColorList" >
                            <div @click="select(index)" :class="selectIndex === index?'selectColor':'carColor'" v-for="(item,index) in carColor" :key="index">{{item.color}}</div>
                        </div>
                    </div>
                    <div class="selectButton">
                        <div @click="cancel" class="cancel">取消</div>
                        <div @click="confirm" class="confirm">确认</div>
                    </div>
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
    this.getCarList();
  },
  name: 'CarManagement',
  data () {
    return {
      carColor: [
        { color: '黑色' }, { color: '白色' }, { color: '红色' }, { color: '绿色' }, { color: '蓝色' },
        { color: '黄色' }, { color: '紫色' }, { color: '棕色' }, { color: '青色' }, { color: '其他' }
      ],
      carYardName: [], // 车辆信息列表
      flag: false, // 删除提示弹窗
      show: false, // 新增提示弹窗
      selectIndex: 0, // 颜色index
      carId: null, // 车辆Id
      color: null, // 车辆颜色
      inputValue: null // 输入框文本
    }
  },
  methods: {
    async getCarList() { // 获取车辆列表
      const result = await XHR.get(window.admin + API.getVehicleList + '?userId=1');
      const dataList = JSON.parse(result).data;
      dataList.forEach(el => {
        this.carYardName.push({
          color: el.colour,
          licensePlateNumber: el.licensePlateNumber,
          id: el.id
        });
      });
    },
    gotoOrder() { // 挑转到包月订单
      this.$router.push({path: '/monthlyOrders'})
    },
    deleteCar(index) { // 弹出删除提示
      this.carId = this.carYardName[index].id;
      this.flag = true;
    },
    async remove() { // 删除车辆
      const result = await XHR.post(window.admin + API.deleteVehicle + '?id=' + this.carId);
      console.log(result)
      this.flag = false;
      window.history.go(0);
    },
    abolish() { // 取消
      this.flag = false
    },
    addCar() { // 添加车辆
      this.show = true;
    },
    select(index) { // 选择颜色
      this.selectIndex = index;
    },
    cancel() { // 取消新增
      this.show = false;
    },
    async confirm() { // 确认添加
      this.color = this.carColor[this.selectIndex].color;
      const result = await XHR.post(window.admin + API.addVehicle, {
        "colour": this.color,
        "licensePlateNumber": this.inputValue,
        "phone": "18701569987",
        "userId": "1"
      })
      console.log(result);
      this.show = false;
      window.history.go(0);
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 750px;
}
.delete,
.cutOff {
  width: 116px;
  line-height: 56px;
  font-size: 26px;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  text-align: center;
  color: #999;
}
.cutOff {
  display: inline-block;
}
.seeOrder {
  display: inline-block;
  width: 196px;
  margin-left: 20px;
  line-height: 56px;
  font-size: 26px;
  border: 2px solid #c6defc;
  border-radius: 4px;
  text-align: center;
  color: #62a2f7;
}
.carList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 118px;
  padding: 0 30px;
  border-bottom: 2px solid #f7f7f7;
}
.car {
  font-size: 30px;
  color: #000;
}
.color {
  margin-left: 20px;
  color: #8e8e8e;
}
.color1 {
  display: inline-block;
  margin-left: 24px;
  color: #8e8e8e;
}
.buttonBox {
  display: inherit;
}
.mask {
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display:flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
}
.popUp {
  width:73%;
  height:212px;
  margin-top:326px;
  border-radius: 5px;
  font-size: 34px;
  background: #fff;
  overflow: hidden;
}
.sureTip {
  width: 100%;
  margin: 40px 0 55px;
  text-indent: 30px;
  font-size: 30px;
  color: #000;
  background: #fff;
}
.selectButton {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 30px;
}
.abolish, .sure {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78px;
  width: 50%;
  border-top: 2px solid #f7f7f7;
}
.abolish,.cancel {
  color: #999999;
  background: #fff;
}
.sure, .confirm{
  color: #fff;
  background: #569bf6;
}
.cancel, .confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 50%;
  border-top: 2px solid #f7f7f7;
}
.button {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 35px 0;
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  color: #fff;
  background: #569bf6;
}
.maskWrap {
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
}
.inputBox {
  display: flex;
  align-items: center;
  height: 118px;
  border-bottom: 2px solid #f7f7f7;
}
.inputBox::-webkit-input-placeholder {
  color: #777777;
}
.inputText {
  width: 200px;
  height: 40px;
  font-size: 30px;
  text-indent: 30px;
  line-height: 40px;
  color: #000;
  outline: none;
  border: none;
  background: transparent;
  -webkit-appearance: none;
}
.forExample,
.promptText {
  text-indent: 30px;
  font-size: 26px;
  color: #bbbbbb;
}
.forExample {
  margin: 20px 0 58px;
}
.promptText {
  margin-bottom: 22px;
}
.carColorList {
  padding: 0 16px 50px;
}
.carColor {
  display: inline-block;
  width: 143px;
  margin: 15px 15px;
  padding: 12px 0px;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  text-align: center;
  font-size: 30px;
  color: #000;
}
.selectColor {
  display: inline-block;
  width: 143px;
  margin: 15px 15px;
  padding: 12px 0px;
  text-align: center;
  font-size: 30px;
  color: #96c1f9;
  background: url("../../static/images/btn_min.png") no-repeat;
  background-size: 143px 65px;
}
</style>
