import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/authentication/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'login', path: '/', component: LoginView },
    {
      path: '/admin-dashboard',
      name: 'admin-dashboard', component: () => import('@/pages/AdminDashboard.vue')
    }
    ,{
      path: '/records-view',
      name: 'records-view', component: () => import('@/pages/RecordsView.vue')
    }
    ,
    {
      path: '/user-dashboard',
      name: 'user-dashboard', component: () => import('@/pages/UserDashboard.vue')
    }
  ],
})

export default router
