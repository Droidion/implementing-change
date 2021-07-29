import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import { createPinia } from 'pinia'

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(createPinia()).use(router).mount('#app')
