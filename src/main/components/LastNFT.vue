<template>
  <div class="main-box" v-if="imglist !== []">
    <p class="p-bold">최근 발행 NFT</p>
    <b-img-lazy
      b-img
      class="nft-image"
      v-bind="mainProps"
      alt="Transparent image"
      :src="require(`../../assets/achieves/blood_10.png`)"
    ></b-img-lazy>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: ['temp']
    }
  },
  created() {
    // 수정 필요
    this.$axios.get("/").then(response => {
      imglist = response.data;
    })
    .catch (error => {

    })
  }
}
</script>

<style scoped>
.main-box {
  margin-bottom: 1rem;
}
.p-bold {
  font-weight: bold;
}
.nft-image {
  width: 5rem;
  height: 5rem;
}
</style>