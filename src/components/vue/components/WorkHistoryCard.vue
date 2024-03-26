<template>
  <BasicCard :position="props.position" :institude="props.institude" :period="props.period" :skills="props.skills">
    <template #logo>
      <div id="institude-logo" class="h-fit w-24 md:w-48 md:max-w-[160px] rounded bg-white p-3 md:p-5">
        <img v-if="props.src" :src="props.src" alt="logo ip" class="max-h-[50px] w-full" />
        <p v-else class="text-xs md:text-xs font-semibold uppercase text-gray-600">{{ props.institude }}</p>
      </div>
    </template>
    <template #default>
      <slot />
    </template>
  </BasicCard>
</template>

<script setup>
import BasicCard from './BasicCard.vue'
const props = defineProps({
  src: String,
  position: String,
  institude: String,
  period: String,
  skills: Array,
})
</script>
