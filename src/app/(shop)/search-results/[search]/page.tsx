import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import { ProductTypes } from "@/src/types";

const getProductData = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
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
    <>
      <Header />
      {searchedProducts?.length === 0 && (
        <div className="h-[70vh] flex justify-center items-center">
          <p className="px-2">
            Sorry, no products match your search. Please try something else!
          </p>
        </div>
      )}
      {searchedProducts && <ProductGrid data={searchedProducts} />}
      <Footer />
    </>
  );
}
