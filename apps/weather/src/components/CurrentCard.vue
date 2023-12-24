<script setup lang="ts">
import Card from '@/components/Card.vue'
import { getPositionQuery } from '@/utils/position'
import { getCurrentWeather } from '@/services/weather'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import IconConditionSwitch from '@/components/IconConditionSwitch.vue'

const props = defineProps<{
  query?: string
}>()

const route = useRoute()
const query = props?.query ?? (await getPositionQuery())
const currentWeather = await getCurrentWeather(query)
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
