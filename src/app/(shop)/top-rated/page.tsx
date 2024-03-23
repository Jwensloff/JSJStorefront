import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { getAllProducts } from "../../lib/data";
import { filterHighestRated } from "../../lib/utils";

export default async function TopRated() {
  const allProducts = await getAllProducts();

  const highestRatedProducts = filterHighestRated(allProducts)

  return (
    <div>
      <HeroImage location="top-rated" />
      <ProductGrid data={highestRatedProducts} />
    </div>
  );
}
