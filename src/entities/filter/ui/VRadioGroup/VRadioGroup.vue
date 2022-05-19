<script setup lang="ts">
import { ref } from 'vue'

const carConditions = [
  { value: 'all', name: 'Всі' },
  { value: 'used', name: 'Вживані' },
  { value: 'new', name: 'Нові' },
  { value: 'import', name: 'Під пригон' },
]

const condition = ref('all')
</script>

<template>
  <fieldset id="carConditions">
    <span v-for="{ name, value } in carConditions" :key="value" class="group">
      <input
        :id="value"
        v-model="condition"
        :value="value"
        type="radio"
        name="carConditions"
        class="peer hidden"
      />
      <label
        :for="value"
        class="p-2 before:mr-2 text-sm before:text-red text-white peer-checked:text-dark before:content-none peer-checked:before:content-['✔'] bg-red peer-checked:bg-white group-last:rounded-r-md group-first:rounded-l-md border border-red duration-100 cursor-pointer"
      >
        {{ name }}
      </label>
    </span>
  </fieldset>
</template>
