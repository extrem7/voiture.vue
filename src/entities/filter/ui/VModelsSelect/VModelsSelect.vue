<script setup lang="ts">
import { ref } from 'vue'
import { VSelect } from '~/shared/ui'
import { useModels } from '~/shared/api'

const id = ref(1)
const idMarks = ref(9)

const { models } = useModels(id, idMarks)
</script>

<template>
  <VSelect>
    <option v-for="{ name, value } in models" :key="value" :value="value">
      {{ name }}
    </option>
  </VSelect>
</template>
