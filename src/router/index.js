import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/farms',
    name: 'farms',
    component: () => import('../views/Farm.vue')
  },
  {
    path: '/pool',
    name: 'pool',
    component: () => import('../views/Pool.vue')
  },
  {
    path: '/bridge',
    name: 'bridge',
    component: () => import('../views/Bridge.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
