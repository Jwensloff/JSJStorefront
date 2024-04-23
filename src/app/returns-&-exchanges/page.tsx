import ReturnsAndExchanges from "@/src/components/main-content/ReturnsAndExchanges/ReturnsAndExchanges";

export default function ReturnAndExchange() {
  return (
    <div className="h-auto sm:h-screen flex flex-col">
      <h1
        data-test="returns-exchanges-text"
        className="text-center text-lg pt-5 pb-2 sm:text-3xl font-bold"
      >
        Return and Exchanges
      </h1>
      <ReturnsAndExchanges />
    </div>
  );
}
