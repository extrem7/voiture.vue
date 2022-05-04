<script setup lang="ts">
import { VCategoriesSelect } from '~/entities/filter'
import { VChooseMarks } from '~/shared/ui/VChooseMarks'
</script>

<template>
  <main class="flex flex-col items-center py-24">
    <h1 class="text-5xl">Voiture.Vue</h1>
    <VCategoriesSelect class="mt-10" />
    <span
      class="before:w-[20px] before:h-[20px] font-carLogos before:content-['\e948']"
      >sdqwdwqdw</span
    >
    <VChooseMarks />
  </main>
</template>
