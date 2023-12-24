<script setup lang="ts">
import { getPosition } from '@/utils/position'
import { getForecastWeather, type ForecastWeather } from '@/services/weather'
import Card from '@/components/Card.vue'
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
const [, ...days] = await getForecastWeather(props.query, 10)
const weather = ref<ForecastWeather>(days)

watch(
  () => route.params,
  async () => {
    const routeQuery = `${route.params.country}:${route.params.city}`
    const [, ...newDays] = await getForecastWeather(routeQuery, 10)

    weather.value = newDays
  }
)
</script>

<template>
  <ul class="md:grid md:grid-cols-3 md:place-items-center lg:gap-2.5">
    <li v-for="{ day, date } in weather" :key="date">
      <Card
        :day="new Date(date).toLocaleDateString('en-US', { weekday: 'long' })"
        :temperature="day.avgtemp_c"
        :condition="day.condition.text"
        class="h-40 w-auto shadow-xl md:w-60 lg:w-80 xl:w-96"
      >
        <IconConditionSwitch :code="day.condition.code" class="h-6 w-6 text-gray-500" />
      </Card>
    </li>
  </ul>
</template>
