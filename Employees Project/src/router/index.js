import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from "../views/TodoView.vue"
import PostsView from "../views/PostsView.vue"
import EditPostView from "../views/EditPostView.vue"
import Learn from "../views/Learn.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ToDo',
      name: 'ToDo',
      component: TodoView,
    },
    {
      path: '/Posts',
      name: 'Posts',
      component: PostsView,
    },
    {
       path: "/Post",
       name: 'Post',
       component: EditPostView,
     },
    {
       path: "/Learn",
       name: 'Learn',
       component: Learn,
     },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
