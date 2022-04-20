<script setup lang="ts">
defineProps<{
  dropdown?: boolean
}>()
</script>

<template>
  <a
    :class="{
      '  before:border-x-8 before:border-x-blue/0 before:border-t-[6px] before:absolute before:top-2 before:-right-6 ':
        dropdown,
    }"
    class="relative text-lg hover:text-[#db5c4c] border-b-[1px] duration-100 ease-in-out"
    href="#"
  >
    <slot />
  </a>
</template>
