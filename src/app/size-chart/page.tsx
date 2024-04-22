import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <div>
        <div className="relative w-[95vw] h-[50vh] md:h-[90vh]">
          <Image
            data-test="womens-size-chart"
            src="/sizechart_women.jpg"
            alt="womens-size-chart"
            fill
            objectFit="contain"
          />
        </div>
        <div className="relative w-[95vw] h-[50vh] md:h-[90vh]">
          <Image
            data-test="mens-size-chart"
            src="/sizechart_men.jpg"
            alt="mens-size-chart"
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
