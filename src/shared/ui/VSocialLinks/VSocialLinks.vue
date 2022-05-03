<script setup lang="ts">
import viber from '~/shared/assets/viber.svg'
import telegram from '~/shared/assets/telegram.svg'
import mail from '~/shared/assets/mail.svg'
import phone from '~/shared/assets/phone.svg'

const icons = [viber, telegram, mail, phone]
</script>

<template>
  <div class="flex w-[310px]">
    <div
      v-for="icon in icons"
      :key="icon"
      class="flex flex-col justify-center items-center mr-[10px] w-[54px] h-[54px] rounded-lg border border-gray hover:border-blue"
    >
      <a>
        <img :src="icon" class="w-[24px]" />
      </a>
    </div>
  </div>
</template>
