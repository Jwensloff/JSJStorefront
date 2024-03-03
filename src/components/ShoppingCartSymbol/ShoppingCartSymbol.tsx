"use client";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@material-tailwind/react";
import { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function ShoppingCartSymbol({
  dataLength,
}: {
  dataLength: number;
}) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const channel = supabase
      .channel("shopping cart length")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "shopping_cart",
        },
        () => {
          router.refresh();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, router]);

  return (
    <div className="pt-3 md:pt-1">
      <Badge
        aria-label="number of items in cart"
        className="text-[10px] sm:text-xs py-0 min-w-0 min-h-0 sm:min-h-5 sm:min-w-5 "
        content={dataLength}
      >
        <FontAwesomeIcon
          aria-label="shopping cart"
          className="text-xl sm:text-2xl md:text-3xl"
          icon={faCartShopping}
        />
      </Badge>
    </div>
  );
}
