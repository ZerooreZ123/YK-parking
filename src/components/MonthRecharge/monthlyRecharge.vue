<template>
  <div class="wrap">
      <div class="content">
          <div class="optionList">
             <div class="option">
               <div class="optionName">车牌</div>
               <div class="optionData">{{carNum}}</div>
             </div>
             <div class="option">
               <div class="optionName">所在车场</div>
               <div class="optionData">{{carYard}}</div>
             </div>
             <div class="option">
               <div class="optionName">到期时间</div>
               <div class="optionData">{{expiryTime}}</div>
             </div>
          </div>
          <div class="promptText">续费时长</div>
          <div class="carYardList" >
              <div @click="select(index)" :class="selectIndex === index?'selectYard':'carYard'" v-for="(item,index) in renewalLength" :key='index'>{{item.name}}</div>
          </div>
      </div>
      <div class="bottomBox">
          <div class="cancel">取消</div>
          <div class="confirm">确认支付</div>
      </div>
  </div>
</template>
<script>
export default {
  name: "MonthlyRecharge",
  data () {
    return {
      carNum: '苏A 888888',
      carYard: '创意广场',
      expiryTime: '2018年6月18日',
      renewalLength: [
        { name: '20元/月' },
        { name: '60元/三个月' },
        { name: '120元/6个月' },
        { name: '240元/年' }
      ],
      selectIndex: 0
    }
  },
  methods: {
    select: function(index) {
      const that = this;
      that.selectIndex = index;
    }
  }
}
</script>
<style scoped>
.wrap {
  width: 750px;
  margin-top: 32px;
}
.optionList {
  padding: 0 30px;
}
.option {
  margin-bottom: 56px;
}
.optionName {
  font-size: 26px;
  color: #b8b8b8;
  margin-bottom: 20px;
}
.optionData {
  font-size: 30px;
  color: #000;
}
.carYardList {
  padding: 0 16px;
}
.promptText {
  text-indent: 30px;
  font-size: 26px;
  color: #bbbbbb;
  margin-bottom: 16px;
}
.carYard {
  display: inline-block;
  width: 328px;
  margin: 15px 13px;
  padding: 25px 0px;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  text-align: center;
  font-size: 30px;
  color: #000;
}
.selectYard {
  display: inline-block;
  width: 330px;
  margin: 15px 13px;
  padding: 25px 0px;
  text-align: center;
  font-size: 30px;
  color: #96c1f9;
  background: url("../../../static/images/btn_selected.png") no-repeat;
  background-size: 330px 90px;
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
</style>
