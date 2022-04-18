<script setup lang="ts"></script>
<template>
  <select class="py-1 pl-2 rounded-[3px] border-none cursor-pointer">
    <slot />
  </select>
</template>

<style scoped>
select {
  background: #fff
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAFAQMAAACdEUUJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////21xMvXoWTAAAAAF0Uk5TAEDm2GYAAAAZSURBVAjXY/jfwMBQz8DAYAfEMkDMwcAAACb4AmFjj8TfAAAAAElFTkSuQmCC)
    100% 50% no-repeat;
}
</style>
