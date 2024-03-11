// "use client";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import OrderSummary from "@/src/components/OrderSummary/OrderSummary";
import OrderSummarySkeleton from "@/src/components/OrderSummary/OrderSummarySkeleton";
import ProductCardContainerSkeleton from "@/src/components/ShoppingCart/ProductCardContainer/ProductCardContainerSkeleton";
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
