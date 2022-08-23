<!-- 로그인 페이지 -->
<!-- https://codepen.io/rpandrews/pen/XWbjJEg -->
<template>
  <div class="login-page">
    <div class="contents">
      <h2>로그인</h2>
      <b-form @submit="onSubmit">
        <!-- 대표 이메일 -->
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
          ></b-form-input>
        </b-form-group>

        <!-- password -->
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input 
            id="input-2"
            v-model="form.password"
            type="password" 
            placeholder="Password"
            aria-describedby="password-help-block"
            required
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">로그인</b-button>
      </b-form>
      <p>Don't have an account?
      <a href="/auth_account">Sign up here</a>
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
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(this.form.email);
      axios.post('/register/local', { 
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
}

.contents {
  margin: 1rem;
  padding: 3rem;
  background-color:white;
  border: 1px solid lightgray;
  border-radius: 10px;
}
</style>