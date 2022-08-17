<!-- ID, PW, 기관명, 기관번호, 대표 이메일 -->
<!-- https://bootstrap-vue.org/docs/components/form -->
<!-- 추가로 더 할 수 있는 것: UX / 유효성 검사 -->
<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <!-- id -->
      <b-form-group id="input-group-1" label="아이디" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.id"
          placeholder="ID를 입력해주세요."
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
          placeholder="기관명을 입력해주세요."
          required
        ></b-form-input>
      </b-form-group>

    <!-- 이메일 -->
      <b-form-group id="input-group-4" label="이메일" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.email"
          type="email"
          placeholder="이메일을 입력해주세요. ex)example@example.com"
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
          :options="sexes"
          required
        ></b-form-select>
        <br>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <!-- for debug -->
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <!-- for debug -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: '',
        password: '',
        email: '',
        organization_name: '',
        sex: ''
      },
      sexes: [{ text: 'Select One', value: null }, '남', '여', '비밀'],
      show: true
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form)) // for debug
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.id =''
      this.form.password = ''
      this.form.organization_name = ''
      this.form.email = ''
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

</style>