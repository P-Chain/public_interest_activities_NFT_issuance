<template>
  <div class="contents">
    <h3>발급 대상자 검색</h3>
    <UserNameInputBox></UserNameInputBox>
    <UserList></UserList>
    <hr>
    <AddedUserList></AddedUserList>
  </div>
</template>

<script>
import UserNameInputBox from './components/UserNameInputBox.vue'
import UserList from './components/UserList.vue'
import AddedUserList from './components/AddedUserList.vue'

export default {
  components: {
    UserList,
    UserNameInputBox,
    AddedUserList
  }
}
</script>

<style scoped>
input {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>