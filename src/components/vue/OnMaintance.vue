<template>
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 text-center">
      <h1 class="text-center text-4xl lg:text-left lg:text-6xl">
        <p>I'm sorry,</p>
        <p class="text-yellow-500" id="sub_hero">this page is</p>
        <p class="mb-5">under construction</p>
        <p class="text-xl text-yellow-200">Gonna be back soon !</p>
      </h1>
      <img :src="props.src" alt="under maintance" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  src: String,
})
</script>
