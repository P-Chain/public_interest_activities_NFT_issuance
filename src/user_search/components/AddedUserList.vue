<template>
  <div class="wrapper">
    <hr>
    선택한 대상자 목록
    <hr>
    <div v-for="item in lists" :key="item.index">
      이름: {{ item.username }}<br>
      닉네임: {{ item.nickname }}<br>
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
      lists: [],
    }
  },
  created() {
    this.$EventBus.$on('addlist', this.receive) 
  },
  methods: {
    receive(data) {
      console.log('this.options='+this.lists)
      if (this.lists.includes(data)) {
        console.log("이미 존재");
      }
      else {
        this.lists.push(data);
      }
    },
  }
}
</script>

<style>

</style>