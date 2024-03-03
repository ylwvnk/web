import { type Database } from '~/types/supabase'
import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'

export type ApiUserURL = ReturnType<typeof handler>

const handler = defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  const client = await serverSupabaseClient<Database>(event)

  const { data, error } = await client
    .from('urls')
    .select()
    .eq('user_id', user?.id as string)
    .order('created_at')

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})

export default handler
