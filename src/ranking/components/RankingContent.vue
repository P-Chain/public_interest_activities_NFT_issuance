<template>
  <div class="wrapper">
    <b-tabs>
      <b-tab title="봉사 시간">
        <vms-ranking></vms-ranking>
      </b-tab>
      <b-tab title="NFT 1">
        <NFT-1-ranking></NFT-1-ranking>
      </b-tab>
      <b-tab title="NFT 2">
        <NFT-2-ranking></NFT-2-ranking>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import VMSRanking from './VMSRanking.vue'
import NFT1Ranking from './NFT1Ranking.vue'
import NFT2Ranking from './NFT2Ranking.vue'

export default {
  components: {
    'vms-ranking': VMSRanking,
    'NFT-1-ranking': NFT1Ranking,
    'NFT-2-ranking': NFT2Ranking
  }
}
</script>

<style>

</style>