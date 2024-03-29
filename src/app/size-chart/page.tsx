import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <div>
        <div className="relative w-[95vw] h-[50vh] md:h-[90vh]">
          <Image
            src="/sizechart_women.jpg"
            alt="womens size chart"
            fill
            objectFit="contain"
          />
        </div>
        <div className="relative w-[95vw] h-[50vh] md:h-[90vh]">
          <Image
            src="/sizechart_men.jpg"
            alt="womens size chart"
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
