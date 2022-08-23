<template>
<div>
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">NavBar</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">&&닉네임</b-nav-item>
        <b-nav-item href="/auth_account">로그인</b-nav-item> <!-- 로그인 URL로 수정 필요-->
        <b-nav-item href="/mypage">마이페이지</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  data() {

  }
}
</script>

<style scoped>

</style>