import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createPinia } from 'pinia'
import { scenario } from './scenario/scenario'
import { RequestMaker } from './services/RequestMaker'
import { CentrifugoClientKey, RequestMakerKey } from './utils/injections'
import { CentrifugoClient } from './services/CentrifugoClient'

const apiUrl = `${location.protocol}//${location.hostname}:${import.meta.env.VITE_SERVER_PORT}/api/`
const centrifugoUrl = `ws://localhost:${import.meta.env.VITE_CETRIFUGO_PORT}/connection/websocket`

const requestMaker = new RequestMaker(apiUrl)
const centrifugoClient = new CentrifugoClient(centrifugoUrl)

const app = createApp(App)
app.provide('$scenario', scenario)
app.provide(RequestMakerKey, requestMaker)
app.provide(CentrifugoClientKey, centrifugoClient)
app.use(createPinia())
app.use(router)
app.mount('#app')
