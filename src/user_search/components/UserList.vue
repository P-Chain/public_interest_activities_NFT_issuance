<template>
  <div class="wrapper">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      form: {
        name: '',
        email: ''
      },
      options: [
        { text: '이름: name, 이메일: email',name:"이름" },
        { text: '이름: name, 이메일: email' },
        { text: '이름: name, 이메일: email' },
      ]
    }
  },
  created() {
    this.options 
      axios.get('/api/user_search/userlist').then(response => {
        console.log(response.data);
          var data = response.data;
          for(var i in data){
              data[i].text = '이름: '+data[i].profile.username+' 닉네임: '+data[i].nickname;
          }
          this.options = data;
      })
    this.$EventBus.$on('userSearch', function(value) {
      this.options = []
      console.log(this.options)
      axios.post('/api/user_search/finduser',{username:value}).then(response => {
        console.log(response);
          var data = response.data;
          data.text = '이름: '+data.profile.username+' 닉네임: '+data.nickname;
          this.options.push(data.text);
          console.log(this.options);
      })
    })
  },
  updated() {
    console.log('updated')
  }
}
</script>

<style scoped>
.bv-no-focus-ring {
  margin-bottom: 0.5rem;
  overflow: scroll;
  height: 10rem;
}
.form-group {
  border: 1px solid black;
}
</style>