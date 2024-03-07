import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import OrderStatuses from "@/src/components/OrderStatuses/OrderStatuses";

export default function OrderStatus() {
  return (
    <div className="h-[80vh] flex flex-col justify-center">
      <OrderStatuses />
    </div>
  );
}
