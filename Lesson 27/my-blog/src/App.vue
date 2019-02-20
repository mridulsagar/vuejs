<template>
  <!-- <div>
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>-->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/AddBlog.vue";
import showBlogs from "./components/ShowBlogs.vue";
import listBlogs from "./components/ListBlogs.vue";
export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "list-blogs": listBlogs
  },

  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
