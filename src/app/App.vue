<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <slot>
    <RouterView />
  </slot>
</template>

<style>
@import './index.css';
</style>
