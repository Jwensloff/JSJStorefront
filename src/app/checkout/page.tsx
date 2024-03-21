import OrderSummary from "@/src/components/main-content/OrderSummary/OrderSummary";
import { getShoppingCartItems } from "../lib/data";

export default async function Checkout() {
  const data = await getShoppingCartItems();

  return (
    <div className="flex flex-col py-4 ">
      <h1 className="text-center text-lg sm:text-2xl font-bold mb-6">
        Checkout
      </h1>
      <OrderSummary data={data} />
    </div>
  );
}
