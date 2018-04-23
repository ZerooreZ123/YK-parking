<template>
    <div class="mask">
        <div class="popUp">
            <div class="dataList">
                <div class="data" v-for="item in data" :key="item.match">
                    <div class="dataName">{{item.name}}</div>
                    <div class="dataResult">{{item.result}}</div>
                </div>
            </div>
            <div class="tip">请于缴费成功后的15分钟内离场哦</div>
            <div class="selectButton">
                <div class="abolish">取消</div>
                <div class="sure">确认支付</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "MaskBox",
  props: ["data"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.mask {
  z-index: 100;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.popUp {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 73%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  font-size: 34px;
  background: #fff;
  overflow: hidden;
}
.dataList {
  padding: 20px 30px;
}
.data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  font-size: 30px;
  /* line-height: 30px; */
}
.dataName {
  color: #b3b3b3;
}
.dataResult {
  color: #000;
}
.tip {
  width: 100%;
  margin-bottom: 2px;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #7997c0;
  background: #cce1fc;
}
.selectButton {
  display: flex;
  justify-content: space-around;
  width: 100%;
  font-size: 30px;
  color: #fff;
}
.abolish,
.sure {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 50%;
  border-top: 2px solid #f7f7f7;
}
.abolish {
  color: #999999;
  background: #fff;
}
.sure {
  color: #fff;
  background: #569bf6;
}
</style>
