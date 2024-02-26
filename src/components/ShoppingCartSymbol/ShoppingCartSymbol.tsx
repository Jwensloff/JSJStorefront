import supabase from "@/src/config/supabaseClient";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "@material-tailwind/react";

export default async function ShoppingCartSymbol() {
  const { data, error } = await supabase.from("shopping_cart").select();
  console.log("data", data)
  return (
    <div>
      <Badge content={data?.length}>
        <FontAwesomeIcon aria-label="shopping cart" className="sm:" size="2x" icon={faCartShopping} />
      </Badge>
    </div>
  );
}
