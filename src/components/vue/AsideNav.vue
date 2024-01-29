<template>
  <div class="items-center justify-end hidden lg:flex lg:justify-center mx-3">
    <div class="grid grid-cols-1 gap-y-8">
          <a href="https://github.com/sidnazayn" title="Go to the GitHub">
            <GithubFill class="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/sidna-muhammad-zen-1a0898180/" title="Go to the Linkdin">
            <LinkedinBoxFill class="h-8 w-8" />
          </a>
          <a href="https://twitter.com/talkativepeep" title="Go to the X">
            <TwitterXFill class="h-8 w-8" />
          </a>
          <a href="https://medium.com/@sidnazayn11" title="Go to the medium">
            <MediumFill class="h-8 w-8" />
          </a>
        </div>    
  </div>
</template>

<script setup lang="ts">
import GithubFill from "../icons/vue/GithubFill.vue";
import LinkedinBoxFill from "../icons/vue/LinkedinBoxFill.vue";
import TwitterXFill from "../icons/vue/TwitterXFill.vue";
import MediumFill from "../icons/vue/MediumFill.vue";
</script>
