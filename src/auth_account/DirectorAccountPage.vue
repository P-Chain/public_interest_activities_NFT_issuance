<!-- 발급 계정 입력 폼 -->
<template>
  <div id="app">
    <div id="contents">
      <h3>발급 계정 회원가입</h3>
      <DirectorAccountInputForm></DirectorAccountInputForm>
    </div>
  </div>
</template>

<script>
import DirectorAccountInputForm from './components/directorAccountInputForm.vue'

export default {
  name: 'app', 
  components: {
    DirectorAccountInputForm
  }
}
</script>

<style scoped>
#contents {
  margin: 1rem;
}
</style>