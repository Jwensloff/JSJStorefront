import { Landing } from "../components/main-content/Landing/Landing";
import HeroImage from "../components/main-content/HeroImage/HeroImage";
import { getAllProducts } from "./lib/data";

export default async function Home() {
  const data = await getAllProducts();

  return (
    <main className="flex flex-col items-center">
      <HeroImage location={"landing"} />
      <Landing products={data} />
    </main>
  );
}
