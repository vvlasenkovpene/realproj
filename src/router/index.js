import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Ad from '@/components/Ads/Ad.vue'
import AdList from '@/components/Ads/AdList.vue'
import NewAd from '@/components/Ads/NewAd.vue'
import Login from '@/components/Auth/Login.vue'
import Registration from '@/components/Auth/Registration.vue'
import Orders from '@/components/User/Orders.vue'
import Error from '@/components/Error/Error.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
    {
    path: '/ad/:id',
    name: 'ad',
    component: Ad
  },
    {
    path: '/list',
    name: 'adList',
    component: AdList
  },
    {
    path: '/new',
    name: 'newAd',
    component: NewAd
  },
    {
    path: '/login',
    name: 'login',
    component: Login
  },
    {
    path: '/registration',
    name: 'reg',
    component: Registration
  },
    {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '*',
    name: 'Error 404',
    component: Error
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
