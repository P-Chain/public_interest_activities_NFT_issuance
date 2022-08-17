<!-- 발급 계정 입력 폼 -->
<template>
  <div id="app">
    <NavBar></NavBar>
    <div id="contents">
      <h3>회원가입</h3>
      <DirectorAccountInputForm></DirectorAccountInputForm>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from '../commons/NavBar.vue'
import DirectorAccountInputForm from './components/directorAccountInputForm.vue'
import Footer from '../commons/Footer.vue'

export default {
  name: 'app', 
  components: {
    NavBar,
    DirectorAccountInputForm,
    Footer
  }
}
</script>

<style>
div {
  padding: 0.2rem;
}
</style>