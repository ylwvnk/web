<script setup lang="ts">
const showCreateModal = useState('create-modal', () => false)
const { filtered, userUrl, pending, refresh } = await useFilter('/api/user/url')
</script>

<template>
  <main class="container mx-auto">
    <div class="flex w-full items-center gap-4">
      <Search v-model="userUrl" class="w-full" />
      <OpenModal v-model="showCreateModal" />
      <ModalCreate v-model="showCreateModal" @refresh="refresh" />
    </div>

    <ul class="mt-5 grid grid-flow-row-dense place-items-center gap-4 lg:grid-cols-3">
      <template v-if="pending">
        <li v-for="n in 9" :key="n">
          <FallbackCard>
            <FallbackStats />
          </FallbackCard>
        </li>
      </template>

      <template v-else>
        <li v-for="{ url, short, views, created_at, id } in filtered" :key="id">
          <Card :url="url" :shortUrl="short">
            <Stats :views="views" :createdAt="created_at">
              <div class="space-x-2">
                <FuncDelete :id="id" @refresh="refresh" />
                <FuncClipboard :text="short" />
              </div>
            </Stats>
          </Card>
        </li>
      </template>
    </ul>
  </main>
</template>
