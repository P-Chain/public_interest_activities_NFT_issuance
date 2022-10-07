<template>
  <div class="wrapper">
    {{ prog1 }}
    <b-progress :max="max1" height="1rem">
      <b-progress-bar :value="value1">
        <span><strong>{{ value1 }} / {{ max1 }}</strong></span>
      </b-progress-bar>
    </b-progress>
    {{ prog2 }}
    <b-progress :max="max2" height="1rem">
      <b-progress-bar :value="value2">
        <span><strong>{{ value2 }} / {{ max2 }}</strong></span>
      </b-progress-bar>
    </b-progress>
    {{ prog3 }}
    <b-progress :max="max3" height="1rem">
      <b-progress-bar :value="value3">
        <span><strong>{{ value3 }} / {{ max3 }}</strong></span>
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 33,
        max1: 50,
        value2: 3,
        max2: 5,
        value3: 8,
        max3: 10,
  
        prog1: '업적1',
        prog2: '업적2',
        prog3: '업적3'
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
  .progress {
    margin-bottom: 1rem;
  }
  </style>