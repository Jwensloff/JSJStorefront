import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { getAllProducts } from "../../lib/data";

export default async function TopRated() {
  const allProducts = await getAllProducts();

  const highestRatedProducts = allProducts?.filter(
    (product: { rate: { rating: number }; category: string }) => {
      if (product.rate.rating >= 4) {
        return product;
      }
    },
  );

  return (
    <div>
      <HeroImage location="top-rated" />
      <ProductGrid data={highestRatedProducts} />
    </div>
  );
}
