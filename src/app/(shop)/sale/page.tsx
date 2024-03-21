import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { getAllProducts } from "../../lib/data";

export default async function Sale() {
  const allProducts = await getAllProducts();

  const productsOnSale = allProducts?.map((product) => {
    if (product.price <= 100) {
      return product;
    }
  });

  return (
    <div>
      <HeroImage location={"sale"} />
      <ProductGrid data={productsOnSale} />
    </div>
  );
}
