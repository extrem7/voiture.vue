<script setup lang="ts">
import { useCategories } from '~/shared/api'
import { VSelect } from '~/shared/ui/forms/VSelect'

const { categories } = useCategories()

defineEmits<{
  (e: 'update:modelValue', modelValue: number): void
}>()

defineProps<{
  modelValue: number
}>()
</script>

<template>
  <VSelect
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', +($event as any))"
  >
    <option v-for="{ name, value } in categories" :key="value" :value="value">
      {{ name }}
    </option>
  </VSelect>
</template>
