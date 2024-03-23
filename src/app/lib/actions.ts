"use server";

import { createClient } from "@/src/utils/supabase/supabaseServer";

export async function removeProduct(id: number) {
  const supabase = createClient();
  const { error } = await supabase.from("shopping_cart").delete().eq("id", id);

  if (error) {
    throw error;
  }
}

export async function updateProduct(id: number, qty: number) {
  const supabase = createClient();
  const { error } = await supabase
    .from("shopping_cart")
    .update({ quantity: qty })
    .eq("id", id)
    .select();

  if (error) {
    throw error;
  }
}
