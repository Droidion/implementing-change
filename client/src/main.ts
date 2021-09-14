import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { scenario } from './scenario/scenario'
import { RequestMaker } from './services/RequestMaker'
import { RequestMakerKey } from './utils/injections'

const apiUrl = `${location.protocol}//${location.hostname}:${import.meta.env.VITE_SERVER_PORT}/api/`

export const requestMaker = new RequestMaker(apiUrl)

const app = createApp(App)
app.provide('$scenario', scenario)
app.provide(RequestMakerKey, requestMaker)
app.use(createPinia())
app.use(router)
app.mount('#app')
