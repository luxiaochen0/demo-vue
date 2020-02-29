import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/first',
    name: 'first',
    component: () => import(/* webpackChunkName: "about" */ '../views/First.vue')
  },
  {
    path: '/a',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */ '../views/A.vue'),
    children:[
      {
        path:'/a1',
        name:'a1',
        component: () => import(/* webpackChunkName: "about" */ '../views/A1.vue'),
      }
    ]
  },
  {
    path: '/b',
    name: 'b',
    component: () => import(/* webpackChunkName: "about" */ '../views/B.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import(/* webpackChunkName: "about" */ '../views/Goods.vue')
  },
  {
    path: '/t',
    name: 't',
    component: () => import(/* webpackChunkName: "about" */ '../views/T.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
