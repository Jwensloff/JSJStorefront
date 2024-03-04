import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function page() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "men's clothing");

  if (error) {
    redirect("/error");
  }
  return (
    <div>
      <HeroImage location={"mens"} />
      <ProductGrid data={data} />
    </div>
  );
}
