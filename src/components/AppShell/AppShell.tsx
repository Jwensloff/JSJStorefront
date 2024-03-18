import { ReactNode } from "react";
import Footer from "../footer-content/Footer/Footer";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import Header from "../header-content/Header/Header";
import { redirect } from "next/navigation";
import React from "react";
export default async function AppShell({ children }: { children: ReactNode }) {
  const supabase = createClient();

  const { data: allProducts, error } = await supabase
    .from("shopping_cart")
    .select();
  let productLength = 0;
  let products;

  if (allProducts) {
    productLength = allProducts.length;
    products = allProducts;
  }

  if (error) {
    redirect("/error");
  }

  return (
    <>
      <Header dataLength={productLength} products={products} />
      {children}
      <Footer />
    </>
  );
}
