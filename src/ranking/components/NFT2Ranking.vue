<template>
  <b-table striped hover :items="items" :fields="fields">
    <!-- <template #cell(index)="data">
      {{ data.index + 1 }}
    </template>
    <template #cell(name)="data">
      {{ data.items.name }}
    </template>
    <template #cell(email)="data">
      {{ data.items.email }}
    </template>
    <template #cell(prog)="data">
      {{ data.items.prog }}
    </template> -->
  </b-table>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'index',
          label: '랭킹',
        },
        {
          key: 'name',
          label: '이름',
          sortable: true
        },
        {
          key: 'email',
          label: '이메일',
        },        
        {
          key: 'prog',
          label: '보유 갯수',
          sortable: true
        },
      ],
      items: [
        { index: 1, name: '홍*동', email: 'a****@naver.com', prog: 50 },
        { index: 2, name: 'A*C', email: 'g****@google.com', prog: 30 },
        { index: 3, name: 'D*F', email: 'a****@daum.com', prog: 20 },
        { index: 4, name: 'E*F', email: 'e****@daum.com', prog: 10 },
      ]
    }
  }
}
</script>

<style>

</style>