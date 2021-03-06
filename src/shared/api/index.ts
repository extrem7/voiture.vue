import { type Ref, computed } from 'vue'
import type { UseFetchOptions } from '@vueuse/core'

import { useAutoRia } from './client'
import { api } from './routes'

type CategoryAPI = { name: string; value: number }
type ModelApi = { name: string; value: number }
type CategoriesResponse = CategoryAPI[]
type ModelGroupsResponse = ModelApi[]
type ModelResponse = ModelApi[]

export function useCategories(useFetchOptions: UseFetchOptions = {}) {
  const { data, ...rest } = useAutoRia<CategoriesResponse>(
    api.categories(),
    useFetchOptions
  ).json()

  const categories = computed(() => data.value ?? [])

  return { categories, ...rest }
}

export function useMarks(
  id: Ref<number>,
  useFetchOptions: UseFetchOptions = {}
) {
  const { data, ...rest } = useAutoRia<CategoriesResponse>(
    computed(() => api.marks(id.value)),
    { ...useFetchOptions, refetch: true }
  ).json()

  const marks = computed(() => data.value ?? [])

  return { marks, ...rest }
}

export function useModels(
  id: Ref<number>,
  idMarks: Ref<number>,
  useFetchOptions: UseFetchOptions = {}
) {
  const { data, ...rest } = useAutoRia<ModelResponse>(
    computed(() => api.models(id.value, idMarks.value)),
    { ...useFetchOptions, refetch: true }
  ).json()

  const models = computed(() => data.value ?? [])

  return { models, ...rest }
}

export function useModelGroups(
  id: Ref<number>,
  idMarks: Ref<number>,
  useFetchOptions: UseFetchOptions = {}
) {
  const { data, ...rest } = useAutoRia<ModelGroupsResponse>(
    computed(() => api.modelGroups(id.value, idMarks.value)),
    { ...useFetchOptions, refetch: true }
  ).json()

  const groups = computed(() => data.value ?? [])

  return { groups, ...rest }
}
