<!-- 텍스트박스: 이메일, 패스워드, 이름, 전화번호, 지갑주소 / 버튼: 권한신청, 지갑연동, 수정사항 저장 -->
<template>
  <div class="container">
    <b-list-group>
      이메일<b-list-group-item>{{ myEmail }}</b-list-group-item>
      <!-- 비밀번호 변경 -->
      <div class="password">
        <b-form inline @submit="onSubmit">
          <label for="text-password">Password</label>
          <b-form-input type="password" v-model="form.password" id="text-password" aria-describedby="password-help-block"></b-form-input>
          <b-button type="submit" variant="primary">수정</b-button>
        </b-form>
      </div>
      이름 또는 기관명<b-list-group-item>{{ myName }}</b-list-group-item>
      전화번호<b-list-group-item>{{ myPhoneNum }}</b-list-group-item>
      <div class="wallet">
        지갑 주소
        <b-list-group-item>
          <tr>
            <td>{{ myWalletAdr }}</td>
            <td><jazzicon :address="myWalletAdr" :diameter="20" /></td>
          </tr>
        </b-list-group-item>
        <b-button v-b-modal.modal-prevent-closing variant="primary">
          지갑주소 입력
        </b-button>
        <b-modal
          id="modal-prevent-closing"
          ref="modal"
          title="지갑 주소 입력"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
              label="지갑주소"
              label-for="name-input"
              invalid-feedback="지갑 주소가 필요합니다"
              :state="nameState"
            >
              <b-form-input
                id="name-input"
                v-model="name"
                :state="nameState"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
    </b-list-group>
    <b-button href="./vms_ins" variant="outline-primary">봉사시간 갱신</b-button>
    <b-button href="./auth_apply" variant="outline-secondary">권한 신청</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myEmail: '이메일',
      myName: '이름',
      myPhoneNum: '전화번호',
      myWalletAdr: '0xcd50586710A82A6f6cB06d8a017fc3177CEc9087',
      form: {
        password: ''
      },
      walletAdr : ''
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form)) // for debug
      axios.post('/register/local', { // router 수정 필요
        password: this.form.password, 
      })
      .then(res => {
        // do something with res
        console.log(res);
      })
    },
  },
}
</script>

<style scoped>
input {
  margin-bottom: 0.1rem;
}
.list-group-item {
  margin-bottom: 1rem;
}
.wallet .list-group-item {
  margin-bottom: 0.1rem;
}
.wallet button {
  margin-bottom: 1rem;
}
form {
  margin-bottom: 1rem;
}
</style>