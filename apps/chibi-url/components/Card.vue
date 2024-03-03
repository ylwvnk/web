<script setup lang="ts">
const siteUrl = useRequestURL()

defineProps<{
  url: string
  shortUrl: string
}>()
</script>

<template>
  <div class="w-80 truncate rounded bg-[#1d1d1d] p-3 lg:p-4 xl:w-96">
    <a :href="url" target="_blank" rel="noopener noreferrer" class="text-sm">
      {{ url }}
    </a>

    <div class="my-2 flex items-center gap-2">
      <p class="text-sm text-[#c49076]">{{ `${siteUrl.host}/r/${shortUrl}` }}</p>
      <a :href="`${siteUrl.origin}/r/${shortUrl}`" target="_blank" rel="noopener noreferrer">
        <IconExternalPage class="size-4 text-[#f0bd5f]" />
      </a>
    </div>

    <slot />
  </div>
</template>
