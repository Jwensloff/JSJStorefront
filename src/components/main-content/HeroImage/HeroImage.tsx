import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            fill
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
            fill
            className="object-cover z-0"
          />
          <p className="absolute top-[30%] left-[20%] z-10 text-white text-6xl sm:text-9xl">
            Be <br></br> Auth
            <span className="md:hidden">-</span>
            <br className="md:hidden"></br>
            entic
          </p>
          {/* </div> */}
        </div>
      );
    } else if (location === "jewelry") {
      return (
        <div>
          <Image
            src="https://images.pexels.com/photos/8003897/pexels-photo-8003897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A photo showing the bottom half of a woman's face in order to focus on her earrings"
            fill
            className="object-cover"
          />
          <div className="absolute text-white text-9xl h-[50vh] flex flex-col justify-between left-40 top-10">
            <p>Just</p>
            <p>Go</p>
            <p>For</p>
            <p>It</p>
          </div>
        </div>
      );
    } else if (location === "landing") {
      return (
        <div>
          <Image
            data-test="landing-page-hero"
            src="https://images.pexels.com/photos/270859/pexels-photo-270859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A woman jumping in front of an umbrella"
            fill
            className="object-cover"
          />
          <div className="absolute w-full flex md:flex-row md:justify-evenly flex-col items-center gap-20 top-1/3">
            <Link
              data-test="top-rated-btn"
              href={`/top-rated`}
              className="flex justify-center items-center w-[12rem] h-[4rem] text-center bg-black text-white text-xl transform hover:scale-110"
            >
              Shop Top Rated
            </Link>
            <Link
              data-test="sale-btn"
              href={`/sale`}
              className="flex justify-center items-center w-[12rem] h-[4rem] text-center bg-black text-white text-xl transform hover:scale-110"
            >
              Shop Sale
            </Link>
            <Link
              data-test="gold-btn"
              href={`/gold`}
              className="flex justify-center items-center w-[12rem] h-[4rem]  bg-black text-white text-xl transform hover:scale-110"
            >
              Shop Gold
            </Link>
          </div>
        </div>
      );
    } else if (location === "fallback") {
      return (
        <div>
          <div className="flex flex-col">
            <h1
              data-test="fallback-hero-text"
              className="z-10 text-center font-semibold text-3xl py-3 "
            >
              Sorry, you have reached the end of the JSJ experience.{" "}
            </h1>
          </div>
          <Image
            data-test="fallback-hero"
            src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A dog peaking up from below"
            fill
          />
        </div>
      );
    } else if (location === "sale") {
      return (
        <div>
          <Image
            src="https://images.pexels.com/photos/7318909/pexels-photo-7318909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A woman holding multiple shopping bags"
            fill
            className="object-cover"
          />
          <div className="absolute text-red-600	text-9xl h-[50vh] flex flex-col text-right justify-between right-20 top-80">
            <p>Treat</p>
            <p>Yo</p>
            <p>Self</p>
          </div>
        </div>
      );
    } else if (location === "gold") {
      return (
        <div>
          <Image
            src="https://images.pexels.com/photos/5655011/pexels-photo-5655011.jpeg"
            alt="A woman holding multiple shopping bags"
            fill
            className="object-cover"
          />
          <div className="absolute text-white	text-9xl h-[50vh] flex flex-col text-right justify-between left-10 top-20">
            <p>Indulge</p>
          </div>
        </div>
      );
    } else if (location === "top-rated") {
      return (
        <div>
          <Image
            src="https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A woman holding multiple shopping bags"
            fill
            className="object-cover"
          />
        </div>
      );
    } else if (location === "careers-home") {
      return (
        <div data-test="career-page-hero">
          <Image
            src="https://images.pexels.com/photos/4008717/pexels-photo-4008717.jpeg"
            alt="A woman typing on a laptop"
            fill
            className="object-cover"
          />
          <div className="absolute text-white	text-6xl md:text-9xl h-[30vh] flex flex-col text-right justify-between right-20 top-80">
            <p>Grow</p>
            <p>Collaborate</p>
            <p>Achieve</p>
          </div>
        </div>
      );
    }
  };

  return <div className="h-[95vh] w-full relative">{innerComponent()}</div>;
}
