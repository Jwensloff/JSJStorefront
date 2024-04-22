import { CareerProps } from "@/src/app/lib/definitions";
import { Button } from "../../../../tailwind";
import { getIndividualJob } from "@/src/app/lib/data";
import {
  formatJobQualifications,
  formatJobResponsibilites,
  formatJobBenefits,
} from "@/src/app/lib/utils";

export default async function JobDetails({
  params,
}: {
  params: { id: string };
}) {
  const data = await getIndividualJob(params);
  const generateJobDetails = (jobDesc: CareerProps) => {
    const formattedJobQ = formatJobQualifications(jobDesc);

    const formattedJobR = formatJobResponsibilites(jobDesc);

    const formattedBenefits = formatJobBenefits(jobDesc);

    return (
      <div
        data-test="individual-job"
        key={jobDesc.id}
        className="flex flex-col gap-5 xl:w-1/2"
      >
        <h2 className="font-extrabold text-4xl">{jobDesc.title}</h2>
        <div className="flex flex-col gap-2 md:flex-row">
          <p className="font-bold">Location:</p>
          <p>
            {jobDesc.location.state}, {jobDesc.location.country}
          </p>
          <p className="font-bold">Remote: </p>
          <p>{jobDesc.location.remote ? "Yes" : "No"}</p>
          <p className="font-bold">Job Type:</p>
          <p>{jobDesc.type}</p>
          <p className="font-bold">Salary:</p>
          <p>{jobDesc.salary}</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Expected Start: </p>
          <p>
            {" "}
            {jobDesc.start_date.month} - {jobDesc.start_date.year}
          </p>
        </div>
        <p>{jobDesc.description}</p>
        <p className="font-bold">Responsibilities -</p>
        <ul data-test="responsibilities-list">
          {formattedJobR.map((item: string, index: number) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <p className="font-bold">Qualifications -</p>
        <ul data-test="qualifications-list">
          {formattedJobQ.map((item: string, index: number) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <p className="font-bold">Benefits -</p>
        <ul data-test="benefits-list">
          {formattedBenefits.map((item: string, index: number) => (
            <li key={index} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <a href="/fallback">
          <Button
            data-test="apply-btn"
            color="blue"
            className="w-1/2 mt-10"
            placeholder={undefined}
          >
            APPLY
          </Button>
        </a>
      </div>
    );
  };

  return (
    <div>
      <div className="m-20 flex flex-col items-center">
        {data && data?.map((job) => generateJobDetails(job))}
      </div>
    </div>
  );
}
