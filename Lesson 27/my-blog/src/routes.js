import showBlogs from './components/ShowBlogs.vue';
import addBlog from './components/AddBlog.vue';

export default [{
        path: "/",
        component: showBlogs
    },
    {
        path: "/add",
        component: addBlog
    }
]