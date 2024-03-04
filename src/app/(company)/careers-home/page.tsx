import CareersPreview from "@/src/components/Careers/CareersPreview";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";
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

  return (
    <div>
      <Header />
      <HeroImage location={"careers-home"} />
      <div className="w-full flex flex-col ">
        <h2 className="text-4xl font-extrabold text-center mt-20">
          Open Positions
        </h2>
        <CareersPreview data={careers} />
      </div>
      <Footer />
    </div>
  );
}
