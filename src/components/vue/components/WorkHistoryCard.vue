<template>
  <div class="work-card bg flex flex-row gap-3 align-center">
    <div id="institude-logo" class="bg-white p-5 rounded w-1/3 h-fit">
      <img :src="props.src" alt="logo ip" class="max-h-[50px] w-full object-cover" />
    </div>
    <div class="text-left">
      <p class="text-xl font-semibold">{{ props.position }}</p>
      <p class="text-base">{{ props.institude }}</p>
      <p class="text-base">{{ props.period }}</p>
      <br>
      <p class="text-sm"><slot></slot></p>
      <br>
      <div class="flex flex-wrap gap-1">
        <span class="text-xs rounded-full bg-gray-700 text-gray-500 px-2 w-fit" v-for="skill in props.skills" :key="skill">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  src: String,
  position:String,
  institude: String,
  period: String,
  skills: Array
})
</script>

<style>
.work-card {
  border: 1.5px solid #54E98D;
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
  max-width: 50vw;
}
</style>