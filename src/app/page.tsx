import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Landing } from "../components/Landing/Landing";
import supabase from "../config/supabaseClient";

// fetch all product data
const getLandingProductData = async () => {
  // "use server";
  let { data, error } = await supabase.from("products").select("*");

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function Home() {
  const products = await getLandingProductData();

  return (
    <main className="flex flex-col items-center w-screen">
      <Header />
      <Landing products={products} />
      <Footer />
    </main>
  );
}
