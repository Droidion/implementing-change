import AuthLayout from './components/layouts/AuthLayout.vue'
import MainLayout from './components/layouts/MainLayout.vue'
import AdminLayout from './components/layouts/AdminLayout.vue'

import UserLoginPage from './views/auth/UserLoginPage.vue'
import AdminLoginPage from './views/auth/AdminLoginPage.vue'
import PlannerPage from './views/player/PlannerPage.vue'
import NewEventPage from './views/player/NewEventPage.vue'
import DynamicsPage from './views/player/DynamicsPage.vue'
import HelpCharactersPage from './views/player/HelpCharactersPage.vue'
import HelpCompanyPage from './views/player/HelpCompanyPage.vue'
import HelpStructurePage from './views/player/HelpStructurePage.vue'
import HistoryPage from './views/player/HistoryPage.vue'
import ModelingPage from './views/player/ModelingPage.vue'
import ManageGamePage from './views/admin/ManageGamePage.vue'
import ChartApprovalPage from './views/admin/ChartApprovalPage.vue'
import ChartDaysPage from './views/admin/ChartDaysPage.vue'
import ChartPeriodsPage from './views/admin/ChartPeriodsPage.vue'
import ResultOutputPage from './views/admin/ResultOutputPage.vue'
import ResultsTablePage from './views/admin/ResultsTablePage.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { useProgressStore } from './stores/progressStore'

enum UiCategory {
  User,
  Admin,
}

export enum RouteNames {
  UserLogin = 'UserLogin',
  AdminLogin = 'AdminLogin',
  PlayerPlanner = 'PlayerPlanner',
  PlayerNewEvent = 'PlayerNewEvent',
  PlayerDynamics = 'PlayerDynamics',
  PlayerCharacters = 'PlayerCharacters',
  PlayerCompany = 'PlayerCompany',
  PlayerStructure = 'PlayerStructure',
  PlayerHistory = 'PlayerHistory',
  PlayerModeling = 'PlayerModeling',
  AdminManage = 'AdminManage',
  AdminApproval = 'AdminApproval',
  AdminDays = 'AdminDays',
  AdminPeriods = 'AdminPeriods',
  AdminTable = 'AdminTable',
  AdminOutput = 'AdminOutput',
}

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: AuthLayout,
    children: [
      {
        name: RouteNames.UserLogin,
        path: 'user',
        component: UserLoginPage,
      },
      {
        name: RouteNames.AdminLogin,
        path: 'admin',
        component: AdminLoginPage,
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    redirect: '/admin/manage',
    children: [
      {
        name: RouteNames.AdminManage,
        path: 'manage',
        component: ManageGamePage,
        meta: { requiresAuth: true, uiCategory: UiCategory.Admin },
      },
      {
        name: RouteNames.AdminApproval,
        path: 'chart/approval',
        component: ChartApprovalPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.Admin },
      },
      {
        name: RouteNames.AdminDays,
        path: 'chart/days',
        component: ChartDaysPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.Admin },
      },
      {
        name: RouteNames.AdminPeriods,
        path: 'chart/periods',
        component: ChartPeriodsPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.Admin },
      },
      {
        name: RouteNames.AdminTable,
        path: 'results/table',
        component: ResultsTablePage,
        meta: { requiresAuth: true, uiCategory: UiCategory.Admin },
      },
      {
        name: RouteNames.AdminOutput,
        path: 'results/output',
        component: ResultOutputPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.Admin },
      },
    ],
  },
  {
    path: '/',
    component: MainLayout,
    redirect: '/planner',
    children: [
      {
        name: RouteNames.PlayerPlanner,
        path: 'planner',
        component: PlannerPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.User },
      },
      {
        name: RouteNames.PlayerNewEvent,
        path: 'new',
        component: NewEventPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.User },
      },
      {
        name: RouteNames.PlayerDynamics,
        path: 'dynamics',
        component: DynamicsPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.User },
      },
      {
        name: RouteNames.PlayerCharacters,
        path: 'help/characters',
        component: HelpCharactersPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.User },
      },
      {
        name: RouteNames.PlayerCompany,
        path: 'help/company',
        component: HelpCompanyPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.User },
      },
      {
        name: RouteNames.PlayerStructure,
        path: 'help/structure',
        component: HelpStructurePage,
        meta: { requiresAuth: true, uiCategory: UiCategory.User },
      },
      {
        name: RouteNames.PlayerHistory,
        path: 'history',
        component: HistoryPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.User },
      },
      {
        name: RouteNames.PlayerModeling,
        path: 'modeling',
        component: ModelingPage,
        meta: { requiresAuth: true, uiCategory: UiCategory.User },
      },
      { path: '', redirect: { name: RouteNames.UserLogin } },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const progressStore = useProgressStore()
  if (to.meta.requiresAuth && !progressStore.authenticated) {
    if (to.meta.uiCategort === UiCategory.Admin) {
      return '/login/admin'
    } else {
      return '/login/user'
    }
  } else {
    return true
  }
})
