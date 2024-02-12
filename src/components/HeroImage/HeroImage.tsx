import Image from "next/image";

interface HeroImageProps {
  text: string;
  src: string;
  alt: string;
  textDecoration: string;
  textContainerRules: string;
}

export default function HeroImage({
  text,
  src,
  alt,
  textDecoration,
  textContainerRules,
}: HeroImageProps) {
  return (
    <div className="h-[95vh] relative w-screen overflow-hidden">
      <Image src={src} alt={alt} layout="fill" className="object-cover" />
      <div className={`z-10 absolute ${textContainerRules}`}>
        <p className={`${textDecoration}`}>{text}</p>
      </div>
    </div>
  );
}
