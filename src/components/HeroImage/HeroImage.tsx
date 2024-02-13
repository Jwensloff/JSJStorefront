import Image from "next/image";

interface HeroImageProps {
  location: string;
}

export default function HeroImage({ location }: HeroImageProps) {
  const innerComponent = () => {
    if (location === "womens") {
      return (
        <div>
          <Image
            src="https://images.pexels.com/photos/886404/pexels-photo-886404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A woman sitting on a car"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute text-white text-9xl h-[80%] left-[3rem] flex flex-col justify-evenly">
            <p>Find</p>
            <p>Your</p>
            <p>Style</p>
          </div>
        </div>
      );
    } else if (location === "mens") {
      return (
        <div>
          <Image
            src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A black and white photo of a stylish man popping his colar"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute w-[30vw] text-white text-8xl bottom-1/2 right-20">
            <p>Be Authentic</p>
          </div>
        </div>
      );
    } else if (location === "jewelry") {
      return (
        <Image
          src="https://images.pexels.com/photos/8003897/pexels-photo-8003897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="A photo showing the bottom half of a woman's face in order to focus on her earrings"
          layout="fill"
          className="object-cover"
        />
      );
    } else if (location === "landing") {
      return (
        <div>
          <Image
            src="https://images.pexels.com/photos/270859/pexels-photo-270859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A woman jumping in front of an umbrella"
            layout="fill"
            className="object-cover"
          />
          <div className="absolute w-screen flex justify-evenly top-1/3">
            <button className=" w-[12rem] h-[4rem] bg-black text-white text-xl">
              Shop Top Rated
            </button>
            <button className=" w-[12rem] h-[4rem] bg-black text-white text-xl">
              Shop Sale
            </button>
            <button className=" w-[12rem] h-[4rem] bg-black text-white text-xl">
              Shop Gold
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="h-[95vh] relative w-screen overflow-hidden">
      {innerComponent()}
    </div>
  );
}
