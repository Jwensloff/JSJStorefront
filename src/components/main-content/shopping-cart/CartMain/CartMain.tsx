"use client";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import CartSide from "../CartSide/CartSide";
import { ShoppingCartProps } from "@/src/types";
import ProductCardContainer from "../ProductCardContainer/ProductCardContainer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CartMain({ data }: any) {
  const cartTotal = data?.reduce((acc: number, product: ShoppingCartProps) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalItems = data.reduce((acc: number, product: ShoppingCartProps) => {
    return acc + product.quantity;
  }, 0);
  const [qty, setqty] = useState<number | null>(null);

  const router = useRouter();
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

  const handleQtyUpdate = async (id: number, qty: number) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("shopping_cart")
      .update({ quantity: qty })
      .eq("id", id)
      .select();

    if (error) {
      throw error;
    }
    router.refresh();
  };

  return (
    <div className="flex flex-col md:w-auto md:flex-row w-full min-h-screen">
      <ProductCardContainer
        shoppingCartItems={data}
        handleClick={handleClick}
        handleQtyUpdate={handleQtyUpdate}
        setqty={setqty}
        qty={qty}
      />
      <div className="w-full md:w-[30vw] p-5">
        {data && (
          <CartSide cartTotal={cartTotal} totalItems={Number(totalItems)} />
        )}
      </div>
    </div>
  );
}
