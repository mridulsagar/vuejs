new Vue({
    el:'#vue-app',
    data:{
        name: 'Mridul',
        job: 'Developer',
        website: 'https://www.cruxbd.com',
        websiteTag: '<a href="https://www.cruxbd.com">Visit Our Website</a>'

    },
    methods:{
        greet:function(time){
            return 'Good ' + time + ' ' + this.name;
        }
    }  
});