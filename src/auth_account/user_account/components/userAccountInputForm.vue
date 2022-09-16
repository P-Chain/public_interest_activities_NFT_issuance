<!-- 이메일, PW, 이름, 전화번호, 생년월일, 성별 -->
<!-- https://bootstrap-vue.org/docs/components/form -->
<!-- 추가로 더 할 수 있는 것: UX / 유효성 검사 -->
<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <!-- 이메일 -->
    <b-form-group id="input-group-1" label="이메일" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        placeholder="이메일을 입력해주세요. ex)example@example.com"
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

  <!-- name -->
    <b-form-group id="input-group-3" label="이름" label-for="input-3">
      <b-form-input
        id="input-3"
        v-model="form.name"
        placeholder="이름을 입력해주세요."
        required
      ></b-form-input>
    </b-form-group>

  <!-- 전화번호 -->
    <b-form-group id="input-group-4" label="전화번호" label-for="input-4">
      <b-form-input
        id="input-4"
        v-model="form.number"
        placeholder="전화번호를 입력해주세요. ex)01012345678"
        type="tel"
        class="int"
        maxlength="16"
        required
      ></b-form-input>
    </b-form-group>

  <!-- 생년월일 -->
    <b-form-group id="input-group-5" label="생년월일" label-for="input-5">
      <b-form-input
        id="input-5"
        v-model="form.birthdate"
        type="date"
        placeholder=""
        required
      ></b-form-input>
    </b-form-group>

  <!-- 성별 -->
    <b-form-group id="input-group-6" label="성별" label-for="input-6">
      <b-form-select
        id="input-6"
        v-model="form.sex"
        :options="options"
        required
      ></b-form-select>
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
        number: '',
        name: '',
        birthdate: '',
        sex: ''
      },
      options: [
        { value: '', text: 'Select One', disabled: true }, 
        { value: 'm', text: '남' }, 
        { value: 'w', text: '여' }, 
        { value: 's', text: '비밀' }
      ],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form)) // for debug
      axios.post('http://pchapi.loca.lt/api/auth_account/register/local', { 
        email: this.form.email,
        password: this.form.password, 
        username: this.form.name
      })
      .then(res => {
        // do something with res
        location.href='https://pchain.loca.lt/login';
        console.log(res);
      })
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.password = ''
      this.form.name = ''
      this.form.number = ''
      this.form.birthdate = ''
      this.form.sex = ''
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