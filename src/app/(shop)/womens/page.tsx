import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../../lib/data";

export default async function WomensPage() {
  const data = await getProductsByCategory("women's clothing");

  return (
    <div>
      <HeroImage location={"womens"} />
      <ProductGrid data={data} />
    </div>
  );
}
