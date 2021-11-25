import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import About from '../views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'tre1' }
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta: { title: 'tre2' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'tre3' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
})

export default router