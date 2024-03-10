import { createClient } from "@/src/utils/supabase/supabaseServer";
import CartMain from "../../components/ShoppingCart/CartMain/CartMain";
import Loading from "./loading";
import ProductCardContainerSkeleton from "@/src/components/ShoppingCart/ProductCardContainer/ProductCardContainerSkeleton";

export default async function ShoppingCart() {
  const supabase = createClient();
  const { data, error } = await supabase.from("shopping_cart").select();

  if (error) {
    throw error;
  }

  return (
    <>
      <CartMain data={data} />
    </>
  );
}
