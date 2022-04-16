<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="container px-2 mx-auto">
    <slot>
      <RouterView />
    </slot>
  </main>
</template>

<style>
@import './index.css';
</style>
