import { createClient } from "@/src/utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export async function getAllProducts() {
  const supabase = createClient();
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getProductsByCategory(category: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category);

  if (error) {
    throw error;
  }

  return data;
}

export async function getShoppingCartItems() {
  const supabase = createClient();
  const { data, error } = await supabase.from("shopping_cart").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export async function getCareers() {
  const supabase = createClient();
  const { data: open_jobs, error } = await supabase
    .from("open_js")
    .select("id,title,description");

  if (error) {
    redirect("/error");
  }

  return open_jobs;
}

export async function getIndividualJob(params: { id: string }) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("open_jobs")
    .select("*")
    .eq("id", params.id);

  if (error) {
    throw error;
  }

  return data;
}
