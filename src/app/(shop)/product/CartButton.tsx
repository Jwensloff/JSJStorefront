"use client";

import { useState } from "react";
import { Button } from "@/src/tailwind";

export default function CartButton() {
  const handleClick = () => {
    console.log("I was clicked");
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
