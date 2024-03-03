<script setup lang="ts">
const url = defineModel<string>()
</script>

<template>
  <form @submit.prevent>
    <input
      type="url"
      class="w-full bg-[#1d1d1d] px-3.5 py-2.5 outline-none"
      placeholder="Search your shortened URL here..."
      v-model="url"
    />
  </form>
</template>
