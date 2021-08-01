import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { scenario } from './scenario/scenario'

const app = createApp(App)
app.config.globalProperties.$scenario = scenario
app.use(createPinia())
app.use(router)
app.mount('#app')
