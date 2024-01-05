<template>
  <div class="text-slate-900 flex items-center justify-end md:justify-center">
    <div class="grid grid-cols-1 gap-y-8">
      <a href="https://github.com/sidnazayn" title="Go to the GitHub page">
        <Icon icon="ri:github-fill" class="h-8 w-8" />
      </a>
      <a href="https://www.linkedin.com/in/sidna-muhammad-zen-1a0898180/" title="Go to the GitHub page">
        <Icon icon="ri:linkedin-box-fill" class="h-8 w-8" />
      </a>
      <a href="https://twitter.com/talkativepeep" title="Go to the GitHub page">
        <Icon icon="ri:twitter-x-fill" class="h-8 w-8" />
      </a>
      <a href="https://medium.com/@sidnazayn11" title="Go to the GitHub page">
        <Icon icon="ri:medium-fill" class="h-8 w-8" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from "@iconify/vue";

const sidebar = ref('this is side bar')
</script>
