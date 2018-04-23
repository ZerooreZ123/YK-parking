<template>
  <div class="warp">
      <div class="content">
          <div class="inputBox">
              <input type="text" placeholder="车牌" class="inputText">
          </div>
          <div class="forExample">例:苏A8888</div>
          <div class="promptText">选择车场</div>
          <div class="carYardList" >
              <div class="selectYard" v-for="item in carYardName" :key="item.id">{{item.name}}</div>
          </div>
      </div>
      <div class="button">查询</div>
      <tip-mes :msg="message" v-if="isDisplay"></tip-mes>
  </div>
</template>
<script>
import TipMes from "@/components/common/tipMes";
export default {
  name: "MonthlyInquiry",
  components: {
    TipMes
  },
  data() {
    return {
      carYardName: [
        { name: "创意中央", id: 1 },
        { name: "创意东八区", id: 2 },
        { name: "星火E方", id: 3 },
        { name: "西祠街道", id: 4 }
      ],
      message: "抱歉，未找到该车辆包月信息",
      isDisplay: true
    };
  }
};
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
  margin-bottom: 16px;
}
.carYardList {
  padding: 0 16px;
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
</style>
