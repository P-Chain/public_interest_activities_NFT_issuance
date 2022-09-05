<template>
  <b-tabs>
    <b-tab title="VMS 인증번호 입력">
      <b-form>
        <b-form-group id="input-group-1" label="VMS 인증번호" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="vmsNum"
            placeholder="vms 인증번호를 입력해주세요."
            required
          ></b-form-input>
          <b-form-input
            id="input-2"
            v-model="vmsTime"
            type="number"
            placeholder="봉사시간을 입력해주세요."
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">제출</b-button>
        <b-button href="./mypage" variant="outline-primary">뒤로 가기</b-button>
      </b-form>
    </b-tab>
    <b-tab title="파일 첨부">
      <b-form>
        <b-form-input
            id="input-1"
            v-model="vmsTime"
            type="number"
            placeholder="봉사시간을 입력해주세요."
            required
          ></b-form-input>
        <b-form-file
            v-model="file1"
            :state="Boolean(file1)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
          ></b-form-file>
          <div class="mt-3">Selected file: {{ file1 ? file1.name : '' }}</div>

        <b-button type="submit" variant="primary">제출</b-button>
        <b-button href="./mypage" variant="outline-primary">뒤로 가기</b-button>
      </b-form>
    </b-tab>
  </b-tabs>
</template>

<script>
export default {
  data() {
    return {
      vmsNum: '',
      vmsTime: '',
      file1: null
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