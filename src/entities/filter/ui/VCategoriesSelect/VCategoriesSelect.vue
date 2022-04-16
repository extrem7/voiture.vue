<script setup lang="ts">
import { useCategories } from '~/shared/api'

const { categories } = useCategories()
</script>

<template>
  <select>
    <option v-for="{ name, value } in categories" :key="value" :value="value">
      {{ name }}
    </option>
  </select>
</template>
