// Supabase client configuration

import { createClient } from "@supabase/supabase-js";

declare const NEXT_PUBLIC_SUPABASE_URL: string | undefined;
declare const NEXT_PUBLIC_SUPABASE_ANON_KEY: string | undefined;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or key is not provided");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
