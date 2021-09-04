import AuthLayout from './components/layouts/AuthLayout.vue'
import MainLayout from './components/layouts/MainLayout.vue'

import LoginPage from './views/LoginPage.vue'
import PlannerPage from './views/PlannerPage.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        path: '',
        component: LoginPage,
      },
    ],
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'planner',
        component: PlannerPage,
      },
      { path: '', redirect: '/login' },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
