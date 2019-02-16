<template>
  <div>
    <h1> {{ title }} </h1>
    <p> {{ greeting() }}</p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "My first vue file..."
    }
  },
  methods: {

    greeting: function(){
      return "Hello... everyone.. ";
    }


  }
}
</script>

<style>

</style>
