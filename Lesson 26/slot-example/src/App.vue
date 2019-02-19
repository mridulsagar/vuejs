<template>
  <div>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="showFormOne">Form One</button>
    <button v-on:click="showFormTwo">Form Two</button>
  </div>
</template>

<script>
// Imports
import formOne from "./components/FormOne.vue";
import formTwo from "./components/FormTwo.vue";
export default {
  components: {
    "form-one": formOne,
    "form-two": formTwo
  },
  data() {
    return {
      component: "form-one"
    };
  },
  methods: {
    showFormOne: function() {
      this.component = "form-one";
    },
    showFormTwo: function() {
      this.component = "form-two";
    },
    handleSubmit: function() {
      alert("thanks for submitting");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>