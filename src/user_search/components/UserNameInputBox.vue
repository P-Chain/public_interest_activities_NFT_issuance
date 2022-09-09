<template>
    <b-form-input v-model="name" placeholder="대상 이름 입력"></b-form-input>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  }
}
</script>

<style scoped>
.form-control {
  border: 1px solid blue;
}
</style>