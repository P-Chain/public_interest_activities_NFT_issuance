<template>
  <div>
    <b-form-group
        label="발급권한 승인 목록"
        v-slot="{ ariaDescribedby }"
        @submit="onSubmit"
        >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="Iss Auth list"
        stacked
      ></b-form-checkbox-group>
      <!-- 수정 -->
      <b-button type="submit" variant="primary" href="">발급</b-button>
      <b-button type="submit" variant="danger" href="">거절</b-button>
    </b-form-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        // DB에서 불러오는 작업 필요
        { value: '1', html: 'NFT1 / 발급자: AAA <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: '2', html: 'NFT2 / 발급자: BBB <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: '3', html: 'NFT2 / 발급자: CCC <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: '4', html: 'NFT3 / 발급자: DDD <a target=&apos;_blank&apos; href="">파일 보기</a>' },
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
  border: 1px solid black;
}
</style>