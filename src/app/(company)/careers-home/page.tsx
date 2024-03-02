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
        <p className="m-10 self-center lg:w-1/2 text-4xl">
          At JSJ, we`&apos;`re constantly innovating and expanding as a leading
          e-commerce platform. We`&apos;`re looking for passionate individuals
          who are eager to learn and contribute to our growth trajectory. If you
          thrive in a fast-paced environment and have a strong interest in
          achieving goals, then JSJ could be the perfect fit for you. We offer a
          collaborative team environment where you can develop your skills
          alongside talented colleagues. Your expertise would be a valuable
          asset as we continue to scale and shape the future of e-commerce. Are
          you ready to join a company that`&apos;`s making waves in the
          industry?
        </p>
        <h2 className="text-4xl font-extrabold text-center m-10">
          Open Positions
        </h2>
        <CareersPreview data={careers} />
      </div>
      <Footer />
    </div>
  );
}
