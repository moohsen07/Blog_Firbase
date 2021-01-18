import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from '../views/Blog.vue'
import AddBlog from '../views/AddBlog.vue'
import SingleBlog from '../views/SingleBlog.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/add',
    name: 'Add',
    component: AddBlog
  },
  {
    path: '/blog/:id',
    name: 'SingleBlog',
    component: SingleBlog
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router