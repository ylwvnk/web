const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY

export const getCurrentWeather = async (query: string) => {
  const currentWeatherData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_KEY}&q=${query}&aqi=no`
  )
  const currentWeather = await currentWeatherData.json()

  return {
    temperature: currentWeather.current.temp_c as number,
    condition: currentWeather.current.condition.text as string,
    code: currentWeather.current.condition.code as number
  }
}

export type ForecastWeather = {
  day: {
    avgtemp_c: number
    condition: {
      text: string
      code: number
    }
  }
  date: string
}[]

export const getForecastWeather = async (
  query: string,
  days: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
) => {
  const forecastWeatherData = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_KEY}&q=${query}&days=${days}&aqi=no&alerts=no`
  )
  const forecastWeather = await forecastWeatherData
    .json()
    .then(({ forecast }) => forecast.forecastday)

  return forecastWeather as ForecastWeather
}

export type SearchWeather = {
  country: string
  id: number
  lat: number
  lon: number
  name: string
  region: string
  url: string
}[]

export const getSearchWeather = async (query: string) => {
  const searchWeatherData = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=${WEATHER_KEY}&q=${query}`
  )
  const searchWeather = await searchWeatherData.json()

  return searchWeather as SearchWeather
}
