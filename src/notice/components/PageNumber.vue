<template>
  <div class="overflow-auto">
    <b-pagination-nav
      :link-gen="linkGen"
      number-of-pages="10"
      align="center"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @change="onChange"
      use-router
    ></b-pagination-nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageNum: 0
      }
    },
    methods: {
      linkGen(pageNum) {
        this.pageNum = pageNum;
        return pageNum === 1 ? '?' : `?page=${pageNum}`
      },
      // onchange가 linkGen보다 먼저 실행되는 문제
      // Notice page의 router-view 처리 문제 (Board+Number / EachPost)
      onChange() {
        console.log(this.pageNum);
      }
    },
    created() {

    }
  }
</script>