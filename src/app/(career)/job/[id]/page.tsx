import supabase from "@/src/config/supabaseClient";
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";

const getJobDetails = async () => {
  let { data, error } = await supabase.from("open_jobs").select("*");

  if (error) {
    throw error;
  }
  if (data) {
    return data;
  }
};

export default async function JobDetails() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
