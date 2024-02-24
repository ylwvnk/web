<script setup lang="ts">
const { auth } = useSupabaseClient()

const signOut = async () => {
  const { error } = await auth.signOut()

  if (error) {
    console.error(error)
  }
}

defineProps<{
  open: boolean
}>()
</script>

<template>
  <Transition name="command">
    <div v-if="open">
      <ul class="absolute right-0 top-8 z-10 w-64 space-y-1 rounded bg-[#1d1d1d] p-2 text-white">
        <li>
          <NuxtLink
            to="/create"
            class="flex items-center gap-1 rounded p-2 transition-colors hover:bg-[#121212]"
          >
            <IconPlus class="size-5" />
            Create new link
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/dash"
            class="flex items-center gap-1 rounded p-2 transition-colors hover:bg-[#121212]"
          >
            <IconDashboard class="size-5" />
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <button
            @click="signOut"
            class="flex w-full items-center gap-1 rounded p-2 transition-colors hover:bg-[#121212]"
          >
            <IconSignOut class="size-5" />
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<style scoped>
.command-enter-active,
.command-leave-active {
  transition: opacity 0.5s ease;
}

.command-enter-from,
.command-leave-to {
  opacity: 0;
}
</style>
