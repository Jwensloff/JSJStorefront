import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

const getJewelryData = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/jewelery",
  );

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function page() {
  const data = await getJewelryData();
  return (
    <div>
      <Header />
      <HeroImage location={"jewelry"} />
      <ProductGrid data={data} href={"jewelry"} />
      <Footer />
    </div>
  );
}
