import { createRouter, createWebHistory } from 'vue-router'


import HomeView from '../views/HomeView.vue'

import RateView from '../views/RateView.vue'
import ForexRateView from '../views/rates/ForexRateView.vue'
import ForexDepositRateView from '../views/rates/ForexDepositRateView.vue'
import TWDRateView from '../views/rates/TWDRateView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/RateIndex',
    component: RateView
  },
  {
    path: '/RateIndex/TWDRate',
    component: TWDRateView
  },
  {
    path: '/RateIndex/ForexRate',
    component: ForexRateView
  },
  {
    path: '/RateIndex/ForexDepositRate',
    component: ForexDepositRateView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
