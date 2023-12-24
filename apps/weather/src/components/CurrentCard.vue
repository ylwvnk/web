<script setup lang="ts">
import Card from '@/components/Card.vue'
import { getPosition } from '@/utils/position'
import { getCurrentWeather } from '@/services/weather'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import IconConditionSwitch from '@/components/IconConditionSwitch.vue'

const props = withDefaults(
  defineProps<{
    query?: string
  }>(),
  {
    query: await getPosition().then(({ coords }) => `${coords.latitude},${coords.longitude}`)
  }
)

const route = useRoute()
const currentWeather = await getCurrentWeather(props.query)
const weather = ref(currentWeather)

watch(
  () => route.params,
  async () => {
    const routeQuery = `${route.params.country}:${route.params.city}`
    const newWeather = await getCurrentWeather(routeQuery)

    weather.value = newWeather
  }
)
</script>

<template>
  <Card :temperature="weather.temperature" :condition="weather.condition" class="shadow-lg">
    <IconConditionSwitch :code="weather.code" class="h-6 w-6 text-gray-500" />
  </Card>
</template>
