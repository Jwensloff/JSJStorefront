import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

const getWomensClothing = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/women's clothing",
  );

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function WomensPage() {
  const womensClothing = await getWomensClothing();
  /* eslint-disable no-console */
  console.log("count: %d", womensClothing);
  /* eslint-enable no-console */ return (
    <div>
      <Header />
      <HeroImage location={"womens"} />
      <ProductGrid />
      <Footer />
    </div>
  );
}
