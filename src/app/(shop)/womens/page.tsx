import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import supabase from "@/src/config/supabaseClient";

const getWomensClothing = async () => {
  let { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", "women's clothing");

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function WomensPage() {
  const womensClothing = await getWomensClothing();
  return (
    <div>
      <Header />
      <HeroImage location={"womens"} />
      <ProductGrid data={womensClothing} />
      <Footer />
    </div>
  );
}
