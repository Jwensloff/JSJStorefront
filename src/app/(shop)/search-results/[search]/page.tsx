import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import { ProductTypes } from "@/src/types";
import supabase from "@/src/config/supabaseClient";

const getProductData = async () => {
  let { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function SearchResults({
  params,
}: {
  params: { search: string };
}) {
  const allProducts = await getProductData();

  const searchedProducts = allProducts?.filter((product: ProductTypes) => {
    return (
      params.search &&
      (product.title || product.description || product.category)
        .toLowerCase()
        .includes(params.search.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {searchedProducts?.length === 0 && (
        <div className="flex justify-center items-center">
          <p data-test="search-error" className="px-2">
            Sorry, no products match your search. Please try something else!
          </p>
        </div>
      )}
      {searchedProducts && <ProductGrid data={searchedProducts} />}
      <Footer />
    </div>
  );
}
