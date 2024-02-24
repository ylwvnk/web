<script setup lang="ts">
const { auth } = useSupabaseClient()

const signInWithGithub = async () => {
  const { error } = await auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:3000/confirm'
    }
  })

  if (error) {
    console.error(error)
  }
}

const signInWithGoogle = async () => {
  const { error } = await auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/confirm'
    }
  })

  if (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex justify-center gap-6 text-sm">
    <button class="flex items-center gap-1.5 rounded bg-[#1d1d1d] p-2.5" @click="signInWithGithub">
      <IconGithub class="size-4" />
      <span>Sign in with Github</span>
    </button>

    <button class="flex items-center gap-1.5 rounded bg-[#1d1d1d] p-2.5" @click="signInWithGoogle">
      <IconGoogle class="size-4" />
      <span>Sign in with Google</span>
    </button>
  </div>
</template>
