import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import search from '@/pages/search'
import detail from '@/pages/detail'
import hellojade from '@/components/hellojade'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      redirect:"/"
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/detail/:query',
      name: 'detail',
      component: detail,
      children:[{
        path:":id",
        component:hellojade
      }]
    },
     {
      path: '/JADE',
      name: 'hellojade',
      component: hellojade
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
})
