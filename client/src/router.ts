import AuthLayout from './components/layouts/AuthLayout.vue'
import MainLayout from './components/layouts/MainLayout.vue'

import LoginPage from './views/LoginPage.vue'
import PlannerPage from './views/PlannerPage.vue'
import NewEventPage from './views/NewEventPage.vue'
import DynamicsPage from './views/DynamicsPage.vue'
import HelpCharactersPage from './views/HelpCharactersPage.vue'
import HelpCompanyPage from './views/HelpCompanyPage.vue'
import HelpStructurePage from './views/HelpStructurePage.vue'
import HistoryPage from './views/HistoryPage.vue'
import ModelingPage from './views/ModelingPage.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useProgressStore } from './stores/progressStore'

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
        meta: { requiresAuth: true },
      },
      {
        path: 'new',
        component: NewEventPage,
        meta: { requiresAuth: true },
      },
      {
        path: 'dynamics',
        component: DynamicsPage,
        meta: { requiresAuth: true },
      },
      {
        path: 'help/characters',
        component: HelpCharactersPage,
        meta: { requiresAuth: true },
      },
      {
        path: 'help/company',
        component: HelpCompanyPage,
        meta: { requiresAuth: true },
      },
      {
        path: 'help/structure',
        component: HelpStructurePage,
        meta: { requiresAuth: true },
      },
      {
        path: 'history',
        component: HistoryPage,
        meta: { requiresAuth: true },
      },
      {
        path: 'modeling',
        component: ModelingPage,
        meta: { requiresAuth: true },
      },
      { path: '', redirect: '/login' },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from) => {
  const progressStore = useProgressStore()
  if (to.meta.requiresAuth && !progressStore.teamNumber) {
    return '/login'
  } else {
    return true
  }
})
