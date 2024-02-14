import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

const getWomensClothing = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function WomensPage() {
  const womensClothing = await getWomensClothing();
  return (
    <div>
      <Header />
      <HeroImage location={"womens"} />
      <ProductGrid data={womensClothing} href={"womens"} />
      <Footer />
    </div>
  );
}
