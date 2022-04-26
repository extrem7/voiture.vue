<script setup lang="ts">
import { ref } from 'vue'
import { VMenuLink } from '~/shared/ui'

defineProps<{
  dropdown?: boolean
}>()
const isDropdown = ref(false)

const links = [
  { title: 'Ремонт авто', id: 1 },
  { name: 'Каталог СТО', link: '#', addition: '(100+)', id: 2 },
  {
    name: 'Автозапчастини на RIA.com',
    link: '#',
    addition: '(1 000 000+)',
    id: 3,
  },
  { title: 'Послуги для авто', id: 4 },
  { name: '16 видів перевірок на AUTO.RIA', link: '#', id: 5 },
  { name: 'Перевірені авто на AUTO.RIA', link: '#', id: 6 },
  { name: 'Підрахунок середньої ціни авто', link: '#', id: 7 },
  { name: 'Митний калькулятор', link: '#', id: 8 },
  { title: 'Пошук автомобіля та автотоварів', id: 9 },
  { name: 'Авто з пробігом від Автодилерів', link: '#', id: 10 },
  { name: 'Авто з-за кордону', link: '#', id: 11 },
  { name: 'Відгуки про авто ', link: '#', addition: '(110 000+)', id: 12 },
  { name: 'Аналітичний центр', link: '#', id: 13 },
  { name: 'Ціни на пальне', link: '#', id: 14 },
]
</script>

<template>
  <div class="inline-block relative">
    <VMenuLink
      class="relative after:absolute after:top-0 after:left-0 after:w-[110%] after:h-[50px]"
      dropdown
      @mouseover="isDropdown = true"
      @mouseleave="isDropdown = false"
    >
      <slot />
      <Transition name="dropdown">
        <div
          v-show="isDropdown"
          class="absolute top-12 py-2 px-4 w-[320px] bg-[#fff] border-[1px] border-dark/30"
        >
          <div
            v-for="({ title, name, link, addition, id }, i) in links"
            :key="id"
            class="h-[24px]"
          >
            <p
              v-if="title"
              :class="[i === 0 ? '' : 'mt-2']"
              class="text-[15px] text-[#818181] cursor-default"
            >
              {{ title }}
            </p>
            <a
              v-if="name"
              class="text-sm text-[#256799] hover:underline"
              :href="link"
              >{{ name }} <span class="text-gray">{{ addition }}</span></a
            >
          </div>
        </div>
      </Transition>
    </VMenuLink>
  </div>
</template>

<style scoped>
.dropdown-enter-active {
  transition: all 0.3s ease;
}
.dropdown-leave-active {
  transition: all 0.4s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
}
</style>
