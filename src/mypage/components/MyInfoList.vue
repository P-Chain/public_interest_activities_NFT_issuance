<!-- 텍스트박스: 이메일, 패스워드, 이름, 전화번호, 지갑주소 / 버튼: 권한신청, 지갑연동, 수정사항 저장 -->
<template>
  <div class="wrapper">
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
        <b-list-group-item >
          <tr>
            <td>
              {{ myWalletAdr }}
            </td>
            <td
              id="wallet-jazzicon" 
              ref="wallet-jazzicon">
              <jazzicon
                :address="myWalletAdr" 
                :diameter="50" />
              </td>
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
              :state="walletAdrState"
            >
              <b-form-input
                id="name-input"
                v-model="walletAdr"
                :state="walletAdrState"
                required
              ></b-form-input>
            </b-form-group>
          </form>
        </b-modal>
      </div>
    </b-list-group>
    <router-link to="/vms_ins">
      <b-button href="/" variant="outline-primary">봉사시간 갱신</b-button>
    </router-link>
    <router-link to="./auth_apply">
      <b-button href="/" variant="outline-secondary">권한 신청</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myEmail: '이메일',
      myName: '이름',
      myPhoneNum: '전화번호',
      myWalletAdr: '',
      form: {
        password: ''
      },
      walletAdr : '',
      walletAdrState: null,
    }
  },
  created() {
    axios.get('/')
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
    checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.walletAdrState = valid
        return valid
      },
    resetModal() {
      this.walletAdr = ''
      this.walletAdrState = null
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.myWalletAdr = this.walletAdr
      
      
      //console.log('this.$refs.wallet-jazzicon='+this.$refs.wallet-jazzicon)
      console.log('document.getElementById(wallet-jazzicon)='+document.getElementById('wallet-jazzicon'))
      domtoimage.toBlob(document.getElementById('wallet-jazzicon'))
      .then(blob => {
        // 수정 필요 + style="display:none" 적용하고도 저장 가능한지
        window.saveAs(blob, 'img.png')
      })

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
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