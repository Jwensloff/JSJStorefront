import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import supabase from "@/src/config/supabaseClient";

const getAllProducts = async () => {
  // "use server";
  let { data, error } = await supabase
    .from("products")
    .select('*')
    

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function Sale() {
  const allProducts = await getAllProducts();

  const productsOnSale = allProducts?.map(
    (product) => {
      if (product.price <= 100) {
        return product;
      }
    },
  );

  return (
    <div>
      <Header />
      <HeroImage location={"sale"} />
      <ProductGrid data={productsOnSale} />
      <Footer />
    </div>
  );
}
