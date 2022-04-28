<script setup lang="ts">
import { computed, ref } from 'vue'
import { useModelGroups } from '~/shared/api'

const isFull = ref(false)
const id = ref(1)
const idMarks = ref(5)
const { groups } = useModelGroups(id, idMarks)
const fullGroups = computed(() => groups.value.flat())
const someGroups = computed(() => groups.value.flat().slice(0, 10))
</script>

<template>
  <div class="w-[300px]">
    <!-- TODO: add dynamic text -->
    <h2 class="mb-2 text-xl">Виберіть модель Мерседес</h2>
    <!-- add dynamic text -->
    <div class="grid grid-cols-2 gap-2 mb-2">
      <a
        v-for="{ name, value } in isFull ? fullGroups : someGroups"
        :key="value"
        class="text-[#256799] border-[1px] border-gray hover:border-[#256799] duration-150 cursor-pointer"
      >
        <p
          class="overflow-x-hidden mx-auto w-10/12 text-center whitespace-nowrap hover:border-[#256799] duration-100"
        >
          {{ name }}
        </p>
      </a>
    </div>
    <span
      v-if="fullGroups.length > 10"
      :class="[
        isFull ? 'before:rotate-180 before:-top-[2px] before:left-[113%]' : '',
      ]"
      class="relative before:absolute before:top-[5px] before:left-[105%] text-[#256799] before:border-8 before:border-x-blue/0 before:border-b-blue/0 border-dotted hover:border-solid duration-200 cursor-pointer"
      @click="isFull = !isFull"
    >
      <!-- TODO: add dynamic text -->
      {{ isFull ? 'Сховати' : `ще ${fullGroups.length - 10} моделей mercedes` }}
      <!-- add dynamic text -->
    </span>
  </div>
</template>
