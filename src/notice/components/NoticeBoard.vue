<!-- axiosGet에서 미리 만들어진 게시물 10개씩(index) 가져오는 작업 필요-->
<template>
  <div class="wrapper">
    <b-list-group v-if="show">
      <b-list-group-item v-for="item in lists" :key="item.index">
        <router-link :to="{ path: './' + item.index }" append>
          <a>{{ item.title }}</a>
        </router-link>
          <span class="text-right">
            {{ item.date }}
          </span>
      </b-list-group-item>
    </b-list-group>
    <div class="overflow-auto">
      <b-pagination-nav
        :link-gen="linkGen"
        :number-of-pages="numberOfPages"
        align="center"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @page-click="pageClick"
        use-router
      ></b-pagination-nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { index: 0, title: 'aaaa', date: '2022-09-24'},
        { index: 1, title: 'bbbb', date: '2022-08-15'},
        { index: 2, title: 'cccc', date: '2022-07-16'},
        { index: 3, title: 'dddd', date: '2022-05-05'},
        { index: 4, title: 'eeee', date: '2022-03-01'},
        { index: 5, title: 'aaa', date: '2021-09-24'},
        { index: 6, title: 'bbb', date: '2021-08-15'},
        { index: 7, title: 'ccc', date: '2021-07-16'},
        { index: 8, title: 'ddd', date: '2021-05-05'},
        { index: 9, title: 'eee', date: '2021-03-01'},
      ],
      show: true,
      index: 1,
      numberOfPages: 10,
    }
  },
  created() {
  // axios index;
    this.pageClick();
  },
  methods: {
  // page url method
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
  // watch pageNum and re-rendering
    pageClick() {
      var queryValue = this.$route.query.page;
      if (queryValue > 1) this.index = queryValue;
      else this.index = 1;
      this.axiosGet(this.index);
      console.log(this.index)
  },
  // axios get, 주소 임의 지정
    axiosGet(index) {
      this.show = false;
      axios.get("/api/notice/getList/$(index)").then(response => {
        this.lists = []
        this.lists.concat(response.data);
      }).
      catch(error => {
       console.log(error)
      })
      this.$nextTick(() => { this.show = true; })
    }
  },
}
</script>

<style scoped>
a:link {
  color : black;
}
a:hover {
  color : blue;
}
.wrapper {
  margin-bottom: 1rem;
}
</style>