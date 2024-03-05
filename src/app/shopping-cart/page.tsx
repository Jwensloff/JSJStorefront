"use client";
import CartMain from "@/src/components/ShoppingCart/CartMain/CartMain";
import { useRouter } from "next/navigation";

export default function ShoppingCart() {
  const router = useRouter();

  return <>{<CartMain router={router} />}</>;
}
