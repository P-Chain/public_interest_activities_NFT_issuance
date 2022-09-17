<template>
  <b-form @submit="onSubmit">
    <b-form-input
        id="input-1"
        v-model="vmsTime"
        type="number"
        placeholder="봉사시간을 입력해주세요."
        required
      ></b-form-input>
    <b-form-file
        v-model="file1"
        :state="Boolean(file1)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>

    <b-button type="submit" variant="primary">제출</b-button>
    <b-button @click="goPage('mypage')" variant="outline-primary">뒤로 가기</b-button>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        vmsTime: '',
        file1: null
      }
    }
  },
  methods: {
    goPage(pageName) {
      var page = '/' + pageName
      this.$router.push(page)
    },
    onSubmit(event) {
      event.preventDefault()
      console.log(JSON.stringify(this.form)) // for debug
      // 수정 필요
      axios.post('/', { 
        vmsTime: this.form.vmsTime,
        file: this.form.file1
      })
      .then(res => {
        // do something with res
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.form-group {
  margin-bottom: 1rem;
}
</style>