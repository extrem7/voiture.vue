import type { App } from 'vue'
import { createPinia } from 'pinia'

export { router } from './router'

export function applyProviders(app: App) {
  app.use(createPinia())
}
