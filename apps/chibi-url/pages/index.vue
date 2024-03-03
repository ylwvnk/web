<script setup lang="ts">
const { filtered, userUrl } = await useFilter('/api/urls')
</script>

<template>
  <main class="my-20 flex flex-col items-center justify-center">
    <h1 class="text-6xl">Shorten your URLS</h1>
    <p class="mt-2.5 text-gray-500">Paste your long URL below to search it</p>

    <Search v-model="userUrl" class="mt-16 w-[450px]" />

    <ul class="mt-5 grid grid-cols-3 place-items-center gap-4">
      <li v-for="{ url, short, views, created_at, id } in filtered" :key="id">
        <Card :url="url" :shortUrl="short">
          <Stats :views="views" :createdAt="created_at">
            <FuncClipboard :text="short" />
          </Stats>
        </Card>
      </li>
    </ul>
  </main>
</template>
