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
        { text: '이름: name, 이메일: email' },
        { text: '이름: name, 이메일: email' },
        { text: '이름: name, 이메일: email' },
      ]
    }
  },
  created() {
    this.options 
    this.$EventBus.$on('userSearch', function(value) {
      console.log(value)
      this.options = []
      console.log(this.options)
      axios.get('/').then(response => {
        this.form = response.data
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