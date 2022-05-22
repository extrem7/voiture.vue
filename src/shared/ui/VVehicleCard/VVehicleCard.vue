<script setup lang="ts">
import { differenceInHours, format, isSameDay, subDays } from 'date-fns'

import { VMileage } from '~/shared/ui/VIcon'
import VLocation from '../VIcon/VLocation.vue'
import VFuel from '../VIcon/VFuel.vue'
import VGearbox from '../VIcon/VGearbox.vue'
import VCar from '../VIcon/VCar.vue'
import VTime from '../VIcon/VTime.vue'
import VCompare from '../VIcon/VCompare.vue'
import VFavorite from '../VIcon/VFavorite.vue'

defineProps({
  isNewUser: Boolean,
  name: { type: String, required: true },
  usd: { type: Number, required: true },
  uah: { type: Number, required: true },
  mileage: { type: Number, required: true },
  location: { type: String, required: true },
  fuel: { type: Number, required: true },
  transmission: { type: String, required: true },
  text: { type: String, default: undefined },
  isVerifiedCode: Boolean,
  date: { type: Date, required: true },
  number: Boolean,
})
</script>

<template>
  <span>
    <a class="text-[18px] font-normal text-blue"> {{ name }} $ </a>
  </span>
  <div>
    <div class="flex items-center mt-[7px]">
      <span class="mr-2 text-[22px] font-bold leading-none text-green">
        {{ usd }} $
      </span>
      <div class="w-1 h-1 bg-gray rounded-full" />
      <span class="ml-2 text-[15px]">{{ uah }}грн</span>
    </div>
  </div>
  <div class="mt-[5px] w-[290px] text-[15px]">
    <span class="flex justify-between">
      <span class="flex items-center pt-[5px]">
        <VMileage class="mr-1 w-[16px] h-[16px]" />
        {{ mileage }} тис. км
      </span>
      <div class="flex pt-[5px] w-[80px]">
        <VLocation class="flex mr-1 w-[16px] h-[16px]" />
        {{ location }}
      </div>
    </span>
    <div class="flex justify-between pt-[5px]">
      <span class="flex items-center pt-[5px]">
        <VFuel class="mr-1 w-[16px] h-[16px]" />
        {{ fuel }}
      </span>
      <span class="flex items-center pt-[5px]">
        <VGearbox class="mr-1 w-[16px] h-[16px]" />
        {{ transmission }}
      </span>
    </div>
  </div>
  <div class="flex">
    <div v-if="number" class="flex mt-[10px] mr-2">
      <div
        class="flex flex-col items-center pl-[1px] w-[11px] h-[21px] text-[7px] text-center text-white bg-blue rounded-l-sm"
      >
        <div class="mt-[2px] w-2 h-1 bg-cyan" />
        <div class="w-2 h-1 bg-[#fed500]" />
        UA
      </div>
      <span
        class="pl-1 w-[87px] h-[21px] text-[13px] bg-white rounded-sm border-[1px] border-blue"
      >
        BO 5401 CP
      </span>
    </div>
    <div class="flex mt-[10px]">
      <div
        v-if="isVerifiedCode"
        class="w-[21px] h-[21px] bg-blue rounded-sm border-[1px] border-blue"
      >
        <VCar class="mt-1 ml-[1px] w-4 h-[11px]" />
      </div>
      <span
        class="pl-1 w-[157px] h-[21px] text-[13px] bg-white rounded-sm border-[1px] border-blue"
      >
        WVWZZZ3CхBPхххх35
      </span>
    </div>
  </div>
  <div
    v-if="isNewUser"
    class="pl-[7px] mt-2 w-[146px] h-[19px] text-[13px] border-[1px] border-green-light"
  >
    Вперше на AUTO.RIA
  </div>
  <div v-if="text" class="pt-2 w-[380px] text-[15px]">
    <p>
      {{ text }}
    </p>
  </div>
  <div class="flex text-gray">
    <span v-if="isSameDay(new Date(), date)" class="text-gray">
      <VTime class="mt-[2px] mr-1 w-4 h-4" />
      {{ differenceInHours(new Date(), date) }} години тому
    </span>
    <span
      v-else-if="isSameDay(subDays(new Date(), 1), date)"
      class="flex text-green"
    >
      <VTime class="mt-[2px] mr-1 w-4 h-4" />
      вчора, {{ format(date, 'HH:mm') }}
    </span>
    <span v-else>{{ format(date, 'd.MM.y') }}</span>
    <VCompare class="mt-[3px] ml-52" />
    <VFavorite />
  </div>
</template>
