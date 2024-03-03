import type { ApiURLS } from '~/server/api/urls'
import type { ApiUserURL } from '~/server/api/user/url'

type URLS = '/api/urls' | '/api/user/url'
type FetchResponse<T> = T extends '/api/urls' ? ApiURLS : ApiUserURL

export const useFilter = async (urls: URLS) => {
  const { data, pending, refresh } = await useFetch<Awaited<FetchResponse<typeof urls>>>(urls)
  const userUrl = ref('')

  const filtered = computed(() => {
    if (!userUrl.value.length) {
      return data.value
    }

    return data.value?.filter(
      (item) =>
        item.short.toLowerCase().includes(userUrl.value.toLowerCase()) ||
        item.url.toLowerCase().includes(userUrl.value.toLowerCase())
    )
  })

  return {
    filtered,
    userUrl,
    pending,
    refresh
  }
}
