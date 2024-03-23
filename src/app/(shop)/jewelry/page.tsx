import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../../lib/data";

export default async function page() {
  const data = await getProductsByCategory("jewelery");

  return (
    <div>
      <HeroImage location={"jewelry"} />
      <ProductGrid data={data} />
    </div>
  );
}
