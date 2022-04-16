import { computed } from 'vue'
import type { UseFetchOptions } from '@vueuse/core'

import { useAutoRia } from './client'
import { api } from './routes'

type CategoryAPI = { name: string; value: number }
type CategoriesResponse = CategoryAPI[]

export function useCategories(useFetchOptions: UseFetchOptions = {}) {
  const { data, ...rest } = useAutoRia<CategoriesResponse>(
    api.categories(),
    useFetchOptions
  ).json()

  const categories = computed(() => data.value ?? [])

  return { categories, ...rest }
}
