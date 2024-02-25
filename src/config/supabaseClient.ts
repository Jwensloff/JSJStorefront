// Supabase client configuration

import { createClient } from "@supabase/supabase-js";
import { error } from "console";

declare const NEXT_PUBLIC_SUPABASE_URL: string;
declare const NEXT_PUBLIC_SUPABASE_ANON_KEY: string;

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseKey) {
  throw error;
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
