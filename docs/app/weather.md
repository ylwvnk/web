# [Weather](https://web-weathers-app.vercel.app/)

Well this was my first vue app, I made it to learn vue.

## Features

If you want to replicate this app, you can learn the following things:

- [Suspense](https://vuejs.org/guide/built-ins/suspense.html)
- [Error handling](https://vuejs.org/api/composition-api-lifecycle#onerrorcaptured)

## Random Things

I never used vue before, so I was really surprise when you can do this:

```vue
<script setup>
import Random from '...'
</script>

<template>
  <Random class="..." />
</template>
```

you dont need to specify the `class` prop, meanwhile in react you need to do this:

```tsx
export const Random = ({ className }: { className: string }) => {
  return <div className={className}>...</div>
}
```

Thas a really cool feature.
