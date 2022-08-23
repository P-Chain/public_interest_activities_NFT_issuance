<!-- 메인 페이지 -->
<template>
  <div id="app">
    <!-- <NavBar></NavBar> -->
    <Notice></Notice>
    <RankingCard></RankingCard>
    <ProgressCard></ProgressCard>
    <CommunityCard></CommunityCard>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import NavBar from '../commons/NavBar.vue'
import Notice from './components/Notice.vue'
import RankingCard from './components/RankingCard.vue'
import ProgressCard from './components/ProgressCard.vue'
import CommunityCard from './components/CommunityCard.vue'
import Footer from '../commons/Footer.vue'

export default {
    name: 'app', 
    components: {
    NavBar,
    Notice,
    RankingCard,
    ProgressCard,
    CommunityCard,
    Footer
}
}
</script>

<style scoped>

</style>