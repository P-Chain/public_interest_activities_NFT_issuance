<template>
  <b-table small :fields="fields" :items="items" responsive="sm">
    <!-- A virtual column -->
    <template #cell(index)="data">
      {{ data.index + 1 }}
    </template>

    <!-- A custom formatted column -->
    <template #cell(name)="data">
      <b class="text-info">{{ data.value.last.toUpperCase() }}</b>, <b>{{ data.value.first }}</b>
    </template>

    <!-- A virtual composite column -->
    <template #cell(nameage)="data">
      {{ data.item.name.first }} is {{ data.item.age }} years old
    </template>

    <!-- Optional default data cell scoped slot -->
    <template #cell()="data">
      <i>{{ data.value }}</i>
    </template>
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
        { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
        { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
        { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
        { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
      ]
    }
  }
}
</script>

<style>

</style>