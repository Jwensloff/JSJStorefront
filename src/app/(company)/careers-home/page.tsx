import CareersPreview from "@/src/components/Careers/CareersPreview";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import supabase from "@/src/config/supabaseClient";

const getCareersData = async () => {
  // "use server";

  let { data: open_jobs, error } = await supabase
    .from("open_jobs")
    .select("id,title,description");

  if (error) {
    throw error;
  }
  if (open_jobs) {
    return open_jobs;
  }
};

export default async function Careers() {
  const careers = await getCareersData();
  // await console.log(careers);
  // how do i await a console.log?

  return (
    <div>
      <Header />
      {/* Need a hero section for careers */}
      <CareersPreview data={careers} />
      <Footer />
    </div>
  );
}
