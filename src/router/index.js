import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },

  {
    path: '/destinations/:id/:slug',
    name: 'destination',
    component: () => /* webpackChunkName: "destination" */ import('@/views/DestinationShow.vue'),
    props: ({ params }) => ({ ...router.params, id: parseInt(params.id), slug: params.slug }),
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
