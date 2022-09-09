<template>
  <b-tabs>
   <b-tab title="NFT 발급 승인">
     <approve-nft></approve-nft>
   </b-tab>
   <b-tab title="봉사시간 승인">
     <approve-vms></approve-vms>
   </b-tab>
   <b-tab title="발급권한 부여">
     <approve-iss-auth></approve-iss-auth>
   </b-tab>
 </b-tabs>
</template>

<script>
import ApproveNFT from './ApproveNFT.vue'
import ApproveVMS from './ApproveVMS.vue'
import ApproveIssAuth from './ApproveIssAuth.vue'

export default {
  components: {
    'approve-nft': ApproveNFT,
    'approve-vms': ApproveVMS,
    'approve-iss-auth': ApproveIssAuth
  }
}
</script>

<style scoped>
.nav-tabs {
  margin-bottom: 1rem;
}

</style>