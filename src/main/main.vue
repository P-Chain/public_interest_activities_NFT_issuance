<!-- 메인 페이지 -->
<template>
  <div class="contents">
    <Notice></Notice>
    <RankingCard></RankingCard>
    <ProgressCard></ProgressCard>
    <CommunityCard></CommunityCard>
  </div>
</template>

<script>
import Notice from './components/Notice.vue'
import RankingCard from './components/RankingCard.vue'
import ProgressCard from './components/ProgressCard.vue'
import CommunityCard from './components/CommunityCard.vue'

export default {
  components: {
    Notice,
    RankingCard,
    ProgressCard,
    CommunityCard
  }
}
</script>

<style scoped>

</style>