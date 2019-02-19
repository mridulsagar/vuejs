<template>
  <show-blogs></show-blogs>
</template>

<script>
import addBlog from "./components/AddBlog.vue";
import showBlogs from "./components/ShowBlogs.vue";
export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs
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
