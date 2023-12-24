<script setup lang="ts">
type Props = {
  code: number
}

defineProps<Props>()
</script>

<template>
  <div class="mt-6 rounded-sm border p-6">
    <div class="flex items-center justify-between">
      <p class="text-lg font-medium text-red-700">GeolocationPositionError</p>
      <div class="h-6 w-6 animate-pulse rounded-full bg-gray-500"></div>
    </div>
    <p class="mt-4 text-3xl font-semibold text-red-600">
      <slot />
    </p>
    <span class="text-red-400">{{
      code === 1
        ? `${code} - PERMISSION_DENIED`
        : code === 2
          ? `${code} - POSITION_UNAVAILABLE`
          : `${code} - TIMEOUT`
    }}</span>
  </div>
</template>
