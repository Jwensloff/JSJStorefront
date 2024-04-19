import CareersPreview from "@/src/components/main-content/CareersPreview/CareersPreview";
import HeroImage from "@/src/components/main-content/HeroImage/HeroImage";
import { getCareers } from "../../lib/data";

export default async function Careers() {
  const data = await getCareers();
  return (
    <div>
      <HeroImage location={"careers-home"} />
      <div className="w-full flex flex-col ">
        <h2 className="text-4xl font-extrabold text-center mt-20">
          Open Positions
        </h2>
        <CareersPreview data={data} />
      </div>
    </div>
  );
}
