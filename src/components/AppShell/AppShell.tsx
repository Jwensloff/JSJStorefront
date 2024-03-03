import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import supabase from "@/src/config/supabaseClient";

export default async function AppShell({ children }: { children: ReactNode }) {
  const { data, error } = await supabase.from("shopping_cart").select();
  let productLength = 0;

  if (data) {
    productLength = data.length;
  }

  return (
    <>
      <Header dataLength={productLength} />
      {children}
      <Footer />
    </>
  );
}
