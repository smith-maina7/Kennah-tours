import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import data from '@/data.json'

const routes = [
  { path: '/', name: 'home', component: HomeView },

  {
    path: '/destinations/:id/:slug',
    name: 'destination',
    component: () => /* webpackChunkName: "destination" */ import('@/views/DestinationShow.vue'),
    props: ({ params }) => ({ ...router.params, id: parseInt(params.id), slug: params.slug }),
    beforeEnter: (to, from, next) => {
      const destination = data.destinations.find((d) => d.id === parseInt(to.params.id))
      if (!destination) {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash
        })
      } else {
        next()
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: () => import('@/views/ExperienceShow.vue'),
        props: ({ params }) => ({
          id: parseInt(params.id),
          slug: params.slug,
          experienceSlug: params.experienceSlug
        })
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => /* webpackChunkName: "not-found" */ import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || { top: 0 }
  }
})

export default router
