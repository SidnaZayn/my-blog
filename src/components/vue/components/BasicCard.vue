<template>
  <div class="work-card bg align-center flex flex-row gap-3 border-4 border-teal-800 dark:border-teal-400">
    <slot name="logo"> </slot>
    <div class="text-left">
      <p class="text-xl font-semibold">{{ props.position }}</p>
      <p class="text-base dark:text-gray-400">{{ props.institude }}</p>
      <p class="text-base dark:text-gray-400">{{ props.period }}</p>
      <br />
      <p class="text-sm"><slot></slot></p>
      <br />
      <div class="flex flex-wrap gap-1">
        <span
          class="w-fit rounded-full bg-gray-700 px-2 text-xs text-white dark:text-gray-300"
          v-for="skill in props.skills"
          :key="skill"
        >
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  position: String,
  institude: String,
  period: String,
  skills: Array,
})
</script>

<style>
.work-card {
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 10px;
  min-width: 40vw;
}
</style>
