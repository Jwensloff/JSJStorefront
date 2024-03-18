import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { redirect } from "next/navigation";
import { createClient } from "@/src/utils/supabase/supabaseServer";

export default async function Gold() {
  const supabase = createClient();

  const { data: allProducts, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "jewelery");

  if (error) {
    redirect("/error");
  }

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
