var one = new Vue({
    el:'#vue-app-one',
    data:{
       title: 'Vue App One'
    },
    methods:{
    

    },
    computed:{
        greet: function(){
            return 'Hello from App One!'
        }
    }  
});

var two = new Vue({
    el:'#vue-app-two',
    data:{
       title: 'Vue App Two'
    },
    methods:{
        changeTitle: function(){
            one.title = 'Titel Changed!';
        }

    },
    computed:{
        greet: function(){
            return 'Hello from App two!'    
        }
    }  
});

two.title = 'Change Vue Two Title from outside.'