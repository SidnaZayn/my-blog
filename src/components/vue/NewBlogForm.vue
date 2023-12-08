<template>
  <div class="container text-center">
    <form action="#">
        <InputText :label="'Blog Title'" v-model="value1" />
        <InputText :label="'Blog Title'" v-model="value1" />
    </form>
    {{ value1 }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputText from "./components/InputText.vue";

const value1 = ref("sasdasd");
</script>
