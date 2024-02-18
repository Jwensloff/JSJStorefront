import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Landing } from "../components/Landing/Landing";
import { useState } from "react";

// fetch all product data
const getLandingProductData = async () => {
  // "use server";
  const response = await fetch(`https://fakestoreapi.com/products`);

  if (!response.ok) {
    throw new Error("Oops, something went wrong");
  }

  return response.json();
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
