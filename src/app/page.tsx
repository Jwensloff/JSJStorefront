import Image from "next/image";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import HeroImage from "../components/HeroImage/HeroImage";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-screen">
      <Header />
      <HeroImage location={"landing"} />
      Hello world This is the landing page.
      <Footer />
    </main>
  );
}
