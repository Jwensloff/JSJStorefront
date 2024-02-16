import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

const getProductData = async () => {
  "use server";
  const response = await fetch(`https://fakestoreapi.com/products`);

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function Gold() {
  const allProducts = await getProductData();

  const productsWithGold = allProducts?.map(
    (product: { title: string; category: string }) => {
      if (
        product.category !== "electronics" &&
        product.title.includes("Gold")
      ) {
        return product;
      }
    },
  );

  return (
    <div>
      <Header />
      <ProductGrid data={productsWithGold} />
      <Footer />
    </div>
  );
}
