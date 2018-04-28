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
import XHR from '@/utils/request'
import API from '@/utils/api.js'
export default {
  mounted() {
    this.getNotificationList();
  },
  name: "NoticeReminding",
  data() {
    return {
      news: []
    };
  },
  methods: {
    async getNotificationList() {
      const result = await XHR.get(window.admin + API.getNotificationList + '?userId=1');
      const dataList = JSON.parse(result).data;
      dataList.forEach(el => {
        this.news.push({
          text: el.content,
          date: el.creationTime
        });
      });
    }
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
