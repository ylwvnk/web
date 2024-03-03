<script setup lang="ts">
const { createdAt, views } = defineProps<{
  createdAt: string
  views: number
}>()

const timeAgo = formatRelativeTime(createdAt)
</script>

<template>
  <div class="flex justify-between">
    <div class="flex items-center gap-1.5 text-sm">
      <IconEye class="size-5" />
      <p>{{ views }}</p>
      <span>{{ '|' }}</span>
      <p>{{ timeAgo }}</p>
    </div>

    <slot />
  </div>
</template>
