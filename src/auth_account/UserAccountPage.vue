<!-- 사용자 계정 입력 폼 -->
<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="contents">
      <h3>회원가입</h3>
      <UserAccountInputForm></UserAccountInputForm>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '../commons/NavBar.vue'
import UserAccountInputForm from './components/userAccountInputForm.vue'
import Footer from '../commons/Footer.vue'

export default {
  name: 'app', 
  components: {
    NavBar,
    UserAccountInputForm,
    Footer
  }
}
</script>

<style scoped>
div {
  padding: 0.2rem;
}
</style>