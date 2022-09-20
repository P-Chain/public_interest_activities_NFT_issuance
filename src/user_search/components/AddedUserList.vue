<template>
  <div class="wrapper">
    <hr>
    선택한 대상자 목록
    <hr>
    <div v-for="item in lists" :key="item.index">
      이름: {{ item.name }}<br>
      이메일: {{ item.email }}<br>
      <hr>
    </div>
    <router-link to="nft_issue">
      <b-button href="/" variant="primary">발급</b-button>
    </router-link>
    <router-link to="nft_choice">
      <b-button href="/" variant="outline-primary">뒤로 가기</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { name: '이름1', email: 'aaa@aaa.aa' },
        { name: '이름2', email: 'bbb@bbb.bb' }
      ],
    }
  }
}
</script>

<style>

</style>