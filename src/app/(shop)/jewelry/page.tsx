import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function page() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "jewelery");

  if (error) {
    redirect("/error");
  }

  return (
    <div>
      <HeroImage location={"jewelry"} />
      <ProductGrid data={data} />
    </div>
  );
}
