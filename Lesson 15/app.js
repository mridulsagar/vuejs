new Vue({
    el: '#vue-app',
    data: {
        output: ''
    },
    methods: {
        readRefs: function(){
        
            //Example 1
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;

            //Example 2
            console.log(this.$refs.test.innerText);

        }
    }
});