import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'
import About from '@/views/About'
import Techs from '@/views/Techs'
import Projects from '@/views/Projects'
import Contacts from '@/views/Contacts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Mainpage',
    component: MainPage,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/techs',
    name: 'Techs',
    component: Techs,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
