<template>
  <div>
    <label :for="props.label+`_`" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">{{ props.label }}</label>
    <input
      type="text"
      :id="props.label+'_'"
      class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder="John"
      :value="props.modelValue"
      @input="submitINput"
          />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
  modelValue: String,
})
const emits = defineEmits(['update:modelValue'])

function submitINput(e:InputEvent){
  emits('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>