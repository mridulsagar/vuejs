# my-project

> A Vue.js project

# Register a Component Globally and Locally
Globally in: main.js file
```
import Ninjas from './Ninjas.vue'
Vue.component("ninjas", Ninjas);
```
Locally in: App.vue file

```
// import component for local register 
<script>
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

```