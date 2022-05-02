<script setup lang="ts">
defineProps({
  isActive: Boolean,
  isDisabled: Boolean,
})
</script>

<template>
  <a
    :class="{
      'text-blue border-blue': isActive,
      'hover:text-blue hover:border-blue': !isDisabled,
    }"
    class="py-[4px] px-[8px] min-w-[40px] text-lg text-center text-dark rounded-lg border border-gray"
  >
    <slot />
  </a>
</template>
