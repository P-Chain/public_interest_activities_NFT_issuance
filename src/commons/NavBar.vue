<template>
  <!-- v-if:*** for debug -->
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

    <b-navbar-brand href="/">P-chain</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="!token">
        <router-link to="/login">
          <b-nav-item href="/">로그인</b-nav-item>
        </router-link>
      </b-navbar-nav>

      <b-navbar-nav v-else>
        <b-nav-item>{{ name }}</b-nav-item>
        <b-nav-item @click="logout">로그아웃</b-nav-item>
        <router-link to="/login">
          <b-nav-item href="/">마이페이지</b-nav-item>
        </router-link>
        
        <router-link to="/nft_choice">
          <b-nav-item v-if="access >= 1" href="/">NFT발급</b-nav-item>
        </router-link>

        <router-link to="/manage_page">
          <b-nav-item v-if="access >= 2" href="/">관리페이지</b-nav-item>
        </router-link>
      </b-navbar-nav>
    </b-collapse>

    <!-- for debug -->
    <!-- <b-button variant="primary" @click="onChange">로그인 전환</b-button>
    <b-button variant="secondary" @click="onPlus">계정 권한 전환</b-button> -->
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      name: "이름",
      token: false,
      access: 0,
    };
  },
  async created() {
    try {
      await axios
        .get("/api/auth_account/check")
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 403) {
              console.log("미로그인 상태");
            }
          } else if (error.request) {
            console.log("request");
            console.log(error);
          }
        })
        .then((response) => {
          //console.log(response);
          if (response.data.nickname) {
            //console.log(response.data.issuer);
            this.name = response.data.nickname;
            if (response.data.issuer) {
              this.access = 1;
              if (response.data.manager) {
                this.access = 2;
              }
            }
            this.token = true;
          }
        });
    } catch (error) {
      console.log("error");
      console.log(error.response);
      this.token = false;
    }
    this.commitToken()
    this.commitAccess()
  },
  // for debug
  methods: {
    // // for debug
    // onChange(event) {
    //   this.token = !this.token;
    // },
    // // for debug
    // onPlus(event) {
    //   if (this.access == 2) this.access = 0;
    //   else this.access++;
    //   console.log(this.access);
    // },
    logout(event) {
      axios.post("/api/auth_account/logout").then((response) => {
        if (response) {
          this.name = "이름";
          this.token = false
          this.access = 0
          this.commitToken()
          this.commitAccess()
          location.href = "/";        
        }
      });
    },
    commitToken() {
      this.$store.commit('changeToken', this.token)
    },
    commitAccess() {
      this.$store.commit('changeAccess', this.access)
    }
  },
}
</script>

<style scoped></style>
