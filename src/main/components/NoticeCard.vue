<!-- 공지사항 리스트 갯수는 최신 게시물 5개 이하로 맞추기 -->
<template>
  <b-card>
    <h4 class="card-title">
      필독 공지사항
      <span class="text-right">
        <router-link to="/notice">
          <button class = "card-button" type="button">
            <img class="card-img" src="../../assets/cardButton.png"/>
          </button>
        </router-link>
      </span>
    </h4>
    <b-card-text>
      <b-list-group>
        <b-list-group-item v-for="item in lists" :key="item.index">
          <router-link :to="{ path: 'notice/' + item.index }" append>
            <a>{{ item.title }}</a>
          </router-link>
            <span class="text-right">
              {{ item.date }}
            </span>
        </b-list-group-item>
      </b-list-group>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { index: '1', title: 'aaa', date: '2022-09-23' },
        { index: '2', title: 'bbb', date: '2022-08-15' },
        { index: '3', title: 'ccc', date: '2022-07-16' },
        { index: '4', title: 'ddd', date: '2022-05-05' },
        { index: '5', title: 'eee', date: '2022-03-01' },
      ],
    }
  },
  created() {
    // axios.get('/')
    // .then(response => {
    //   for (var i = 0; i < 5; i++) { // 0 ~ 4
    //     this.lists[i].index = response.data[i].index;
    //     this.lists[i].title = response.data[i].title;
    //     this.lists[i].date = response.data[i].date;
    //   }
    // })
    // .catch(error => {
    //   console.log('error='+error)
    // })
  }
}
</script>

<style scoped>
a:link {
  color : black;
}
a:hover {
  color : blue;
}
</style>