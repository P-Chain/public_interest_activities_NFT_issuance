<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
import Main from './main/main.vue';
import SignUpSelection from './auth_account/SignUpSelection.vue';
import Login from './log_in/Login.vue';
export default {
    components: { Main, SignUpSelection, Login }
}
</script>

<style>

</style>