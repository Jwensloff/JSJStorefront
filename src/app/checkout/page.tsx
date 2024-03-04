import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import OrderSummary from "@/src/components/OrderSummary/OrderSummary";

export default function Checkout() {
  return (
    <>
      <h1 className="text-center text-lg sm:text-2xl font-bold mb-6">
        Checkout
      </h1>
      <OrderSummary />
    </>
  );
}
