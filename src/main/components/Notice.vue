<template>
  <b-jumbotron>
    <!-- 제목 -->
    <template #header>
      공지사항
    </template>

    <!-- 부제 -->
    <template #lead>
      {{ subtitle }}
    </template>

    <!-- 수평선-->
    <hr class="my-4">
    
    <!-- 내용 -->
    <p>
      {{ contents }}
    </p>

    <!-- <b-button variant="primary" href="#">Do Something</b-button>
    <b-button variant="success" href="#">Do Something Else</b-button> -->
  </b-jumbotron>
</template>

<script>
export default {
  data() {
    return {
      subtitle: '부제',
      contents: '내용'
    }
  }
}
</script>

<style scoped>

</style>