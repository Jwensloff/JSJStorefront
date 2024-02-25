// Supabase client configuration

import { createClient } from "@supabase/supabase-js";

declare const NEXT_PUBLIC_SUPABASE_URL: string | undefined;
declare const NEXT_PUBLIC_SUPABASE_ANON_KEY: string | undefined;

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or key is not provided");
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
