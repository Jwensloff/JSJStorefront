import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

const getTopRated = async () => {
  "use server";
  const response = await fetch(`https://fakestoreapi.com/products`);

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function Sale() {
  const allProducts = await getTopRated();

  const productsWithGold = allProducts?.map((product: { rating: string }) => {
    if (product.rating !== "electronics") {
      return product;
    }
  });

  return (
    <div>
      <Header />
      <ProductGrid data={productsWithGold} />
      <Footer />
    </div>
  );
}
