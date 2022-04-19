<script setup lang="ts">
import { ref } from 'vue'
import carSvg from '~/shared/assets/car.svg'

const isChecked = ref(false)
</script>
<template>
  <div class="flex cursor-pointer select-none" @click="isChecked = !isChecked">
    <div class="flex px-2 mr-1 bg-[#246799]">
      <img class="mr-2" :src="carSvg" alt="carSvg" />
      <span class="font-medium text-[#fff]">Перевірений VIN</span>
    </div>
    <div
      :class="{
        'before:absolute  before:top-1/4 before:left-1/3  before:w-[6px]  before:h-[10px] before:text-[#db5c4c]  before:border-t-2 before:border-l-2 before:rotate-[-140deg]':
          isChecked,
      }"
      class="relative w-[24px] h-[24px] bg-[#fff] rounded-sm border-0"
    />
  </div>
</template>

<style scoped></style>
