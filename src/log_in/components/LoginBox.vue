<template>
  <div>
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
    <!--API 연결하기-->
    <button class="button-image" href=""><b-img :src="require('../../assets/googleIcon.png')"></b-img></button>
    <button class="button-image" href=""><b-img :src="require('../../assets/facebookIcon.png')"></b-img></button>
 
    <p>계정이 없으신가요?
    <a href="/auth_account">회원가입</a>
    </p>
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
      fetch('http://pchapi.loca.lt/api/auth_account/login/local',{
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: this.form.email,
    password: this.form.password
  })
}).then(res => {
        // do something with res
        //location.href='http://pchain.loca.lt/';
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
.button-image {
  background-color: white;
  border: 0px;
}
img {
  width: 2rem;
  height: 2rem;
  object-fit: cover;
}
form {
  margin-bottom: 1rem;
}
</style>