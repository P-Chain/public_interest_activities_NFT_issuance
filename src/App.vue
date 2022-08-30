<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from './commons/NavBar.vue'
import Footer from './commons/Footer.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
.contents {
  margin: 1rem;
  /* border: 1px solid black; */
}
</style>