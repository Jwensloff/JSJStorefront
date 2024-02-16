import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

const getAllProducts = async () => {
  "use server";
  const response = await fetch(`https://fakestoreapi.com/products`);

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function Sale() {
  const allProducts = await getAllProducts();

  const productsOnSale = allProducts?.map(
    (product: { price: number; category: string }) => {
      if (product.category !== "electronics" && product.price <= 100) {
        return product;
      }
    },
  );

  return (
    <div>
      <Header />
      <ProductGrid data={productsOnSale} />
      <Footer />
    </div>
  );
}
