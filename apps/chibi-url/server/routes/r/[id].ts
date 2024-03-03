import { type Database } from '~/types/supabase'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const client = await serverSupabaseClient<Database>(event)

  const { data, error } = await client
    .from('urls')
    .select('*')
    .eq('short', id as string)
    .single()

  if (error) {
    throw createError({ statusMessage: error.message })
  }

  if (data) {
    const { error: viewsError } = await client
      .from('urls')
      .update({ views: data.views + 1 })
      .eq('short', id as string)

    if (viewsError) {
      throw createError({ statusMessage: viewsError.message })
    }

    sendRedirect(event, data.url)
  }
})
