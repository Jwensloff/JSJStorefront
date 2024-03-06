"use client";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import CartSide from "./CartSide";
import { ShoppingCartProps } from "@/src/types";
import ProductCardContainer from "../ProductCardContainer/ProductCardContainer";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect, useState } from "react";

export default function CartMain({ router }: { router: AppRouterInstance }) {
  const [shoppingCartItems, setShoppingCartItems] = useState<
    ShoppingCartProps[]
  >([]);

  useEffect(() => {
    const getShoppingCartItems = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("shopping_cart").select();

      if (error) {
        throw error;
      }
      setShoppingCartItems(data);
    };
    getShoppingCartItems();
  }, []);

  const cartTotal = shoppingCartItems?.reduce(
    (acc: number, product: ShoppingCartProps) => {
      return acc + product.price;
    },
    0,
  );

  const handleClick = async (id: number) => {
    const supabase = createClient();
    const { error } = await supabase
      .from("shopping_cart")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }
    router.refresh();
  };

  return (
    <div className="flex flex-col md:w-auto md:flex-row w-full min-h-screen">
      <ProductCardContainer
        shoppingCartItems={shoppingCartItems}
        handleClick={handleClick}
      />
      <div className="w-full md:w-[40vw] p-5">
        {shoppingCartItems && (
          <CartSide
            cartTotal={cartTotal}
            totalItems={Number(shoppingCartItems?.length)}
          />
        )}
      </div>
    </div>
  );
}
