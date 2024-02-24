<template>
  <main class="my-20 flex flex-col items-center justify-center">
    <h1 class="text-6xl">Shorten your URLS</h1>
    <p class="mt-2.5 text-gray-500">Paste your long URL below to search it</p>

    <Search />

    <ul class="mt-20 grid grid-cols-3 gap-4">
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  </main>
</template>
