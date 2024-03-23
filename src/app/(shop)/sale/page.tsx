import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { getAllProducts } from "../../lib/data";
import { filterSaleItems } from "../../lib/utils";

export default async function Sale() {
  const allProducts = await getAllProducts();

  const productsOnSale = filterSaleItems(allProducts)

  return (
    <div>
      <HeroImage location={"sale"} />
      <ProductGrid data={productsOnSale} />
    </div>
  );
}
