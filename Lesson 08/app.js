new Vue({
    el:'#vue-app',
    data:{
        age: 25,
        a: 0,
        b: 0

    },
    methods:{
        /* addToA: function(){
            console.log("addToA function called");
            return this.age + this.a;
        },
        addToB: function(){
            console.log("addToB function called");
            return this.age + this.b;
        } */
    },
    computed:{
        addToA: function(){
            console.log("addToA function called");
            return this.age + this.a;
        },
        addToB: function(){
            console.log("addToB function called");
            return this.age + this.b;
        }
    }
});