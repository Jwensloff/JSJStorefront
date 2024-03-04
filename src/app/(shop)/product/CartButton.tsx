"use client";
import { Button } from "@/src/tailwind";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import { redirect, useRouter } from "next/navigation";

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
  const router = useRouter();
  const handleClick = async () => {
    const supabase = createClient();
    const { error } = await supabase
      .from("shopping_cart")
      .insert({ id, title, price, image });

    if (error) {
      redirect("/error");
    }

    router.refresh();
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
