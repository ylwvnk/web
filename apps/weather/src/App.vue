<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SunSnow from '@/components/icons/SunSnow.vue'
import Autocomplete from '@/components/Autocomplete.vue'
</script>

<template>
  <div class="flex min-h-screen w-full flex-col p-6">
    <header class="flex items-center justify-between border-b-2 border-black px-4 pb-6 lg:px-6">
      <RouterLink to="/" class="flex items-center gap-1">
        <SunSnow class="h-8 w-8" />
        <h1 class="text-xl font-semibold">Weather App</h1>
      </RouterLink>
      <Autocomplete />
    </header>
    <RouterView />
  </div>
</template>
