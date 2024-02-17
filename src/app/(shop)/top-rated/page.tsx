import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

const getTopRatedProducts = async () => {
  "use server";
  const response = await fetch(`https://fakestoreapi.com/products`);

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function TopRated() {
  const allProducts = await getTopRatedProducts();

  const highestRatedProducts = allProducts?.filter(
    (product: { rating: { rate: number }; category: string }) => {
      if (product.rating.rate >= 4 && product.category !== "electronics") {
        return product;
      }
    },
  );

  return (
    <div>
      <Header />
      <HeroImage location="top-rated" />
      <ProductGrid data={highestRatedProducts} />
      <Footer />
    </div>
  );
}
