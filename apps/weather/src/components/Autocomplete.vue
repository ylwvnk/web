<script setup lang="ts">
import Search from '@/components/icons/Search.vue'
import { useAutocomplete } from '@/hooks/autocomplete'
import { RouterLink, useRouter } from 'vue-router'

const { autocomplete, current, focused, loading, query } = useAutocomplete()
const router = useRouter()

const handleKeyEnter = () => {
  const country = autocomplete.value[current.value].country.toLowerCase()
  const city = autocomplete.value[current.value].name.toLowerCase()

  router.push(`/${country}/${city}`)
}

const handleKeyArrowUp = () => {
  if (current.value === 0) {
    current.value = autocomplete.value.length - 1
  } else {
    current.value--
  }
}

const handleKeyArrowDown = () => {
  if (current.value === autocomplete.value.length - 1) {
    current.value = 0
  } else {
    current.value++
  }
}
</script>

<template>
  <form class="relative" autocomplete="on" @submit.prevent>
    <Search class="absolute left-2.5 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
    <input
      type="search"
      class="h-10 w-40 rounded-md border py-2 pl-8 pr-3 text-sm outline-none ring-inset ring-gray-500 focus:ring sm:w-72 md:w-[300px]"
      placeholder="Search city..."
      @focus="focused = true"
      @blur="focused = false"
      @keydown.up.prevent="handleKeyArrowUp"
      @keydown.down.prevent="handleKeyArrowDown"
      @keydown.enter="handleKeyEnter"
      v-model="query"
    />
    <div
      v-if="loading"
      class="absolute top-11 w-40 rounded-md border bg-white py-1.5 text-xs md:w-[300px] md:text-base"
    >
      <p class="text-center text-sm">loading...</p>
    </div>
    <ul
      class="absolute top-11 flex w-40 flex-col gap-1.5 rounded-md border bg-white px-2 py-1.5 text-xs md:w-[300px] md:text-base"
      v-else-if="focused && !loading && autocomplete.length && query"
    >
      <li v-for="(city, index) in autocomplete" :key="city.id">
        <RouterLink
          class="block cursor-pointer rounded px-1.5 py-0.5 transition-colors"
          @mousedown.prevent
          @mouseenter="current = index"
          :to="`/${city.country.toLowerCase()}/${city.name.toLowerCase()}`"
          :class="{ 'bg-gray-500': current === index }"
        >
          <p class="text-sm transition-colors" :class="{ 'text-white': current === index }">
            {{ city.name }}
          </p>
          <span class="text-xs transition-colors" :class="{ 'text-gray-200': current === index }">
            {{ city.country }}
          </span>
        </RouterLink>
      </li>
    </ul>
    <div
      v-else-if="!loading && !autocomplete.length && query && focused"
      class="absolute top-11 w-40 rounded-md border bg-white py-1.5 text-xs md:w-[300px] md:text-base"
    >
      <p class="text-center text-sm">not found</p>
    </div>
  </form>
</template>
