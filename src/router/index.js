import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Profile = ()=>import('views/profile/Profile')
const shopCat = ()=>import('views/shopcart/ShopCat')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
   redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/shopcat',
    name: 'shopCat',
    component: shopCat
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
