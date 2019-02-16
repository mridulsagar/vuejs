import Vue from 'vue'
import App from './App.vue'

// region REGISTER A COMPONENT GLOBALLY
/* import Ninjas from './Ninjas.vue'
Vue.component("ninjas", Ninjas); */
// endregion

new Vue({
  el: '#app',
  render: h => h(App)
})
