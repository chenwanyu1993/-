import Vue from 'vue'
import Router from 'vue-router'
import Swiper from '@/components/Swiper'
import Hotfilm from '@/components/Hotfilm'
import Comingfilm from '@/components/Comingfilm'
import Top250 from '@/components/Top250'
import Detail from '@/components/Detail'
import Reying from '@/components/Reying'
import jijiangshangying from '@/components/jijiangshangying'
import paihang from '@/components/paihang'
import piaofang from '@/components/piaofang'
import Search from '@/components/Search'
import List from '@/components/List'
import Result from '@/components/Result'
import MY from '@/components/MY'
import login from '@/components/login'
import register from '@/components/register'


import Boxofficestandings from '@/components/Boxofficestandings'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
       name: 'Swiper',
       component: Swiper,
      children:[{
      	  path: '',
	        name: 'Hotfilm',
	        component: Hotfilm,
	      children:[{
  	      	path:"",
  	      	name:'Comingfilm',
  	      	component:Comingfilm,
	      	children:[{
  	      		path:"",
  	      		name:'Top250',
  	      		component:Top250,
	      		children:[{
	      			path:"",
	      			name:"Boxofficestandings",
	      			component:Boxofficestandings,
	      			children:[{
				      	path: '',
					      name: 'Search',
					      component: Search
				      }]
              
	      		}]
	      	}]
	      }]
      }]
    },
    {
    	path: '/Detail/:id',
      	name: 'Detail',
      	component: Detail
    },
    {
    	path: '/Reying/:id',
      	name: 'Reying',
      	component: Reying
    },
    {
    	path: '/jijiangshangying/:id',
      	name: 'jijiangshangying',
      	component: jijiangshangying
    },
    {
    	path: '/paihang/:id',
      	name: 'paihang',
      	component: paihang
    },
    {
    	path: '/piaofang/:id',
      	name: 'piaofang',
      	component: piaofang
    },
    {
      path: '/List/:id',
      name: 'List',
      component: List
    },
    {
      path: '/Result/:id',
      name: 'Result',
      component: Result
    },
    {
      path: '/MY',
      name: 'MY',
      component: MY
    },  
    {
      path: '/login',
      name: 'login',
      component: login
    },
     {
      path: '/register',
      name: 'register',
      component: register
    },
  ]
})
