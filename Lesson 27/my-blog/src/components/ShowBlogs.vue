<template>
  <div v-theme:column="'narrow'" id="show-blog">
    <h1>All Blog Articles</h1>
    <div v-for="(blog,index) in blogs" :key="index" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{ blog.body | snippet}}</article>
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
