import { fileURLToPath, URL } from 'url'

import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export const config: UserConfig = {
  plugins: [vue(), vueJsx()],
}

export default defineConfig(() => {
  return {
    ...config,
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
