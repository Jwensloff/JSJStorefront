import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import supabase from "@/src/config/supabaseClient";

const getTopRated = async () => {
  // "use server";
  let { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function TopRated() {
  const allProducts = await getTopRated();

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
