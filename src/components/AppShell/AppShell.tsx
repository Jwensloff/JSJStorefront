import { ReactNode } from "react";
import Footer from "../footer-content/Footer/Footer";

import Header from "../header-content/Header/Header";
import { getShoppingCartItems } from "@/src/app/lib/data";
import { ShoppingCartProps } from "@/src/types";

export default async function AppShell({ children }: { children: ReactNode }) {
  const allProducts: ShoppingCartProps[] = await getShoppingCartItems();

  let productLength = 0;

  if (allProducts) {
    productLength = allProducts.length;
  }

  return (
    <>
      <Header dataLength={productLength} products={allProducts} />
      {children}
      <Footer />
    </>
  );
}
