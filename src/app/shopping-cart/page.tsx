import { createClient } from "@/src/utils/supabase/supabaseServer";
import CartMain from "../../components/main-content/shopping-cart/CartMain/CartMain";

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
