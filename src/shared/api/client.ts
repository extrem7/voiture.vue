import { createFetch } from '@vueuse/core'

import { API_KEY, IS_DEV, LANG_ID } from '~/shared/config'

export const useAutoRia = createFetch({
  baseUrl: IS_DEV
    ? 'http://localhost:5000/api'
    : 'https://developers.ria.com/auto',
  options: {
    async beforeFetch({ url }) {
      const newUrl = new URL(url)

      newUrl.searchParams.append('langId', LANG_ID)
      if (!IS_DEV) newUrl.searchParams.append('api_key', API_KEY)

      return { url: newUrl.toString() }
    },
  },
})
