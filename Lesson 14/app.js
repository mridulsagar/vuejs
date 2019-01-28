/* Global data object 
var data = {
    name: 'Sagar'
} */

Vue.component('greeting', {
    template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName()">Change Name</button></p>',

    data: function(){
        // retruing new data object
        return {
            name: 'Mridul'
        }

        // returning global data object
        /* return data; */
    },

    methods:{
        changeName: function(){
            this.name = "Mridul Das"
        }
    }

});

new Vue({
    el:'#vue-app-one'
});

new Vue({
    el:'#vue-app-two '
});