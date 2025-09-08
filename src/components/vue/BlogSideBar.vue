<script setup lang="ts">

type Page = {
  title: string
  slug: string
}
const props = defineProps({
  title: String,
  subhref: String,
  list: Array as () => Page[],
  slug: String
})
</script>

<template>
  <div class="h-fit rounded-md px-5 py-6 dark:border-white border-2 bg-white dark:bg-transparent shadow-md">
    <p class="is-active text-xl font-semibold mb-2">{{ props.title }}</p>
    <div class="mt-4 max-h-60 overflow-y-auto custom-scrollbar">
      <ul class="sidebar-1" id="sb">
        <li v-for="page in props.list" :key="page.slug"
          class="mx-0 truncate px-0 text-teal-700 dark:text-teal-300 transition-colors">
          <a :href="`/${props.subhref}/${page.slug}`"
            class="mx-0 border-l-4 border-transparent px-0 pl-4 block py-2 hover:border-teal-500 hover:bg-teal-50/75 dark:hover:bg-teal-900/75 focus:outline-none focus:border-teal-700"
            :class="page.slug === props.slug ? 'border-teal-500 bg-teal-50 dark:bg-transparent font-semibold' : ''"
            tabindex="0">
            {{ page.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
#sb ul {
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
