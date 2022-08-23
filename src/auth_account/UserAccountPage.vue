<!-- 사용자 계정 입력 폼 -->
<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="contents">
      <h3>사용자 계정 회원가입</h3>
      <UserAccountInputForm></UserAccountInputForm>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import UserAccountInputForm from './components/userAccountInputForm.vue'

export default {
  name: 'app', 
  components: {
    UserAccountInputForm
  }
}
</script>

<style scoped>
#contents {
  margin: 1rem;
}
</style>