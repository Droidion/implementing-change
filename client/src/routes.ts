import AuthLayout from "./components/layouts/AuthLayout.vue";
import MainLayout from "./components/layouts/MainLayout.vue";

import LoginPage from "./views/LoginPage.vue";
import PlannerPage from "./views/PlannerPage.vue";
import {RouteRecordRaw} from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: '/login', component: AuthLayout, children: [{
            path: '',
            component: LoginPage
        }]
    },
    {
        path: '/', component: MainLayout, children: [
            {
                path: 'planner',
                component: PlannerPage
            },
            {path: '/', redirect: '/auth/login'}
        ]
    },
]