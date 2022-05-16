<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBody, useCategories, useMarks, usePopular } from '~/shared/api'
import { logo } from './lib'

const idMarks = ref(1)
const idPopular = ref(1)
const { marks } = useMarks(computed(() => idMarks.value))
const { body } = useBody(computed(() => idMarks.value))
const { categories } = useCategories()
const { popular } = usePopular(idPopular)

const newMarks = computed(() =>
  marks.value
    .filter(({ value }) => popular.value?.marka.includes(value))
    .slice(0, 15)
)
const newBody = computed(() => body.value.slice(0, 31))
const newCategories = computed(() => categories.value.slice(0, 8))
</script>
<template>
  <div class="w-[960px]">
    <div class="flex justify-center mb-2">
      <div
        v-for="{ name, value } in newCategories"
        :key="value"
        class="relative self-end hover:text-[#db5c4c] align-bottom cursor-pointer"
        @click="idMarks = value"
      >
        <span
          :class="[
            value === idMarks
              ? 'text-[#db5c4c] before:bg-[#fff] before:border-t-2 before:bg-i  before:border-r-2 before:p-[6px] before:top-[30px] before:left-[41%] before:absolute before:rotate-[135deg]'
              : '',
          ]"
          class="mx-4 text-lg text-ellipsis border-b-[1.5px] border-dotted cursor-pointer"
          >{{ name }}</span
        >
      </div>
    </div>
    <hr class="text-gray" />
    <div
      :class="[idMarks === 1 ? 'pb-6' : 'py-6']"
      class="grid grid-cols-8 gap-x-6"
    >
      <div
        v-for="({ name, value }, i) in idMarks === 1 ? newMarks : newBody"
        :key="value"
        :class="[idMarks === 1 ? 'col-span-1 items-center' : 'col-span-2']"
        class="flex overflow-hidden flex-col font-carLogos text-[#256799] hover:text-[#db5c4c] whitespace-nowrap cursor-pointer"
      >
        <!-- eslint-disable vue/no-v-html -->
        <span
          v-if="idMarks === 1"
          class="flex justify-center items-end mt-4 w-[80px] h-[50px] align-middle"
          v-html="logo[i + 1]"
        />
        <!--eslint-enable-->
        <span
          :class="[idMarks === 1 ? 'mt-3' : 'hover:underline']"
          class="text-[#256799]"
        >
          {{ name }}
        </span>
      </div>
      <a
        class="self-end hover:text-[#db5c4c] cursor-pointer"
        :class="[idMarks === 1 ? 'text-center ' : '']"
      >
        <div :class="[idMarks === 1 ? 'mb-5 text-2xl' : '']">
          {{ idMarks === 1 ? '❱' : '' }}
        </div>
        <a
          v-if="
            newBody.length > 30 || (newMarks.length === 15 && idMarks === 1)
          "
          href="#"
          :class="[idMarks === 1 ? '' : 'hover:underline']"
          class="mb-3 text-[#1a3b54]"
        >
          {{ idMarks === 1 ? 'всі марки' : 'дивитись всі' }}
        </a>
      </a>
    </div>
    <hr class="text-gray" />
  </div>
</template>
