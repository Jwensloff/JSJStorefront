import Image from "next/image";

interface HeroImageProps {
  text: string;
  src: string;
  alt: string;
  textLocation: string;
}

export default function HeroImage({
  text,
  src,
  alt,
  textLocation,
}: HeroImageProps) {
  return (
    <div className="h-[90vh] relative w-screen overflow-hidden">
      <Image src={src} alt={alt} layout="fill" className="object-cover" />
      <p className={`z-10 absolute ${textLocation}`}>{text}</p>
    </div>
  );
}
