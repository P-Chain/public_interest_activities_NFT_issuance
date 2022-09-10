<template>
  <b-card-group deck>
    <b-card title="사용자 계정">
      <b-card-text>일반 사용자 계정</b-card-text>
      <b-button href="/auth_account/user" variant="primary">회원가입</b-button>
    </b-card>

    <b-card title="발급 계정">
      <b-card-text>NFT 발급 계정</b-card-text>
      <b-button href="/auth_account/director" variant="secondary">회원가입</b-button>
    </b-card>
  </b-card-group>
</template>

<script>
export default {

}
</script>

<style>

</style>