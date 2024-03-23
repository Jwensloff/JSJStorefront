import { getAllProducts } from "@/src/app/lib/data";
import ProductGrid from "@/src/components/main-content/ProductGrid/ProductGrid";
import { ProductTypes } from "@/src/types";
import { searchProducts } from "@/src/app/lib/utils";

export default async function SearchResults({
  params,
}: {
  params: { search: string };
}) {
  const allProducts = await getAllProducts();

  const searchedProducts = searchProducts(allProducts, params)

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
