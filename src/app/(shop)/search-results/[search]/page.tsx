import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import { ProductTypes } from "@/src/types";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function SearchResults({
  params,
}: {
  params: { search: string };
}) {
  const supabase = createClient();
  const { data: allProducts, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    redirect("/error");
  }

  const searchedProducts = allProducts?.filter((product: ProductTypes) => {
    return (
      params.search &&
      (product.title || product.description || product.category)
        .toLowerCase()
        .includes(params.search.toLowerCase())
    );
  });

  return (
    <>
      <p className="pl-3 py-5 text-lg font-semibold">
        Search Results for: &quot;{params.search}&quot;
      </p>
      <div className="min-h-screen flex flex-col justify-between">
        {searchedProducts?.length === 0 && (
          <div className="flex justify-center items-center">
            <p data-test="search-error" className="px-2">
              Sorry, no products match your search. Please try something else!
            </p>
          </div>
        )}

        {searchedProducts && <ProductGrid data={searchedProducts} />}
      </div>
    </>
  );
}
