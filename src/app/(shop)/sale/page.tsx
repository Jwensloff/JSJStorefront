import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function Sale() {
  const supabase = createClient();
  const { data: allProducts, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    redirect("/error");
  }

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
