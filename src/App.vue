<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
import NavBar from './commons/NavBar.vue'
import MainFooter from './commons/Footer.vue'

export default {
  name: 'app',
  components: {
    'nav-bar': NavBar,
    'main-footer': MainFooter,
  },
}
</script>

<style>
.contents {
  margin: 1rem;
  /* border: 1px solid black; */
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

</style>