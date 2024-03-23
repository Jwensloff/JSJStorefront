import { ReactNode } from "react";
import Footer from "../footer-content/Footer/Footer";

import Header from "../header-content/Header/Header";
import { getShoppingCartItems } from "@/src/app/lib/data";
import { ShoppingCartProps } from "@/src/app/lib/definitions";

export default async function AppShell({ children }: { children: ReactNode }) {
  const allProducts: ShoppingCartProps[] | undefined =
    await getShoppingCartItems();

  let productLength = 0;
  let products: ShoppingCartProps[] | null = null;

  if (allProducts) {
    productLength = allProducts.length;
    products = allProducts;
  }

  return (
    <>
      <Header dataLength={productLength} products={products} />
      {children}
      <Footer />
    </>
  );
}
