<!-- 대표 이메일, PW, 기관명, 기관번호 -->
<!-- https://bootstrap-vue.org/docs/components/form -->
<!-- 추가로 더 할 수 있는 것: UX / 유효성 검사 -->
<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <!-- 대표 이메일 -->
    <b-form-group id="input-group-1" label="대표 이메일" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        placeholder="대표 이메일을 입력해주세요. ex)example@example.com"
        required
      ></b-form-input>
    </b-form-group>

    <!-- password -->
    <b-form-group id="input-group-2" label="비밀번호" label-for="input-2">
      <b-form-input 
        id="input-2"
        v-model="form.password"
        type="password" 
        placeholder="비밀번호를 입력해주세요."
        aria-describedby="password-help-block"
        required
      ></b-form-input>
    </b-form-group>

    <!-- 기관명 -->
    <b-form-group id="input-group-3" label="기관명" label-for="input-3">
      <b-form-input
        id="input-3"
        v-model="form.organization_name"
        placeholder="기관명을 입력해주세요."
        required
      ></b-form-input>
    </b-form-group>

    <!-- 기관번호 -->
    <b-form-group id="input-group-4" label="기관 전화번호" label-for="input-4">
      <b-form-input
        id="input-4"
        v-model="form.number"
        placeholder="기관 전화번호를 입력해주세요. ex)021234567"
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
        email: '',
        password: '',
        organization_name: '',
        number: '',
      },
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      console.log(JSON.stringify(this.form)) // for debug
      axios.post('/api/auth_account/register/local', { 
        email: this.email,
        password: this.password, 
        nickname: this.organization_name,
        number: this.number
      })
      .then(res => {
        // do something with res
        this.$router.push('/login')
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
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      this.form.organization_name = ''
      this.form.number = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1.5rem;
}
</style>