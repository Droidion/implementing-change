import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { scenario } from './scenario/scenario'
import { RequestMaker } from './services/RequestMaker'

const apiUrl = `${location.protocol}//${location.hostname}:${import.meta.env.VITE_SERVER_PORT}/api/`

const app = createApp(App)
app.config.globalProperties.$scenario = scenario
app.config.globalProperties.$requestMaker = new RequestMaker(apiUrl)
app.use(createPinia())
app.use(router)
app.mount('#app')
