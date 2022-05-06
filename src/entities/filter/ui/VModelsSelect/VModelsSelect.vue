<script setup lang="ts">
import { computed } from 'vue'
import { VSelect } from '~/shared/ui'
import { useModels } from '~/shared/api'

defineEmits<{
  (e: 'update:modelValue', modelValue: number): void
}>()

const props = defineProps<{
  modelValue: number
  id: number
  markId: number
}>()

const { models } = useModels(
  computed(() => props.id),
  computed(() => props.markId)
)
</script>

<template>
  <VSelect
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', +$event)"
  >
    <option v-for="{ name, value } in models" :key="value" :value="value">
      {{ name }}
    </option>
  </VSelect>
</template>
