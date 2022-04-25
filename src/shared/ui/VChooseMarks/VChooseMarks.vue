<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBody, useCategories, useMarks } from '~/shared/api'

const idMarks = ref(1)

const { marks } = useMarks(computed(() => idMarks.value))
const { body } = useBody(computed(() => idMarks.value))
const { categories } = useCategories()

const newMarks = computed(() => marks.value.slice(0, 15))
const newBody = computed(() => body.value.slice(0, 31))
const newCategories = computed(() => categories.value.slice(0, 8))
</script>
<template>
  <div class="w-[960px]">
    <div class="flex justify-center mb-2">
      <div
        v-for="{ name, value } in newCategories"
        :key="value"
        class="relative"
      >
        <span
          :class="[
            value === idMarks
              ? 'text-[#db5c4c] before:bg-[#F8F8F8] before:border-t-2 before:bg-i  before:border-r-2 before:p-[6px] before:top-[26px] before:left-[41%] before:absolute before:rotate-[135deg]'
              : '',
          ]"
          class="mx-3 text-ellipsis border-b-[1.5px] border-dotted cursor-pointer"
          @click="idMarks = value"
          >{{ name }}</span
        >
      </div>
    </div>
    <hr class="text-gray" />
    <div class="grid grid-cols-8 gap-x-6 py-6">
      <a
        v-for="{ name, value } in idMarks <= 1 ? newMarks : newBody"
        :key="value"
        href="#"
        class="overflow-hidden text-[#256799] hover:underline whitespace-nowrap"
        :class="[idMarks === 1 ? 'col-span-1' : 'col-span-2 ']"
      >
        {{ name }}
      </a>
      <a
        v-if="newBody.length > 30 || (newMarks.length === 15 && idMarks === 1)"
        href="#"
        class="text-[#256799] hover:underline"
      >
        Дивитись всі
      </a>
    </div>
    <hr class="text-gray" />
  </div>
</template>
