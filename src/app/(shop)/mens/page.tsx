import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import supabase from "@/src/config/supabaseClient";

const getMensClothing = async () => {
  // await supabase.clearCache();

  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "men's clothing");

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function page() {
  const data = await getMensClothing();
  // console.log(data)
  return (
    <div>
      <HeroImage location={"mens"} />
      <ProductGrid data={data} />
    </div>
  );
}
