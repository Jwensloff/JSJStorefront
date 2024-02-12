import HeroImage from "@/src/components/HeroImage/HeroImage";

export default function WomensPage() {
  return (
    <div>
      This is the shop womens page
      <HeroImage
        alt={"A woman sitting on a car"}
        src={"/woman_car.jpg"}
        text={`Find Your Style`}
        textDecoration="h-[50vh] text-white text-7xl"
        textContainerRules="w-[50vw] top-1/3 left-2/3 -translate-x-1/4 -translate-y-1/2"
      />
    </div>
  );
}
