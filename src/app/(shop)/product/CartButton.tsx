"use client";
import CartPreview from "@/src/components/CartPreview/CartPreview";
import { Button } from "@/src/tailwind";
import { createClient } from "@/src/utils/supabase/supabaseClient";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

interface CartButtonProps {
  id: number;
  title: string;
  price: number;
  image: string;
  cart: any;
}

export default function CartButton({
  id,
  title,
  price,
  image,
  cart,
}: CartButtonProps) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const router = useRouter();
  const handleClick = async () => {
    const supabase = createClient();
    const { error } = await supabase
      .from("shopping_cart")
      .insert({ id, title, price, image });

    if (error) {
      throw error;
    }

    router.refresh();
    toggleSidebar();
  };
  return (
    <>
      <Button
        onClick={handleClick}
        size="lg"
        color="gray"
        variant="outlined"
        placeholder={undefined}
      >
        Add to shopping cart
      </Button>
      <CartPreview
        openSidebar={openSidebar}
        toggleSidebar={toggleSidebar}
        products={cart}
      />
    </>
  );
}
