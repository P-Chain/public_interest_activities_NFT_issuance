<template>
  <!-- v-if:*** for debug -->
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">P-chain</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="token">
        <b-nav-item v-show="token">{{ name }}</b-nav-item>
        <b-nav-item href="/" v-if=token>로그아웃</b-nav-item>
        <b-nav-item href="/mypage">마이페이지</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else>
          <b-nav-item href="/login">로그인</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <!-- for debug -->
    <b-button variant="primary" @click="onChange">디버깅용 전환</b-button>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      name: '이름',
      token: false,
    }
  },
  // for debug
  methods: {
    onChange(event) {
      this.token = !(this.token);
    }
  }
}
</script>

<style scoped>

</style>