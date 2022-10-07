<template>
  <div class="wrapper">
    <b-table small :fields="fields" :items="items" responsive="sm">
      <!-- A virtual column -->
      <template #cell(image)="data">
        <!-- <img :src="baseUrl + 'path/path' + obj.key +'.png'"> -->
        <b-img :src="data.item.image" alt="업적 이미지"></b-img>
      </template>
      <!-- A custom formatted column -->
      <template #cell(name)="data">
        {{ data.item.name }}
      </template>
      <!-- A virtual composite column -->
      <template #cell(text)="data">
        {{ data.item.text }}
      </template>
      <template #cell(achievedTime)="data">
        {{ data.item.achievedTime }}
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { 
          key: 'image',
          label: '',
          image: true
        },
        { 
          key: 'name', 
          label: '업적명' 
        },
        {
          key: 'text',
          label: ''
        },
        {
          key: 'achievedTime',
          label: '달성 시각'
        }
      ],
      items: [
        // { image: require("../../../assets/background.jpg"), name: '업적1', text: '업적 설명', achievedTime: '시간1' },
        // { image: require("../../../assets/googleIcon.png"), name: '업적2', text: '업적 설명', achievedTime: '시간2' },
        // { image: require("../../../assets/facebookIcon.png"), name: '업적3', text: '업적 설명', achievedTime: '시간3' },
      ],
    }
  },
  // created(){
  //   this.$axios.get("/").then(response =>{
  //       console.log(response);
  //   })
  // }
}
</script>

<style scoped>
img {
  width: 5rem;
  height: 5rem;
  border: 1px solid black;
}

</style>