import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Header />
      <div className="relative w-[90%] h-[30vh] md:h-[50vh]">
        <Image
          src="/sizechart_women.jpg"
          alt="womens size chart"
          fill
          objectFit="contain"
        />
      </div>
      <div className="relative w-[90%] h-[30vh] md:h-[50vh]">
        <Image
          src="/sizechart_men.jpg"
          alt="womens size chart"
          fill
          objectFit="contain"
        />
      </div>
      <Footer />
    </div>
  );
}
