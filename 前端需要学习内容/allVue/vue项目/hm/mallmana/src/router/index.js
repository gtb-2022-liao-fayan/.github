import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
const Login = () => import( "components/common/Login")
const Home = () => import("views/home/Home")
const Welcome = () => import("views/home/Welcome")
const Users = () => import("views/users/Users")
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: Welcome
      },
      {
        path: '/users',
        component: Users
      }
    ]
  }
]
const router = new  VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to,from,next) => {
  if(to.path === '/login'){
    return next();
  }
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr){
    return  next('/login')
  }
  next();
})
export default router