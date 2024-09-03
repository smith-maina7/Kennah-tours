import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },

  {
    path: '/destinations/:id/:slug',
    name: 'destination',
    component: () => /* webpackChunkName: "destination" */ import('@/views/DestinationShow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
