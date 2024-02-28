import supabase from "@/src/config/supabaseClient";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@material-tailwind/react";

export default async function ShoppingCartSymbol() {
  const { data, error } = await supabase.from("shopping_cart").select();

  return (
    <div className="pt-1 md:pt-0">
      <Badge
        aria-label="number of items in cart"
        className="text-[10px] sm:text-xs py-0 min-w-0 min-h-0 sm:min-h-5 sm:min-w-5 "
        content={data?.length}
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
