import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import supabase from "@/src/config/supabaseClient";

const getGold = async () => {
  // await supabase.clearCache();

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

export default async function Gold() {
  const allProducts = await getGold();

  const productsWithGold = allProducts
    ?.filter((product: { title: string } | undefined) => {
      return product?.title.includes("Gold");
    })
    .filter(Boolean); // Filter out undefined values

  return (
    <div>
      <Header />
      <HeroImage location="gold" />
      <ProductGrid data={productsWithGold} />
      <Footer />
    </div>
  );
}
