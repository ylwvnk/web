<script setup lang="ts">
const url = useRequestURL()
const { text } = defineProps<{
  text: string
}>()

const copyToClipboard = () => {
  const shorterURL = `${url.origin}/r/${text}`

  navigator.clipboard.writeText(shorterURL)
}
</script>

<template>
  <button @click="copyToClipboard">
    <IconClipboard class="size-5" />
  </button>
</template>
