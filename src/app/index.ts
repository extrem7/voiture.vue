import { createApp } from 'vue'
import { applyProviders, router } from './providers'

import App from './App.vue'

import './fonts/index.css'

export { App }

export const app = createApp(App)

applyProviders(app)

app.use(router)
