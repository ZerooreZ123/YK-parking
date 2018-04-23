<template>
  <div class="layout">
    <div class="cell" @click="goDetail" :key="index" v-for="(item,index) in list">
      <img class="cellImage" :src="item.icon" alt=""/>
      <span class="flexContent textColor textFont">{{item.name}}</span>
      <img class="cellArrow" :src="require('@/assets/images/cell_arrow.png')" alt=""/>
    </div>
  </div>
</template>

<script>
import "@/assets/css/publicStyle.css";
export default {
  name: 'Personal',
  data() {
    return {
      list: [
        { name: '临停订单', icon: require('@/assets/images/personal_temp.png') },
        { name: '包月订单', icon: require('@/assets/images/personal_month.png') },
        { name: '代缴订单', icon: require('@/assets/images/personal_substitute.png') }
      ]
    }
  },
  methods: {
    goDetail: function () {

    }
  }
}
</script>
<style>
.cell {
  height: 120px;
  align-items: center;
  border-bottom: 2px solid #f3f3f3;
}
.cellImage {
  width: 50px;
  height: 50px;
  margin: 0px 25px 0px 25px;
}
.cellArrow {
  width: 15px;
  height: 25px;
  margin: 0px 25px 0px 25px;
}
</style>
