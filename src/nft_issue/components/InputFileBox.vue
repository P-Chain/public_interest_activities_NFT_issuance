<template>
  <div class="wrapper">
    <b-form-file
    v-model="file1"
    :state="Boolean(file1)"
    placeholder="Choose a file or drop it here..."
    drop-placeholder="Drop file here..."
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>

      <b-button type="submit" variant="primary">제출</b-button>
      <router-link to="/user_search">
        <b-button href="/" variant="outline-primary">뒤로 가기</b-button>
      </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file1: null
    }
  }
}
</script>

<style>

</style>