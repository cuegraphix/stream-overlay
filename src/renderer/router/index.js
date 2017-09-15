import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'config',
      component: require('@/components/Config')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
