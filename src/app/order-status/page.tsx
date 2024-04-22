import OrderStatuses from "@/src/components/main-content/OrderStatuses/OrderStatuses";

export default function OrderStatus() {
  return (
    <div className="h-full gap-28 sm:gap-0 sm:h-screen flex flex-col ">
      <h1
        data-test="order-status-text"
        className="text-center text-xl pt-12 pb-2 sm:pt-5 sm:text-3xl font-bold"
      >
        View Order Status
      </h1>
      <OrderStatuses />
    </div>
  );
}
