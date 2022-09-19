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
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    <!-- <button class="button-image" id="GgCustomLogin" @click="init"><b-img :src="require('../../assets/googleIcon.png')"></b-img></button> -->
    <button class="button-image" href="">
      <b-img :src="require('../../assets/facebookIcon.png')"></b-img>
    </button>

    <p>
      계정이 없으신가요?
      <a href="/auth_account">회원가입</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // for debug
      //      alert(this.form.email);
      //      fetch('/api/auth_account/login/local',{
      //  method: 'POST',
      //  mode: 'cors',
      //  credentials: 'include',
      //  headers: {
      //    "Content-Type": "application/json",
      //  },
      //  body: JSON.stringify({
      //    email: this.form.email,
      //    password: this.form.password
      //  })
      //})
      axios
        .post("/api/auth_account/login/local", {
          email: this.form.email,
          password: this.form.password,
        })
        .catch(function (error) {
          if (error.response.status == 403) {
            alert("아이디 또는 비밀번호를 잘못 입력하였습니다.")
            console.log("아이디 또는 비밀번호를 잘못 입력하였습니다.");
          }
        })
        .then((res) => {
          // do something with res
          console.log(res);
          // temp
          if (res.status == 200) {
            location.href = "/";
            this.$store.commit("login", res.data);
          }
        });
    },
    onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log("Name: " + profile.getName());
      console.log("Image URL: " + profile.getImageUrl());
      console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.

      var id_token = googleUser.getAuthResponse().id_token;
    },
  },
};
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
