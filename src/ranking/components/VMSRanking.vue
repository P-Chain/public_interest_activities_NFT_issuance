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
          key: 'id',
          label: '이메일',
        },        
        {
          key: 'volTime',
          label: '봉사 시간',
          sortable: true
        },
      ],
      items: [
        { index: 1, name: 'A*C', email: 'a****@naver.com', prog: 1000 },
        { index: 2, name: 'D*F', email: 'g****@google.com', prog: 660 },
        { index: 3, name: '홍*동', email: 'a****@daum.com', prog: 300 },
      ]
    }
  },
created(){
    axios.get("https://pchapi.loca.lt/api/ranking/vol").then(response =>{
    console.log(response.data);
        var arr = response.data;
        for(var i in arr){
            arr[i].index = Number(i)+1;
        }
        this.items = arr;
    })
  }
}
</script>

<style>

</style>