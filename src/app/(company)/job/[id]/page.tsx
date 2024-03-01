import supabase from "@/src/config/supabaseClient";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import { CareerProps } from "@/src/types";

const getJobDetails = async (id: number) => {
  let { data, error } = await supabase.from("open_jobs").select('')
  .eq("id", `${id}`)

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function JobDetails({ params }: { params: { id: string } }) {

const jobDetails = await getJobDetails(Number(params.id));

const generateJobDetails = (jobDesc: CareerProps | any) => {
  return (
        <div key={jobDesc.id}>
          <h1>{jobDesc.title}</h1>
          <p>{jobDesc.description}</p>
          <p>{jobDesc.location.state}</p>
          <p>{jobDesc.location.country}</p>
          <p>{jobDesc.location.remote ? 'Yes' : 'No'}</p>
          <p>{jobDesc.salary}</p>
          <p>{jobDesc.type}</p>
          <p>{jobDesc.qualifications}</p>
          <p>{jobDesc.responsibilities}</p>
          <p>{jobDesc.benefits}</p>
          <p>{jobDesc.start_date.month}</p>
          <p>{jobDesc.start_date.year}</p>
        </div>
  );
};


  return (
    <div>
      <Header />
      <div>

      {jobDetails && jobDetails?.map((job) => generateJobDetails(job))}
      </div>
      <Footer />
    </div>
  );
  
}
