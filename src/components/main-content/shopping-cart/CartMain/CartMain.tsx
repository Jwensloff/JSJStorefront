"use client";
import CartSide from "../CartSide/CartSide";
import { ShoppingCartProps } from "@/src/types";
import ProductCardContainer from "../ProductCardContainer/ProductCardContainer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { removeProduct, updateProduct } from "@/src/app/lib/actions";
import { generateSubTotal, generateTotalItems } from "@/src/app/lib/utils";

export default function CartMain({ data }: { data: ShoppingCartProps[] }) {
  const [qty, setqty] = useState<number | null>(null);
  const router = useRouter();

  const cartTotal = generateSubTotal(data);
  const totalItems = generateTotalItems(data);

  const handleClick = async (id: number) => {
    removeProduct(id);
    router.refresh();
  };

  const handleQtyUpdate = async (id: number, qty: number) => {
    updateProduct(id, qty);
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
