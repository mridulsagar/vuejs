<template>
  <ul>
    <li v-for="(ninja, index) in ninjas" :key="index"> {{ ninja }} </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      ninjas : ['Yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<style>

</style>
