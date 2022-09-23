<!-- 업로드한 파일 제목: nickname_ddhhmmss-->
<!-- 서버 전달: File 객체 -->
<!-- DB 전달: 닉네임(name), 봉사시간(volTime), 파일이름(volIss)-->
<!-- 추가할 수 있는 것: form-file-required, b-form-input:입력 쓰로잉,   -->
<template>
  <div class="wrapper">
    <b-form @submit="onSubmit">
      <b-form-input
          id="input-1"
          v-model="form.volTime"
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
        name: '',
        volTime: '',
        volIss: ''
      },
      file1: null
    }
  },
  created() {
    try {
      axios.get("/api/auth_account/check")
      .then(res => {
        console.log('created res='+res);
        if (res.data.nickname) {
          this.name = res.data.nickname;
        }
      })
      .catch(error => {
        console.log('created error='+error);
      });
    } 
    catch (error) {
      console.log('try-catch error='+error);
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      var date = new Date();
      var fileName 
        = this.name + '_' + date.getDate() + date.getHours() 
        + date.getMinutes() + date.getSeconds();
      var file = new File([this.file1], fileName, {type: this.file1.type});
      console.log('file.name='+file.name);
      // for debug
      // var reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = () => {
      //   var imageData = reader.result;
      //   console.log('imageData='+imageData);
      // }

    // to Server
      await axios.post('/', { 
        file: file,
      })
      .then(res => {
        // do something with res
        console.log('to sv res='+res);
      })
      .catch(error => {
        console.log('To sv error.response='+error.res)
      });

    // to DB
      axios.post('/', { 
        name: this.form.name,
        volTime: this.form.volTime,
        volIss: this.file1.name
      })
      .then(res => {
        // do something with res
        console.log('To db res='+res);
        this.file1 = null;
        this.volTime = '';
        this.volIss = ''
        alert('제출 완료');
      })
      .catch(error => {
        console.log('To db error.response='+error.res)
      });
    }
  }
}
// // createObjectURL 사용
// this.form.imageData = window.URL.createObjectURL(this.file1);
// console.log('form.imageData='+this.form.imageData)
// this.form.imageData.onload = () => {
//   window.URL.revokeObjectURL(this.form.imageData)
//   console.log('after revoke, form.imageData='+this.form.imageData)
// }
// // FileReader 사용
// var reader = new FileReader();
// reader.readAsText(this.file1);
// // 
// reader.onload = () => {
//   this.imageData = reader.result;
//   console.log('imageData='+this.imageData);
// }
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