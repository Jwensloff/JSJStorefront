import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function WomensPage() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "women's clothing");

  if (error) {
    redirect("/error");
  }

  return (
    <div>
      <HeroImage location={"womens"} />
      <ProductGrid data={data} />
    </div>
  );
}
