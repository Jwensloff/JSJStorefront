import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { getProductsByCategory } from "../../lib/data";

export default async function Gold() {
  const allProducts = await getProductsByCategory("jewelery");

  const productsWithGold = allProducts
    ?.filter((product: { title: string } | undefined) => {
      return product?.title.includes("Gold");
    })
    .filter(Boolean);

  return (
    <div>
      <HeroImage location="gold" />
      <ProductGrid data={productsWithGold} />
    </div>
  );
}
