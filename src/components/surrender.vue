<template>
  <div class="warp">
      <div class="content">
          <div class="inputBox">
              <input type="text" placeholder="车牌" class="inputText">
          </div>
          <div class="forExample">例:苏A8888</div>
          <div class="phoneBox">
              <input type="text" placeholder="被代缴方手机号" class="phone">
              <div class="option">选项</div>
          </div>
      </div>
       <div class="bottomBox">
          <div class="cancel">取消</div>
          <div @click="payment" class="confirm">查询</div>
      </div>
      <mask-box :data="dataRuselt" v-if="isShow" @oncancel="onCancel($event)" @onconfire="onConfire($event)"></mask-box>
  </div>
</template>
<script>
import MaskBox from '@/components/common/maskBox'
export default {
  name: 'Surrender',
  components: {
    MaskBox
  },
  data () {
    return {
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
    payment() {
      const that = this;
      that.isShow = true;
    },
    onCancel (isState) {
      const that = this;
      that.isShow = isState;
    },
    onConfire(Num) {
      const that = this;
      that.isShow = false;
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
.forExample {
  text-indent: 30px;
  font-size: 26px;
  color: #bbbbbb;
}
.forExample {
  margin: 20px 0 32px;
}
.bottomBox {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 30px;
  color: #fff;
}
.cancel,
.confirm {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 50%;
  border-top: 2px solid #f7f7f7;
}
.cancel {
  color: #999999;
  background: #fff;
}
.confirm {
  color: #fff;
  background: #569bf6;
}
.phoneBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  padding: 0 30px;
  border-bottom: 2px solid #f7f7f7;
}
.phone::-webkit-input-placeholder {
  color: #777777;
}
.phone {
  width: 400px;
  font-size: 30px;
  line-height: 30px;
  color: #000;
  outline: none;
  border: none;
  background: transparent;
  -webkit-appearance: none;
}
.option {
  color: #bdbdbd;
  font-size: 26px;
}
</style>
