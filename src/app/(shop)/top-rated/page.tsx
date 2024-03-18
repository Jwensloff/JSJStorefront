import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function TopRated() {
  const supabase = createClient();
  const { data: allProducts, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    redirect("/error");
  }

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
