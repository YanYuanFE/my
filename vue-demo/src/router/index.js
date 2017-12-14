import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Favorite from '@/components/Favorite'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
