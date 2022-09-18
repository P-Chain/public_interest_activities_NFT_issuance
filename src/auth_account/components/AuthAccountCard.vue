<template>
  <b-card-group deck>
    <b-card title="사용자 계정">
      <b-card-text>일반 사용자 계정</b-card-text>
      <b-button @click="goUser" variant="primary">회원가입</b-button>
    </b-card>

    <b-card title="발급 계정">
      <b-card-text>NFT 발급 계정</b-card-text>
      <b-button @click="goDirector" variant="secondary">회원가입</b-button>
    </b-card>
  </b-card-group>
</template>

<script>
export default {
  methods: {
    goUser() {
      this.$router.push('/auth_account/user_account')
      console.log('goUser executed')
    },
    goDirector() {
      this.$router.push('/auth_account/director_account')
      console.log('goDirector executed')
    }
  }
}
</script>

<style>

</style>