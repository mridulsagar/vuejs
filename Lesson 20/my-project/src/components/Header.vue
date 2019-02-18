<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    changeTitle() {
      // Local template change
      //this.title = "Vue Wizerds";

      // Now we do emmit for changing root value
      this.$emit("changeTitle", "Vue Wizards");
    }
  }
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
