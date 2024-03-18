import { createClient } from "@/src/utils/supabase/supabaseServer";

export async function getShoppingCartItems() {
  const supabase = createClient();
  const { data, error } = await supabase.from("shopping_cart").select("*");

  if (error) {
    throw error;
  }
}
