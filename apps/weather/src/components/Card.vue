<script setup lang="ts">
type Props = {
  day?: string
  temperature: number
  condition: string
}

withDefaults(defineProps<Props>(), {
  day: 'Current Weather'
})
</script>

<template>
  <div class="mt-6 rounded-sm border p-6">
    <div class="flex items-center justify-between">
      <p class="text-lg font-medium">{{ day }}</p>
      <slot />
    </div>
    <p class="mt-4 text-3xl font-semibold">{{ temperature }}°C</p>
    <span class="text-gray-500">{{ condition }}</span>
  </div>
</template>
