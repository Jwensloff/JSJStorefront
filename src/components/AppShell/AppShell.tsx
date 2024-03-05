import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import Header from "../Header/Header";
import { redirect } from "next/navigation";
import React from "react";
export default async function AppShell({ children }: { children: ReactNode }) {
  const supabase = createClient();

  const { data: allProducts, error } = await supabase
    .from("shopping_cart")
    .select();
  let productLength = 0;

  if (allProducts) {
    productLength = allProducts.length;
  }

  if (error) {
    redirect("/error");
  }

  return (
    <>
      <Header dataLength={productLength} />
      {children}
      <Footer />
    </>
  );
}
