<script setup lang="ts">
import { ref } from 'vue'
import {
  VCategoriesSelect,
  VMarksSelect,
  VModelsSelect,
} from '~/entities/filter'

const categoryId = ref(1)
const markId = ref(1)
const modelId = ref(1)
</script>

<template>
  <main class="flex flex-col items-center py-24">
    <h1 class="text-5xl">Voiture.Vue</h1>
    <VCategoriesSelect v-model="categoryId" class="mt-10" />
    <VMarksSelect :id="categoryId" v-model="markId" class="mt-10" />
    <VModelsSelect :id="categoryId" v-model="modelId" :mark-id="markId" />
  </main>
</template>
