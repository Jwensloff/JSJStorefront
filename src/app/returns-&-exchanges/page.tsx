import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import ReturnsAndExchanges from "@/src/components/ReturnsAndExchanges/ReturnsAndExchanges";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <Header />
      <ReturnsAndExchanges />
      <Footer />
    </div>
  );
}
