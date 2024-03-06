import CareersPreview from "@/src/components/Careers/CareersPreview";
import HeroImage from "@/src/components/HeroImage/HeroImage";
import { createClient } from "@/src/utils/supabase/supabaseServer";
import { redirect } from "next/navigation";

export default async function Careers() {
  const supabase = createClient();
  const { data: open_jobs, error } = await supabase
    .from("open_jobs")
    .select("id,title,description");
  if (error) {
    redirect("/error");
  }

  return (
    <div>
      <HeroImage location={"careers-home"} />
      <div className="w-full flex flex-col ">
        <h2 className="text-4xl font-extrabold text-center mt-20">
          Open Positions
        </h2>
        <CareersPreview data={open_jobs} />
      </div>
    </div>
  );
}
