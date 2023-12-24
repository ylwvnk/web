<script setup lang="ts">
import CardSkeleton from '@/components/CardSkeleton.vue'
import CurrentCard from '@/components/CurrentCard.vue'
import FutureCards from '@/components/FutureCards.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const query = `${route.params.country}:${route.params.city}`
</script>

<template>
  <main>
    <Suspense>
      <CurrentCard :query="query" />
      <template #fallback>
        <CardSkeleton class="shadow-lg" />
      </template>
    </Suspense>

    <Suspense>
      <FutureCards :query="query" />
      <template #fallback>
        <div class="lg:grid lg:grid-cols-3 lg:justify-items-center">
          <CardSkeleton v-for="i in 9" class="w-auto shadow-xl md:w-60 lg:w-80 xl:w-96" :key="i" />
        </div>
      </template>
    </Suspense>
  </main>
</template>
