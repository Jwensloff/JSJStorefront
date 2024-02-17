"use client";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";
import { ProductTypes } from "@/src/types";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function SearchResults() {
  const [allProducts, setAllProducts] = useState<ProductTypes[]>();
  const searchParams = useSearchParams();
  const search = searchParams?.get("search");

  useEffect(() => {
    const getUpdatedProductList = () => {
      if (typeof window !== "undefined") {
        let localStorage = window.localStorage;
        let productArray = localStorage.getItem("allProductsArray");

        if (productArray) {
          return JSON.parse(productArray);
        }
      }
    };

    const updatedProducts = getUpdatedProductList();
    setAllProducts(updatedProducts);
  }, []);

  const searchedProducts = allProducts?.filter((product) => {
    return (
      search &&
      (product.title || product.description || product.category)
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        {searchedProducts?.length === 0 && (
          <p className="px-2">
            Sorry, no products match your search. Please try something else!
          </p>
        )}
        {searchedProducts && <ProductGrid data={searchedProducts} />}
      </Suspense>
      <Footer />
    </>
  );
}
