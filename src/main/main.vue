<!-- 메인 페이지 -->
<template>
  <div class="contents">
    <notice></notice>
    <ranking-card></ranking-card>
    <progress-card></progress-card>
    <community-card></community-card>
  </div>
</template>

<script>
import Notice from "./components/Notice.vue";
import RankingCard from "./components/RankingCard.vue";
import ProgressCard from "./components/ProgressCard.vue";
import CommunityCard from "./components/CommunityCard.vue";

export default {
  components: {
    notice: Notice,
    "ranking-card": RankingCard,
    "progress-card": ProgressCard,
    "community-card": CommunityCard,
  },
};
</script>

<style scoped></style>
