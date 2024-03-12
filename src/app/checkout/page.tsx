import OrderSummary from "@/src/components/OrderSummary/OrderSummary";
import { createClient } from "@/src/utils/supabase/supabaseServer";

export default async function Checkout() {
  const supabase = createClient();
  const { data, error } = await supabase.from("shopping_cart").select();

  if (error) {
    throw error;
  }
  return (
    <div className="flex flex-col py-4 ">
      <h1 className="text-center text-lg sm:text-2xl font-bold mb-6">
        Checkout
      </h1>
      <OrderSummary data={data} />
    </div>
  );
}
