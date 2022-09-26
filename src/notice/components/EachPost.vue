<template>
  <div class="wrapper">
    <p class="notice-title">
      {{ noticeData.title }}
      <span class="text-right">
        {{ noticeData.date }}
      </span>
    </p>
    <div class="notice-text">
      {{ noticeData.word }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeData: { 
        index: 1, 
        title: '제목제목', 
        date: '2022-08-15', 
        word: `게시글 생성 부터 진행해보도록 하겠습니다.
                BoardList.vue 에서 등록 버튼을 누르면 fnWrite 함수를 호출하도록 작업했습니다.
                vue-router에서 생성 화면으로 연결하고 저장까지 진행해보겠습니다.
                router/index.js에 먼저 write로 이동할 수 있게 추가합니다.` 
    }
    }
  },
  created() {
    axios.get("/api/notice").then(response => {
      this.noticeData = response.data;
    })
    .catch(error => {
      console.log(error);
    })
  }
}
</script>

<style scoped>
.notice-title {
  background-color: #f9f9f9;
  padding: 1rem 1rem 1rem;
  border-top: 1px solid #7e7e7e;
  border-bottom: 1px solid #e3e3e3;
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-top: 1rem;
}
.text-right {
  float: right;
  font-weight: normal;
  font-size: 1rem;
}
.notice-text {
  height: 6rem;
  border-bottom: 1px solid #e3e3e3;
  padding: 1rem 1rem 1rem;
}
</style>