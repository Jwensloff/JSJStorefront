import { Landing } from "../components/main-content/Landing/Landing";
import HeroImage from "../components/main-content/HeroImage/HeroImage";
import { createClient } from "../utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = createClient();
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    redirect("/error");
  }
  return (
    <main className="flex flex-col items-center">
      <HeroImage location={"landing"} />
      <Landing products={data} />
    </main>
  );
}
