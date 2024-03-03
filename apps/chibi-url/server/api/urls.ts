import { type Database } from '~/types/supabase'
import { serverSupabaseClient } from '#supabase/server'

export type ApiURLS = ReturnType<typeof handler>

const handler = defineEventHandler(async (event) => {
  const client = await serverSupabaseClient<Database>(event)

  const { data, error } = await client
    .from('urls')
    .select('*')
    .order('views', { ascending: false })
    .limit(6)

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  return data
})

export default handler
