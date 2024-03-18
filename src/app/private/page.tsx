// delete if auth is not used
import { redirect } from "next/navigation";

import { createClient } from "@/src/utils/supabase/supabaseServer";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return <p>Hello {data.user.email}</p>;
}
