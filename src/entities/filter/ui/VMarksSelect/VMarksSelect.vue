<script setup lang="ts">
import { computed } from 'vue'
import { useMarks } from '~/shared/api'
import { VSelect } from '~/shared/ui/forms/VSelect'

defineEmits<{
  (e: 'update:modelValue', modelValue: number): void
}>()

const props = defineProps<{
  modelValue: number
  id: number
}>()

const { marks } = useMarks(computed(() => props.id))
</script>

<template>
  <VSelect
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', +($event as any))"
  >
    <option v-for="{ name, value } in marks" :key="value" :value="value">
      {{ name }}
    </option>
  </VSelect>
</template>
