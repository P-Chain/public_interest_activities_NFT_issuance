<template>
  <div>
    <hr>
    선택한 대상자 목록
    <hr>
    <div v-for="item in lists" :key="item">
      이름: {{ item.name }}<br>
      이메일: {{ item.email }}<br>
      <hr>
    </div>

    <b-button href="./nft_issue" variant="primary">발급</b-button>
    <b-button href="./nft_choice" variant="outline-primary">뒤로 가기</b-button>
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