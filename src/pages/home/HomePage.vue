<script setup lang="ts">
import { VCategoriesSelect } from '~/entities/filter'
import { VChooseMarks } from '~/shared/ui/VChooseMarks'
</script>

<template>
  <main class="flex flex-col items-center py-24">
    <h1 class="text-5xl">Voiture.Vue</h1>
    <VCategoriesSelect class="mt-10" />

    <VChooseMarks class="font-carLogos" />
  </main>
</template>
