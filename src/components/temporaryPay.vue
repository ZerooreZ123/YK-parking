<template>
  <div class="warp">
      <div class="content">
          <div class="inputBox">
              <input type="text" placeholder="车牌" class="inputText">
              <div @click="query" class="inquiry">查询</div>
          </div>
          <div class="forExample">例:苏A8888</div>
          <div class="promptText">已绑定车辆</div>
          <div class="carList" v-for="(item, index) in carYardName" :key="index" >
              <div class="car">{{item.name}}</div>
              <div @click="payment" class="query">查询</div>
          </div>
      </div>
      <mask-box :data="dataRuselt" v-if="isShow" @oncancel="onCancel($event)" @onconfire="onConfire($event)"></mask-box>
      <tip-mes :msg="message" v-if="isDisplay"></tip-mes>
  </div>
</template>
<script>
import MaskBox from '@/components/common/maskBox'
import TipMes from '@/components/common/tipMes'
export default {
  name: 'TemporaryPay',
  components: {
    MaskBox,
    TipMes
  },
  data () {
    return {
      carYardName: [
        { name: '苏A888888' },
        { name: '苏A888888' },
        { name: '苏A888888' },
        { name: '苏A888888' }
      ],
      dataRuselt: [
        { name: '车牌', result: '苏A888888' },
        { name: '停车时长', result: '2小时15分' },
        { name: '所在车场', result: '创意中央' },
        { name: '金额', result: '15元' }
      ],
      message: '抱歉，未找到该车辆停车信息',
      isShow: false,
      isDisplay: false
    }
  },
  methods: {
    query: function() {
      this.isDisplay = true;
      setTimeout(() => {
        this.isDisplay = false;
      }, 1.5e3)
    },
    payment: function() {
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
  width: 200px;
  height: 40px;
  font-size: 30px;
  line-height: 40px;
  color: #000;
  outline: none;
  border: none;
  background: transparent;
  -webkit-appearance: none;
}
.inquiry,
.query {
  width: 116px;
  line-height: 56px;
  font-size: 26px;
  border: 2px solid #c6defc;
  border-radius: 4px;
  text-align: center;
  color: #6ba7f7;
}
.forExample,
.promptText {
  text-indent: 30px;
  font-size: 26px;
  color: #bbbbbb;
}
.forExample {
  margin: 20px 0 48px;
}
.promptText {
  padding: 20px 0;
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
