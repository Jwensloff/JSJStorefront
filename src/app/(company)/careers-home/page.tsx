import CareersPreview from "../../../components/Careers/CareersPreview";
import HeroImage from "../../../components/HeroImage/HeroImage";
import { createClient } from "../../../utils/supabase/supabaseClient";
import React from "react";

const getCareersData = async () => {
  // "use server";

  const supabase = createClient();

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
      <HeroImage location={"careers-home"} />
      <div className="w-full flex flex-col ">
        <h2 className="text-4xl font-extrabold text-center mt-20">
          Open Positions
        </h2>
        <CareersPreview data={careers} />
      </div>
    </div>
  );
}
