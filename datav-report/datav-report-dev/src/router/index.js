import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import BMap from '../views/BMap.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/bmap',
  //   name: 'BMap',
  //   component: BMap
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: () => import(/* webpackChunkName: "bmap" */ '../views/BMap.vue')
  },
  {
    path: '/bmap2',
    name: 'BMap2',
    component: () => import(/* webpackChunkName: "bmap" */ '../views/BMap2.vue')
  },
  {
    path: '/map-vcharts',
    name: 'Map-VCharts',
    component: () => import(/* webpackChunkName: "map" */ '../views/Map-VCharts-.vue')
  },
  {
    path: '/bmap-vcharts',
    name: 'BMap-VCharts',
    component: () => import(/* webpackChunkName: "bmap" */ '../views/BMap-VCharts.vue')
  },
  {
    path: '/liquid-fill',
    name: 'LiquidFill',
    component: () => import(/* webpackChunkName: "liquid" */ '../views/LiquidFill.vue')
  },
  {
    path: '/word-cloud',
    name: 'WordCloud',
    component: () => import(/* webpackChunkName: "wordcloud" */ '../views/WordCloud.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
