<script setup lang="ts">
import type { Database } from '~/types/supabase'

const { id } = defineProps<{
  id: number
}>()
const emit = defineEmits(['refresh'])

const client = useSupabaseClient<Database>()
const user = useSupabaseUser()

const handleDeleteShortURL = async () => {
  const { error } = await client
    .from('urls')
    .delete()
    .eq('user_id, id', user.value?.id as string)
    .eq('id', id)
    .select()

  if (!error) {
    await emit('refresh')
  }
}
</script>

<template>
  <button @click="handleDeleteShortURL">
    <IconTrash class="size-5" />
  </button>
</template>
