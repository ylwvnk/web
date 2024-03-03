<script setup lang="ts">
import type { Database } from '~/types/supabase'
import { nanoid } from 'nanoid'

const emits = defineEmits(['refresh'])
const model = defineModel<boolean>()
const client = useSupabaseClient<Database>()
const user = useSupabaseUser()
const url = ref<string>('')

const close = () => {
  model.value = false
}

const addTask = async () => {
  const short = nanoid(6)
  const { error } = await client.from('urls').upsert({
    user_id: user.value?.id,
    url: url.value,
    short
  })

  if (!error) {
    await emits('refresh')
    close()
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="model"
        class="absolute left-0 top-0 z-10 grid h-full w-full place-items-center text-white backdrop-blur-sm transition-[backdrop-filter]"
      >
        <form class="relative rounded bg-[#1d1d1d] p-3 lg:p-3.5" @submit.prevent="addTask">
          <div class="flex flex-col items-center gap-5">
            <h1 class="text-center text-lg">Create a new short URL</h1>

            <button
              type="button"
              class="absolute right-3.5 rounded bg-[#121212] p-1.5"
              @click="close"
            >
              <IconClose class="size-6" />
            </button>
          </div>

          <label for="url" class="mb-2 mt-5 block"> Enter the URL here:</label>
          <input
            type="url"
            id="url"
            class="w-72 rounded-sm bg-[#121212] px-3 py-2 outline-none lg:w-96 lg:px-3.5 lg:py-2.5"
            placeholder="https://"
            v-model="url"
            required
          />

          <button class="mx-auto mt-2 block rounded bg-[#121212] px-5 py-1.5 lg:px-6">
            Add URL
          </button>
        </form>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
