import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    `${process.env.URL}`,
    `${process.env.KEY}`
)