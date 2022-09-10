<template>
  <div>
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
    </b-form-group>

    <!-- Styled -->
    <b-form-file
      v-model="file1"
      :state="Boolean(file1)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
    ></b-form-file>
    <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
    
    <b-button type="submit" variant="primary">발급권한 신청</b-button>
    <b-button href="./mypage" variant="outline-primary">뒤로 가기</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        // 수정 필요. DB에서 불러와서 배치
        { text: 'num1', value: '1번' },
        { text: 'num2', value: '2번' },
        { text: 'num3', value: '3번' },
        { text: 'num4', value: '4번' }
      ],
      file1: null,
    }
  },
  method: {

  }
}
</script>

<style>

</style>