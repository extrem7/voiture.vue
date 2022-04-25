<script setup lang="ts">
defineProps({
  src: { type: String, required: true },
  isNew: Boolean,
  isVerifiedCode: Boolean,
  topPosition: { type: Number, default: undefined },
})
</script>

<template>
  <div class="overflow-hidden relative max-w-[220px] max-h-[140px]">
    <img :src="src" />
    <span
      v-if="isNew || isVerifiedCode"
      class="flex absolute top-[10px] items-center px-2 text-xs text-white bg-blue rounded-sm"
    >
      <svg
        v-if="isVerifiedCode"
        class="mr-1"
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 3H2L5 0H11L11.75 0.75L8 4.5L6 2.5L4.5 4L8 7.5L13.25 2.25L14 3H15.5C15.7761 3 16 3.22386 16 3.5C16 3.77614 15.7761 4 15.5 4H15V10C15 10.5523 14.5523 11 14 11H13C12.4477 11 12 10.5523 12 10V9H4V10C4 10.5523 3.55228 11 3 11H2C1.44772 11 1 10.5523 1 10V4H0.5C0.223858 4 0 3.77614 0 3.5C0 3.22386 0.223858 3 0.5 3Z"
          fill="white"
        />
      </svg>
      {{ isVerifiedCode ? 'Перевірений VIN-код' : 'Новий' }}
    </span>
    <span
      v-if="topPosition"
      class="v-vehicle-picture__triangle after:block after:absolute absolute after:top-0 top-[10px] after:right-[-8px] py-[2px] px-2 mt-[23px] text-xs text-white bg-green-light"
    >
      ТОП {{ topPosition }}
    </span>
  </div>
</template>

<style>
.v-vehicle-picture__triangle::after {
  border-style: solid;
  border-width: 10px 0 10px 8px;
  border-color: transparent transparent transparent theme('colors.green-light');
}
</style>
