<script setup lang="ts">
const user = useSupabaseUser()
const open = useState('command', () => false)

const handleModalToggle = () => {
  open.value = !open.value
}
</script>

<template>
  <NuxtLink to="/login" class="transition-colors hover:text-gray-300" v-if="!user">
    Sign In
  </NuxtLink>
  <div class="relative" v-else>
    <button class="transition-colors hover:text-gray-300" @click="handleModalToggle">
      {{ `# ${user.user_metadata.user_name}` }}
    </button>

    <Command :open="open" />
  </div>
</template>
