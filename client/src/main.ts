import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { scenario } from './scenario/scenario'
import { RequestMaker } from './services/RequestMaker'
import { CentrifugoClientKey, RequestMakerKey } from './utils/injections'
import { CentrifugoClient } from './services/CentrifugoClient'

const requestMaker = new RequestMaker(import.meta.env.VITE_SERVER_URL)
const centrifugoClient = new CentrifugoClient(import.meta.env.VITE_CENTRIFUGO_URL)

const app = createApp(App)
app.provide('$scenario', scenario)
app.provide(RequestMakerKey, requestMaker)
app.provide(CentrifugoClientKey, centrifugoClient)
app.use(createPinia())
app.use(router)
app.mount('#app')
