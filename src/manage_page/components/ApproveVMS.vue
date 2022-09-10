<template>
  <div>
    <b-form-group
        label="봉사시간 승인 목록"
        v-slot="{ ariaDescribedby }"
        @submit="onSubmit"
        >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        name="VMS list"
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
        { value: '1', html: '대상자: AAA / 봉사시간: N 시간 <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: '2', html: '대상자: BBB / 봉사시간: N 시간 <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: '3', html: '대상자: CCC / 봉사시간: N 시간 <a target=&apos;_blank&apos; href="">파일 보기</a>' },
        { value: '4', html: '대상자: DDD / 봉사시간: N 시간 <a target=&apos;_blank&apos; href="">파일 보기</a>' },
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