<template>
  <div class="wrapper">
    <b-list-group>
      <b-list-group-item v-for="item in lists" :key="item.index">
        <router-link :to="{ path: './' + item.index }" append>
          <a class="">{{ item.title }}</a>
        </router-link>
          <span class="text-right">
            {{ item.date }}
          </span>
      </b-list-group-item>
    </b-list-group>
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
      ]
    }
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
.wrapper {
  margin-bottom: 1rem;
}
</style>