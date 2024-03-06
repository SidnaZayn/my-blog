<script setup lang="ts">
import { getRecentPages } from '../../lib/api'
type Page = {
  title: string
  slug: string
}
const props = defineProps({
  title: String,
  subhref: String,
  list: Array as () => Page[],
})
</script>

<template>
  <div class="h-fit rounded-md bg-slate-200 px-5 py-6 dark:bg-slate-600">
    <p class="is-active text-xl font-semibold dark:text-slate-100">{{ props.title }}</p>
    <div class="sss mt-6 max-h-60 overflow-y-auto border-l-4 border-slate-300 dark:border-slate-800">
      <ul class="sidebar-1" id="sb">
        <li class="sss mx-0 truncate px-0" v-for="page in props.list" :key="page.title">
          <a :href="`/${props.subhref}/${page.slug}`" class="mx-0 border-l-4 border-transparent px-0 pl-4">
            {{ page.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.sidebar-1 {
  grid-template-columns: auto;
  grid-gap: 1em;
}
ul {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
