import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import About from '../views/About.vue'
import Table from '../views/Table.vue'
import TableFormRout from '../components/TableFormRout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: 'home' }
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta: { title: 'main' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'about' }
  },
  {
    path: '/table',
    name: 'Table',
    component: Table,
    meta: { title: 'table' }
  },
  {
    path: '/tableform',
    name: 'TableFormRout',
    component: TableFormRout,
    meta: { title: 'tableform' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next();
})

export default router