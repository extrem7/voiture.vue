<script setup lang="ts">
import tree from '~/shared/assets/elki.png'
import plus from '~/shared/assets/plus.svg'
import { VMenuDropdown, VMenuLink } from '~/shared/ui'
</script>
<template>
  <div class="flex justify-between w-[960px]">
    <div class="flex items-center">
      <a href="#">
        <img class="w-[160px]" :src="tree" alt="" />
      </a>
      <div class="relative">
        <VMenuLink class="mr-2 ml-6">Вживані авто</VMenuLink>
        <VMenuLink class="mx-2">Нові авто</VMenuLink>
        <VMenuLink class="mx-2">Новини</VMenuLink>
        <VMenuDropdown class="mx-2">Все для авто</VMenuDropdown>
      </div>
    </div>
    <div
      class="flex self-center py-3 px-10 text-[#fff] bg-[#79be00] hover:bg-[#92cf28] rounded-lg duration-200 cursor-pointer"
    >
      <img class="mr-2 w-[18px]" :src="plus" alt="" />
      <span class="text-xl">Продати авто</span>
    </div>
  </div>
</template>
