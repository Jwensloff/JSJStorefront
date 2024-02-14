import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import ProductGrid from "@/src/components/ProductGrid/ProductGrid";

const getMensClothing = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/men's clothing",
  );

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
};

export default async function page() {
  const data = await getMensClothing();
  return (
    <div>
      <Header />
      <HeroImage location={"mens"} />
      <ProductGrid data={data}/>
      <Footer />
    </div>
  );
}
