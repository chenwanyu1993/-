import Vue from 'vue'
import Router from 'vue-router'
import Hotfilm from '@/components/Hotfilm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hotfilm',
      component: Hotfilm
    }
  ]
})
