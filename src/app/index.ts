import { createApp } from 'vue'
import { applyProviders, router } from './providers'

import App from './App.vue'

export const app = createApp(App)

applyProviders(app)

app.use(router)
