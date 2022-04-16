import { createFetch } from '@vueuse/core'

import { API_KEY, LANG_ID } from '~/shared/config'

export const useAutoRia = createFetch({
  baseUrl: 'https://developers.ria.com/auto',
  options: {
    async beforeFetch({ url }) {
      const newUrl = new URL(url)

      newUrl.searchParams.append('api_key', API_KEY)
      newUrl.searchParams.append('langId', LANG_ID)

      return { url: newUrl.toString() }
    },
  },
})
