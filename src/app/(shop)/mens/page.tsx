import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

export default function page() {
  return (
    <div>
      <Header />
      <HeroImage location={"mens"} />
      <ProductGrid />
      <Footer />
    </div>
  );
}
