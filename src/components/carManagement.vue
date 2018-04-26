<template>
  <div class="warp">
      <div class="content">
          <div class="carList">
              <div class="car">苏A888888<span class="color1">黑色</span></div>
              <div class="buttonBox"><span class="cutOff" @click="deleteCar">删除</span><span @click='gotoOrder' class="seeOrder">查看包月订单</span></div>
          </div>
          <div class="carList" v-for="(item, index) in carYardName" :key="index" >
              <div class="car">{{item.name}} <span class="color">{{item.color}}</span></div>
              <div @click="deleteCar" class="delete">删除</div>
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
                            <input type="text" placeholder="车牌" class="inputText">
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
export default {
  name: 'CarManagement',
  data () {
    return {
      carYardName: [
        { name: '苏A888888', color: '黑色' },
        { name: '苏A888888', color: '黑色' },
        { name: '苏A888888', color: '黑色' },
        { name: '苏A888888', color: '黑色' }
      ],
      carColor: [
        { color: '黑色' },
        { color: '白色' },
        { color: '红色' },
        { color: '黄色' },
        { color: '棕色' },
        { color: '蓝色' },
        { color: '绿色' },
        { color: '其他' }
      ],
      flag: false,
      show: false,
      selectIndex: 0
    }
  },
  methods: {
    gotoOrder() {
      this.$router.push({path: '/monthlyOrders'})
    },
    deleteCar() {
      this.flag = true;
    },
    remove() {
      this.flag = false;
    },
    abolish() {
      this.flag = false
    },
    addCar() {
      this.show = true;
    },
    select(index) {
      this.selectIndex = index;
    },
    cancel() {
      this.show = false;
    },
    confirm() {
      this.show = false;
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
