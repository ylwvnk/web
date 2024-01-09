# Weather App

A web app to display weather information. It uses [WeatherApi](https://www.weatherapi.com/) API to fetch weather data.

## Project Setup

Make sure to run `pnpm install` in the root directory.

```sh
# /web
pnpm install
```

Now you can create your `.env`:

```sh
# /web/apps/weather
touch .env
```

Then add your API key with the same name of the variable in [`.env.example`](./.env.example), so it will be see like this:

```sh
# /web/apps/weather/.env
VITE_WEATHER_KEY="<YOUR_API_KEY>"
```

## Dev Mode

This monorepo uses [turbo](https://turbo.build/repo) to run only this app in dev mode. Just run the following command:

```sh
# /web
pnpm dev --filter=weather
```
