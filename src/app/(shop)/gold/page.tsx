import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../../lib/data";

export default async function Gold() {
  const goldProducts = await getProductsByCategory("jewelery");

  return (
    <div>
      <HeroImage location="gold" />
      <ProductGrid data={goldProducts} />
    </div>
  );
}
