<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>



<script>
// import component for local register 
import Ninjas from "./Ninjas.vue";

export default {
  // register a component locally
  components: {
    'ninjas': Ninjas 
  },
  data() {
    return {
      title: "Ninja App"
    };
  }
};
</script>

<style>
</style>
