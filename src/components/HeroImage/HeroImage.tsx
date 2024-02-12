import Image from 'next/image';

interface HeroImageProps {
  text: string;
  src: string;
  alt: string;
}
export default function HeroImage({ text, src, alt }: HeroImageProps) {
  return (
    <div>
      This is the hero image
      <Image src={src} alt={alt} fill />
    </div>
  );
}
