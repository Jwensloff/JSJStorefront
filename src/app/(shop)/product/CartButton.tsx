"use client";

import { Button } from "@/src/tailwind";
import supabase from "@/src/config/supabaseClient";

interface CartButtonProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function CartButton({
  id,
  title,
  price,
  image,
}: CartButtonProps) {
  const handleClick = async () => {
    const { data, error } = await supabase
      .from("shopping_cart")
      .insert({ id, title, price, image });
  };
  return (
    <Button
      onClick={handleClick}
      size="lg"
      color="gray"
      variant="outlined"
      placeholder={undefined}
    >
      Add to shopping cart
    </Button>
  );
}
