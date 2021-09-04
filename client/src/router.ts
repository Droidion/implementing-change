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
      {
        path: 'new',
        component: NewEventPage,
      },
      {
        path: 'dynamics',
        component: DynamicsPage,
      },
      {
        path: 'help/characters',
        component: HelpCharactersPage,
      },
      {
        path: 'help/company',
        component: HelpCompanyPage,
      },
      {
        path: 'help/structure',
        component: HelpStructurePage,
      },
      {
        path: 'history',
        component: HistoryPage,
      },
      {
        path: 'modeling',
        component: ModelingPage,
      },
      { path: '', redirect: '/login' },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
