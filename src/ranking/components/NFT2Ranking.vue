<template>
  <div>
    <b-table striped hover :items="items" :fields="fields">
      <!-- <template #cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(name)="data">
        {{ data.items.profile.username }}
      </template>
      <template #cell(email)="data">
        {{ data.items.email }}
      </template>
      <template #cell(prog)="data">
        {{ data.items.issuanceCount }}
      </template> -->
    </b-table>
  </div>
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
          key: 'profile.username',
          label: '이름',
          sortable: true
        },
        {
          key: 'email',
          label: '이메일',
        },        
        {
          key: 'issuanceCount',
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
  },
  created(){
    axios.get("/api/ranking/nft").then(response =>{
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