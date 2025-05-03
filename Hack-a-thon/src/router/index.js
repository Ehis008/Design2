import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import NewsCategoryView from '../views/NewsCategoryView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUsView,
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      component: ContactUsView,
    },
    {
      path: '/',
      name: 'NewsCategoryView',
      component: NewsCategoryView,
    },
    
  ],
})

export default router
