<template>
  <b-form-group v-slot="{ ariaDescribedby }">
    <b-form-radio-group
      v-model="selected"
      :options="options"
      :aria-describedby="ariaDescribedby"
      name="plain-stacked"
      plain
      stacked
    ></b-form-radio-group>

    <b-button type="submit" variant="secondary">추가</b-button>
  </b-form-group>
</template>

<script>
export default {
  data() {
      return {
        selected: '',
        options: [
          { text: '이름: 유저1, 이메일: aaa@aaa.aa', value: 0 },
          { text: '이름: 유저2, 이메일: bbb@bbb.bb', value: 1 },
          { text: '이름: 유저3, 이메일: ccc@ccc.cc', value: 2 },
        ]
      }
    }
}
</script>

<style scoped>
.bv-no-focus-ring {
  margin-bottom: 0.5rem;
}
.form-group {
  border: 1px solid black;
}

</style>