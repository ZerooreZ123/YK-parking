<template>
  <div class="warp">
      <div class="noticeList">
          <div class="notice" v-for="(item,index) in news" :key="index" >
             <div class="text">{{item.text}}</div>
             <div class="time">{{item.date}}</div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "NoticeReminding",
  data() {
    return {
      news: [
        {
          text: "您的包月订单将于XX年XX月XX日到期,如仍需包月业务，请尽快办理",
          date: "2018.1.13-2018.6.18"
        },
        {
          text: "您的包月订单将于XX年XX月XX日到期,如仍需包月业务，请尽快办理",
          date: "2018.1.13-2018.6.18"
        },
        {
          text: "您的包月订单将于XX年XX月XX日到期,如仍需包月业务，请尽快办理",
          date: "2018.1.13-2018.6.18"
        }
      ]
    };
  }
};
</script>
<style scoped>
.wrap {
  width: 750px;
}
.notice {
  padding: 30px 30px 18px;
  border-bottom: 2px solid #f7f7f7;
}
.text {
  font-size: 26px;
  line-height: 38px;
  color: #000;
}
.time {
  margin: 14px 0;
  font-size: 18px;
  color: #b3b3b3;
}
</style>
