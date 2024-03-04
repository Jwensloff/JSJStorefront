import { ReactNode } from "react";
import Footer from "../Footer/Footer";
// import { redirect } from "next/navigation";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import Header from "../Header/Header";
// import supabase from "@/src/utils/supabase/supabaseClient";

export default async function AppShell({ children }: { children: ReactNode }) {
  // const { data, error } = await supabase.from("shopping_cart").select();
  // let productLength = 0;

  // if (data) {
  //   productLength = data.length;
  // }

  const supabase = createClient();

  const { data: allProducts } = await supabase.from("shopping_cart").select();
  let productLength = 0;

  if (allProducts) {
    productLength = allProducts.length;
  }

  return (
    <>
      <Header dataLength={productLength} />
      {children}
      <Footer />
    </>
  );
}
