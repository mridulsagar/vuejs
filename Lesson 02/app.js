new Vue({
    el:'#vue-app',
    data:{
        name: 'Mridul',
        job: 'Developer'
    },
    methods:{
        greet:function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }  
});