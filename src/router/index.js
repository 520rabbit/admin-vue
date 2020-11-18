import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
import Layout from '@/layout/Layout'

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/pages/login/Login'),
    },
    {
      path: '/',
      redirect: '/login',
      component: () => import ('@/pages/login/Login'),
    }
  ]
})

export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/pages/login/Login'),
  },
  {
    path: '/',
    redirect: '/login',
    component: () => import ('@/pages/login/Login'),
  },
  // {
  //   path: '/home',
  //   component: Layout,
  //   redirect: '/home',
  //   children: [{
  //     path: 'home',
  //     name: 'home',
  //     component: () => import('@/views/home/Home.vue'),
  //   }]
  // },
]

// let router = constantRoutes
// // const router = createRouter()
// // export function resetRouter() {
// //   const newRouter = createRouter()
// //   router.matcher = newRouter.matcher // reset router
// // }

// export default new Router(router)
