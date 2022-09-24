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
        number-of-pages="10"
        align="center"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        @page-click="onChange"
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
      pageNum: 0,
      show: true,
      // res_data: [
        // { index: 0, title: 'aaaa', date: '2022-09-24'},
        // { index: 1, title: 'bbbb', date: '2022-08-15'},
        // { index: 2, title: 'cccc', date: '2022-07-16'},
        // { index: 3, title: 'dddd', date: '2022-05-05'},
        // { index: 4, title: 'eeee', date: '2022-03-01'},
        // { index: 5, title: 'aaa', date: '2021-09-24'},
        // { index: 6, title: 'bbb', date: '2021-08-15'},
        // { index: 7, title: 'ccc', date: '2021-07-16'},
        // { index: 8, title: 'ddd', date: '2021-05-05'},
        // { index: 9, title: 'eee', date: '2021-03-01'},
        // { index: 10, title: 'aaaa', date: '2022-09-24'},
        // { index: 11, title: 'bbbb', date: '2022-08-15'},
        // { index: 12, title: 'cccc', date: '2022-07-16'},
        // { index: 13, title: 'dddd', date: '2022-05-05'},
        // { index: 14, title: 'eeee', date: '2022-03-01'},
        // { index: 15, title: 'aaa', date: '2021-09-24'},
        // { index: 16, title: 'bbb', date: '2021-08-15'},
        // { index: 17, title: 'ccc', date: '2021-07-16'},
        // { index: 18, title: 'ddd', date: '2021-05-05'},
        // { index: 19, title: 'eee', date: '2021-03-01'},
      // ],
      // pointer: 0
    }
  },
  created() {
    console.log('created 호출');
    axios.get("/").then(response => {
      // this.res_data = response.data;
      // this.dataInList(this.pointer);
    }).
   catch(error => {
     console.log(error)
   })
  },
  methods: {
    linkGen(pageNum) {
      this.pageNum = pageNum;
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    },
    onChange(page) {
    //   console.log('onChange 호출');
    //   this.pointer = page * 10;
    //   this.dataInList(this.pointer);
    },
    // dataInList(pointer) {
    //   this.show = false;
    //   console.log('dataInList 호출');
    //   this.lists = []
    //   for (var i = pointer; i < pointer + 10 && i < this.res_data.length; i++) {
    //     this.lists[i].index = this.res_data[i].index;
    //     this.lists[i].title = this.res_data[i].title;
    //     this.lists[i].date = this.res_data[i].date;
    //     console.log(this.list[i])
    //   }
      //this.$nextTick(() => { this.show = true; })
    // }
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