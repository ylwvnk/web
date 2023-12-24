<script setup lang="ts">
import CardSkeleton from '@/components/CardSkeleton.vue'
import CurrentCard from '@/components/CurrentCard.vue'
import ErrorCard from '@/components/ErrorCard.vue'
import FutureCards from '@/components/FutureCards.vue'
import { onErrorCaptured, ref } from 'vue'

const error = ref<GeolocationPositionError>()

onErrorCaptured<GeolocationPositionError>((err) => {
  error.value = err
})
</script>

<template>
  <main>
    <ErrorCard v-if="error" :code="error.code">
      {{ error.message }}
    </ErrorCard>
    <template v-else>
      <Suspense>
        <CurrentCard />
        <template #fallback>
          <CardSkeleton class="shadow-lg" />
        </template>
      </Suspense>

      <Suspense>
        <FutureCards />
        <template #fallback>
          <div class="md:grid md:grid-cols-3 md:justify-items-center">
            <CardSkeleton
              v-for="i in 9"
              class="w-auto shadow-xl md:w-60 lg:w-80 xl:w-96"
              :key="i"
            />
          </div>
        </template>
      </Suspense>
    </template>
  </main>
</template>
