<script setup lang="ts">
const model = defineModel<boolean>()

const openModal = () => {
  model.value = true
}
</script>

<template>
  <button class="rounded bg-[#1d1d1d] p-3" @click="openModal">
    <IconPlus class="size-5" />
  </button>
</template>
