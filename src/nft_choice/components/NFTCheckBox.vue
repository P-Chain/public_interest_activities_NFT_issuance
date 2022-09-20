<template>
  <div class="wrapper">
    <b-form-group
        label="발급 NFT 목록"
        v-slot="{ ariaDescribedby }"
        @submit="onSubmit"
        >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="NFT list"
        stacked
      ></b-form-checkbox-group>
    <router-link to="/user_search">
      <b-button type="submit" variant="primary" href="/">발급</b-button>
    </router-link>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        // 권한 신청과의 차이점: 권한을 받은 NFT 리스트만 표기해야 한다는 점
        { text: 'num1', value: '1번' },
        { text: 'num2', value: '2번' },
        { text: 'num3', value: '3번' },
        { text: 'num4', value: '4번' }
      ],
    }
  },
  method: {
    onSubmit(event) {
      
    }
  }
}
</script>

<style scoped>
.bv-no-focus-ring {
  margin-bottom: 1rem;
}

</style>