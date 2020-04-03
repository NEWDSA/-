import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film'
import Center from '@/views/Center'
import Cinema from '@/views/Cinema'
import Comingsoon from '@/views/Film/Comingsoon'
import Nowplaying from '@/views/Film/Nowplaying'
import Detail from '@/views/Detail'
import Login from '@/views/Login'
Vue.use(VueRouter)
// const auth = {
//   isLogin () {
//     return false
//   }
// }
const routes = [{
  path: '/film',
  component: Film,
  children: [{
    path: 'nowplaying',
    component: Nowplaying
  },
  {
    path: 'comingsoon',
    component: Comingsoon
  },
  {
    path: '',
    redirect: 'nowplaying'
  }
  ]
},
{
  path: '/cinema',
  component: Cinema
},
{
  path: '/detail',
  component: Detail,
  props: true,
  children: [{
    path: '/detail/:id', // 动态路由
    name: 'kerwindetail',
    component: Detail

  }]
},
{
  path: '/center',
  component: Center
},
{
  path: '/login',
  component: Login
},
{
  path: '*',
  redirect: '/film'
}
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // ...
//   if (to.path === '/center') {
//     console.log('pancha')
//     if (auth.isLogin()) {
//       next()
//     } else {
//       next('/login')
//     }
//   } else {
//     next() // fang xing
//   }
// })

export default router
