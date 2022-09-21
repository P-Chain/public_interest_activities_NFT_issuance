<template>
  <div class="wrapper">
    <b-form @submit="onSubmit">
      <b-form-input
          id="input-1"
          v-model="form.vmsTime"
          type="number"
          placeholder="봉사시간을 입력해주세요."
          required
        ></b-form-input>
      <b-form-file
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          accept="image/jpeg, image/png"
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
      <b-button type="submit" variant="primary">제출</b-button>
      <router-link to="/mypage">
        <b-button href="/" variant="outline-primary">뒤로 가기</b-button>
      </router-link>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        vmsTime: '',
        imageData: ''
      },
      file1: null
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      var reader = new FileReader();
      reader.readAsDataURL(this.file1);
      reader.onload = () => {
        this.imageData = reader.result;
        console.log('imageData='+this.imageData);
      }
      // 수정 필요
      // console.log(JSON.stringify(this.form)) // for debug
      // axios.post('/', { 
      //   vmsTime: this.form.vmsTime,
      //   file: this.form.file1
      // })
      // .then(res => {
      //   // do something with res
      //   console.log(res);
      // })
      // .catch(res=> {
      //   console.log(res.error.response)
      // })
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