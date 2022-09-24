<template>
  <div class="contents">
    <h3>공지사항</h3>
    <router-view></router-view>
  </div>
</template>

<script>
import PageNumber from './components/PageNumber.vue'

export default {
  components: {
    'page-number': PageNumber,
  }
}
</script>

<style>

</style>