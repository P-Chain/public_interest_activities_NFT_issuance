<template>
  <b-card title="랭킹" sub-title="">
    <b-card-text>
      <!-- DB에서 불러내는 작업 필요. 최대 3개까지 -->
      {{ rank1 }}
      <b-progress :value="value1" :max="value1" height="1rem" show-value class="mb-1"></b-progress>
      {{ rank2 }}
      <b-progress :value="value2" :max="value1" height="1rem" show-value class="mb-2"></b-progress>
      {{ rank3 }}
      <b-progress :value="value3" :max="value1" height="1rem" show-value class="mb-3"></b-progress>
    </b-card-text>

    <!-- <b-card-text>A second paragraph of text in the card.</b-card-text> -->

    <a href="/ranking" class="card-link">더보기</a>
    <!-- <b-link href="#" class="card-link">Another link</b-link> -->
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      value1: 100,
      value2: 77,
      value3: 50,

      rank1: '랭킹1',
      rank2: '랭킹2',
      rank3: '랭킹3'
    }
  }
}
</script>

<style scoped>
.progress {
  margin-bottom: 1rem;
}

</style>