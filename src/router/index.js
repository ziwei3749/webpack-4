
import Vue from 'vue'
import Router from 'vue-router'

import App from '@src/views/App.vue'
import Login from '@src/views/Login.vue'
// const App = () => import('@src/views/App.vue')
// const Login = () => import('@src/views/Login.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
