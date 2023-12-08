<script setup lang="ts">
import { onMounted, ref } from 'vue'
import '../../assets/style/about.css'

const title = 'About'
const src = '/about-img.png'
</script>

<template>
  <section class="hero my-24">
    <div class="container">
      <div class="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
        <div class="flex flex-col items-center gap-8 md:items-start">
          <h1 class="text-center text-6xl md:text-left lg:text-8xl">
            <span class="text-gradient">Thanks</span> for your visit
          </h1>
        </div>
        <div class="flex items-center justify-center">
          <div class="hero-right">
            <img :src="src" class="img1 m- w-[30vw]" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="main">
    <div class="container">
      <h1>It's Me!</h1>
      <!-- thanks latter -->
      <p>
        Thank you so much for taking the time to visit my blog! Your presence means the world to me. I truly appreciate
        your interest in my content and the support you've shown. It is because of readers like you that I am able to
        share my thoughts, ideas, and experiences. Your visit not only encourages me to continue creating valuable
        content but also motivates me to explore new topics and improve my writing. Once again, thank you for stopping
        by and I hope you found my blog informative and enjoyable. Feel free to come back anytime as I'll continue to
        provide fresh and engaging content for you to explore.
      </p>
    </div>
  </section>
</template>
