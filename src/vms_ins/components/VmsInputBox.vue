<template>
  <div class="wrapepr">
    <b-form @submit="onSubmit">
      <b-form-input
          id="input-1"
          v-model="form.vmsTime"
          type="number"
          placeholder="봉사시간을 입력해주세요."
          required
        ></b-form-input>
      <b-form-file
          v-model="form.file1"
          :state="Boolean(file1)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>
      <b-button type="submit" variant="primary">제출</b-button>
      <router-link to="/mypage">
        <b-button href="/" variant="outline-primary">뒤로 가기</b-button>
      </router-link>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        vmsTime: 0,
        file1: null,
          nickname: '',
          username: '',
          count:0
      }
    }
  },
  methods: {
    onSubmit(event) {
        console.log(this.form.vmsTime);
      event.preventDefault()
      console.log(JSON.stringify(this.form)) // for debug
        axios.get("/api/auth_account/check").then((response)=>{
            this.form.nickname = response.data.nickname;
            this.form.username = response.data.profile.username;
            axios.get("/api/vms_ins/count").then((response)=>{
            this.form.count = response.data;
            if(this.form.count == null){
                this.form.count = 0;
            }
            axios.post('/api/vms_ins/vmsapply', { 
          index: this.form.count,
        volTime: this.form.vmsTime,
        volIss: this.form.file1,
          nickname: this.form.nickname,
          username: this.form.username
      })
      .then(res => {
        // do something with res
        console.log(res);
          if (res.status == 200) {
            location.href = "/mypage";
            //this.$store.commit("login", res.data);
          }
      })
        })
        })
        console.log(this.form);
      // 수정 필요
    }
  }
}
</script>

<style scoped>
form {
  margin-bottom: 1rem;
  margin-top: 1rem;
}
.form-group {
  margin-bottom: 1rem;
}
</style>