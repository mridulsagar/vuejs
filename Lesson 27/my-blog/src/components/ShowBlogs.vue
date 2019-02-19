<template>
  <div id="show-blog">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" :key="blog" class="single-blog">
      <h2>{{blog.title}}</h2>
      <article>{{ blog.body }}</article>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      blogs: []
    };
  },
  methods: {},
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
