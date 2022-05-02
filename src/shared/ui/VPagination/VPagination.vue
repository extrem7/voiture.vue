<script setup lang="ts">
import { VPaginationButton } from '../VPaginationButton'
</script>
<template>
  <div class="flex justify-between items-center w-[700px]">
    <VPaginationButton is-disabled class="text-gray">←Назад</VPaginationButton>
    <div class="flex">
      <VPaginationButton is-active>1</VPaginationButton>
      <VPaginationButton v-for="i in 5" :key="i" class="ml-[5px]" href="#">
        {{ i + 1 }}
      </VPaginationButton>
      <a class="pl-[5px] mt-[6px] text-lg">...</a>
      <VPaginationButton class="ml-[5px]"> 5 762 </VPaginationButton>
    </div>

    <VPaginationButton is-active>Вперед →</VPaginationButton>
  </div>
</template>
