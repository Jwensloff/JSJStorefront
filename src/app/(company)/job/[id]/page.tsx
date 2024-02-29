import supabase from "@/src/config/supabaseClient";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";

const getJobDetails = async (id: number) => {
  let { data, error } = await supabase.from("open_jobs").select('')
  .eq("id", `${id}`)

  if (error) {
    throw error.message;
  }
  if (data) {
    console.log(data);
    return data;
  }
};

export default async function JobDetails({ params }: { params: { id: string } }) {

const jobDetails = await getJobDetails(2);

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
