<script setup lang="ts">
import { ref } from 'vue';

const carConditions = [
  { value: 'all', name: 'Всі' },
  { value: 'used', name: 'Вживані' },
  { value: 'new', name: 'Нові' },
  { value: 'import', name: 'Під пригон' },
];

const condition = ref('all');
</script>

<template>
  <fieldset id="carConditions">
    <span v-for="{ name, value } in carConditions" :key="value" class="group">
      <input
        :id="value"
        :value="value"
        v-model="condition"
        type="radio"
        name="carConditions"
        class="peer hidden"
      />
      <label
        :for="value"
        class="peer-checked:bg-white peer-checked:text-dark peer-checked:before:content-['✔'] before:content-none before:mr-2 before:text-red text-sm bg-red text-white p-2 border border-red cursor-pointer duration-100 group-first:rounded-l-md group-last:rounded-r-md"
      >
        {{ name }}
      </label>
    </span>
  </fieldset>
</template>
