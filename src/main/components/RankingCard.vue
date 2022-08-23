<template>
  <b-card title="랭킹" sub-title="&&부제">
    <b-card-text>
      <b-progress :value="value1" :max="max" show-value class="mb-1"></b-progress>
      <b-progress :value="value2" :max="max" show-value class="mb-2"></b-progress>
      <b-progress :value="value3" :max="max" show-value class="mb-3"></b-progress>
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
    }
  },
  created: {
    max: this.value1 * 2
  }
}
</script>

<style>

</style>