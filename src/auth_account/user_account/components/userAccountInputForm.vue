<!-- 이메일, PW, 이름, 전화번호, 생년월일, 성별 -->
<!-- https://bootstrap-vue.org/docs/components/form -->
<!-- 추가로 더 할 수 있는 것: UX / 유효성 검사 -->
<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <!-- 이메일 -->
    <b-form-group
      id="input-group-1"
      label="이메일"
      :invalid-feedback="invalidFeedback1"
      :state="state.email"
      ><b-row class="my-1">
        <b-col sm="7">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="이메일을 입력해주세요. ex)example@example.com"
            :state="state.email"
            required
          ></b-form-input>
        </b-col>
        <b-col sm="2">
          <b-button variant="outline-primary" @click="emailfunc"
            >중복 체크</b-button
          >
        </b-col>
      </b-row>
    </b-form-group>

    <!-- password -->
    <b-form-group id="input-group-2" label="비밀번호">
      <b-form-input
        id="input-2"
        v-model="form.password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        aria-describedby="password-help-block"
        required
      ></b-form-input>
    </b-form-group>

    <!-- username -->
    <b-form-group id="input-group-3" label="이름">
      <b-form-input
        id="input-3"
        v-model="form.username"
        placeholder="이름을 입력해주세요."
        required
      ></b-form-input>
    </b-form-group>

    <!-- nickname -->
    <b-form-group
      id="input-group-4"
      label="닉네임"
      :invalid-feedback="invalidFeedback2"
      :state="state.nickname"
      ><b-row class="my-1">
        <b-col sm="7">
          <b-form-input
            id="input-4"
            v-model="form.nickname"
            placeholder="닉네임을 입력해주세요."
            :state="state.nickname"
            required
          ></b-form-input>
        </b-col>
        <b-col sm="2">
          <b-button variant="outline-primary" @click="nickfunc"
            >중복 체크</b-button
          >
        </b-col>
      </b-row>
    </b-form-group>

    <!-- 전화번호 -->
    <b-form-group id="input-group-5" label="전화번호">
      <b-form-input
        id="input-5"
        v-model="form.number"
        placeholder="전화번호를 입력해주세요. ex)01012345678"
        type="tel"
        class="int"
        maxlength="16"
        required
      ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">제출</b-button>
    <b-button type="reset" variant="danger">초기화</b-button>
  </b-form>
  <!-- for debug -->
  <!-- <b-card class="mt-3" header="Form Data Result">
    <pre class="m-0">{{ form }}</pre>
  </b-card> -->
  <!-- for debug -->
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        username: "",
        nickname: "",
        number: "",
      },
      state: {
        email: true,
        nickname: false,
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .post("/api/auth_account/register/local", {
          email: this.form.email,
          password: this.form.password,

          username: this.form.username,
          nickname: this.form.nickname,
          number: this.form.number,
        })
        .catch(function (error) {
          if (error.response.status == 400) {
            console.log("입력오류");
          } else if (error.response.status == 409) {
            console.log("이메일 또는 닉네임 중복");
            console.log(error);
          }
        })
        .then((res) => {
          // do something with res
          if (res.status == 200) {
            location.href = "/login";
          }
          console.log(res);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.username = "";
      this.form.nickname = "";
      this.form.number = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    emailfunc() {
      this.state.email = !this.state.email;
      console.log("func executed");
    },
    nickfunc() {
      this.state.nickname = !this.state.nickname;
      console.log("func executed");
    },
  },
  computed: {
    invalidFeedback1() {
      return "중복된 이메일입니다.";
    },
    invalidFeedback2() {
      return "중복된 이름입니다.";
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1.5rem;
}
</style>
