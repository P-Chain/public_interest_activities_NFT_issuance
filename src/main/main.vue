<!-- 메인 페이지 -->
<template>
  <div class="contents">
    <notice-card></notice-card>
    <ranking-card></ranking-card>
    <progress-card></progress-card>
    <community-card></community-card>
  </div>
</template>

<script>
import NoticeCard from "./components/NoticeCard.vue";
import RankingCard from "./components/RankingCard.vue";
import ProgressCard from "./components/ProgressCard.vue";
import CommunityCard from "./components/CommunityCard.vue";

export default {
  components: {
    "notice-card": NoticeCard,
    "ranking-card": RankingCard,
    "progress-card": ProgressCard,
    "community-card": CommunityCard,
  },
};
</script>

<style scoped></style>
