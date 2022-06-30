import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JoinView from '@/views/JoinView.vue'
import UserMakingView from '@/views/UserMakingView.vue'
import UserListView from '@/views/UserListView.vue'
import LoadView from '@/views/LoadView.vue'
import PDFView from '@/views/PDFView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/join',
    name: 'join',
    component: JoinView
  },
  {
    path: '/making',
    name: 'making',
    component: UserMakingView
  },
  {
    path: '/savelist',
    name: 'savelist',
    component: UserListView
  },
  {
    path: '/loadview',
    name: 'loadview',
    component: LoadView
  },
  {
    path: '/result',
    name: 'result',
    component: PDFView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
