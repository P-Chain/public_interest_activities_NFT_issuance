<!-- 사용자 계정 입력 폼 -->
<template>
  <div id="contents">
    <h3>사용자 계정 회원가입</h3>
    <UserAccountInputForm></UserAccountInputForm>
  </div>
</template>

<script>
import UserAccountInputForm from './components/userAccountInputForm.vue'

export default {
  components: {
    UserAccountInputForm
  }
}
</script>

<style scoped>

</style>