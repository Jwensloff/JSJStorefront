import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import supabase from "@/src/config/supabaseClient";

const getJewelryData = async () => {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "jewelery");

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function page() {
  const data = await getJewelryData();
  return (
    <div>
      <Header />
      <HeroImage location={"jewelry"} />
      <ProductGrid data={data} />
      <Footer />
    </div>
  );
}
