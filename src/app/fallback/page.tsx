import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HeroImage from "@/src/components/HeroImage/HeroImage";

import Link from "next/link";

export default function Fallback() {
  return (
    <>
      <Header />
      <HeroImage location="fallback" />
      <p className="text-center font-medium text-lg py-3">
        BUT feel free to connect with us:
      </p>
      <section className="flex justify-evenly py-5">
        <Link
          href={"https://www.linkedin.com/in/jocelynwensloff/"}
          target="_blank"
          className="hover:text-blue-800 hover:underline text-xl"
        >
          Jocelyn
        </Link>
        <Link
          href={"https://www.linkedin.com/in/scotty-brown-2140b3278/"}
          target="_blank"
          className="hover:text-blue-800 hover:underline text-xl"
        >
          Scotty
        </Link>
        <Link
          href={"https://www.linkedin.com/in/judy0ye/"}
          target="_blank"
          className="hover:text-blue-800 hover:underline text-xl"
        >
          Judy
        </Link>
      </section>
      <div className="flex justify-center mb-1">
        <Link
          className="py-3 px-3 rounded-md font-medium text-lg hover:bg-gray-200 "
          href={"/"}
        >
          Or go back home
        </Link>
      </div>

      <Footer />
    </>
  );
}
