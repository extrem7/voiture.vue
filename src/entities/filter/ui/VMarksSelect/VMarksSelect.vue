<script setup lang="ts">
import { computed } from 'vue'
import { useMarks } from '~/shared/api'
import { VSelect } from '~/shared/ui/forms/VSelect'

const props = defineProps<{
  id: number
}>()

const { marks } = useMarks(computed(() => props.id))
</script>

<template>
  <VSelect>
    <option v-for="{ name, value } in marks" :key="value" :value="value">
      {{ name }}
    </option>
  </VSelect>
</template>
