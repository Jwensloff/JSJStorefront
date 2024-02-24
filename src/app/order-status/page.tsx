import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import OrderStatus from "@/src/components/OrderStatus/OrderStatus";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <Header />
      <OrderStatus />
      <Footer />
    </div>
  );
}
