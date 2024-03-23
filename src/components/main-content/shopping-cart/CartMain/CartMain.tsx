"use client";
import CartSide from "../CartSide/CartSide";
import { ShoppingCartProps } from "@/src/types";
import ProductCardContainer from "../ProductCardContainer/ProductCardContainer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { removeProduct, updateProduct } from "@/src/app/lib/actions";

export default function CartMain({ data }: { data: ShoppingCartProps[] }) {
  const cartTotal = data?.reduce((acc: number, product: ShoppingCartProps) => {
    return acc + product.price * product.quantity;
  }, 0);

  const totalItems = data.reduce((acc: number, product: ShoppingCartProps) => {
    return acc + product.quantity;
  }, 0);
  const [qty, setqty] = useState<number | null>(null);
  const router = useRouter();

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
