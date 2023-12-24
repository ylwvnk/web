import { getSearchWeather, type SearchWeather } from '@/services/weather'
import { ref, watch } from 'vue'

export const useAutocomplete = () => {
  const autocomplete = ref<SearchWeather>([])
  const query = ref<string>('')
  const focused = ref<boolean>(false)
  const loading = ref<boolean>(false)
  const current = ref<number>(0)

  const getAutocomplete = async () => {
    try {
      const weatherAutocomplete = await getSearchWeather(query.value)

      autocomplete.value = weatherAutocomplete
      current.value = 0
      loading.value = false
    } catch (error) {
      console.error(error)

      autocomplete.value = []
      loading.value = false
      current.value = 0
    }
  }

  watch(query, (newQuery, oldQuery, onCleanup) => {
    if (!query.value) return

    loading.value = true

    const timeout = setTimeout(getAutocomplete, 500)

    onCleanup(() => clearTimeout(timeout))
  })

  return {
    autocomplete,
    query,
    focused,
    loading,
    current
  }
}
