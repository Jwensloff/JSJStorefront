"use client";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Landing } from "../components/Landing/Landing";
import HeroImage from "../components/HeroImage/HeroImage";
// import { getLandingProductData } from "@/apiCalls";}
// fetch all product data

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <HeroImage location={"landing"} />
      <Landing />
      <Footer />
    </main>
  );
}
