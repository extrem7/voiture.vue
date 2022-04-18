<script setup lang="ts">
import { ref } from 'vue'
import { VCategoriesSelect, VMarksSelect } from '~/entities/filter'

const categoryId = ref(1)
</script>

<template>
  <main class="flex flex-col items-center py-24">
    <h1 class="text-5xl">Voiture.Vue</h1>
    <VCategoriesSelect v-model="categoryId" class="mt-10" />
    <VMarksSelect :id="categoryId" class="mt-10" />
  </main>
</template>
