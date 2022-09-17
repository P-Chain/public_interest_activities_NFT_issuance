<template>
  <div>
    <b-form-group
        label="발급 NFT 목록"
        v-slot="{ ariaDescribedby }"
        @submit="onSubmit"
        >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="NFT list"
        stacked
      ></b-form-checkbox-group>
    </b-form-group>

    <!-- Styled -->
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
    
    <b-button type="submit" variant="primary">발급권한 신청</b-button>
    <b-button @click="goMypage" variant="outline-primary">뒤로 가기</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        // 수정 필요. DB에서 불러와서 배치
        { text: 'num1', value: '1번' },
        { text: 'num2', value: '2번' },
        { text: 'num3', value: '3번' },
        { text: 'num4', value: '4번' }
      ],
      file1: null,
    }
  },
  created() {
    axios.get("/").then(response => {
      var arr = response.data
      this.options = arr
    })
    .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        }
        else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
  },
  methods: {
    goMypage() {
      this.$router.push('/mypage')
      console.log('goUser executed')
    },
    onSubmit() {
      axios.post('/', { 
        // 수정
         selected: this.selected
      })
      .then(res => {
        // do something with res
        this.$router.push('/mypage')
        console.log(res);
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        }
        else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
    }
  }
}
</script>

<style>

</style>