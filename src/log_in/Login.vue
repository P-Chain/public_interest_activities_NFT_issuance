<!-- 로그인 페이지 -->
<!-- 로그인 성공, 실패 시 백엔드와 연동해서 작업 필요 -->
<template>
  <div class="login-page">
    <div class="contents">
      <h2>로그인</h2>
      <b-form @submit="onSubmit">
        <!-- 대표 이메일 -->
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
        <!-- password -->
        <b-form-input 
          id="input-2"
          v-model="form.password"
          type="password" 
          placeholder="Password"
          aria-describedby="password-help-block"
          required
        ></b-form-input>
        <b-button type="submit" variant="primary">로그인</b-button>
      </b-form>
      <p>계정이 없으신가요?
      <a href="/auth_account">회원가입</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // for debug
      alert(this.form.email);
      axios.post('/login/local', { 
        email: this.email,
        password: this.password, 
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
p {
  margin-top: 1rem;
}

input {
  margin-bottom: 1.5rem;
}
.login-page {
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100vh;
  background-image: url('../assets/background.jpg');
}

.contents {
  margin: 1rem;
  padding: 3rem;
  background-color:white;
  border: 1px solid lightgray;
  border-radius: 10px;
}
</style>