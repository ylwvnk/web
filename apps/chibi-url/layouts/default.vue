<template>
  <div class="min-h-dvh bg-[#121212] p-4 text-white">
    <header class="container mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2">
        <NuxtLink to="/">
          <IconKiwi class="size-16 fill-[#574339]" />
        </NuxtLink>
        <p>url</p>
      </div>

      <Auth />
    </header>
    <slot />
  </div>
</template>
