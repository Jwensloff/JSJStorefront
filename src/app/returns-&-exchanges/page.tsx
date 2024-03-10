import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import ReturnsAndExchanges from "@/src/components/ReturnsAndExchanges/ReturnsAndExchanges";

export default function ReturnAndExchange() {
  return (
    <div className="h-auto sm:h-screen flex flex-col">
      <h1 className="text-center text-lg pt-5 pb-2 sm:text-3xl font-bold">
        Return and Exchanges
      </h1>
      <ReturnsAndExchanges />
    </div>
  );
}
