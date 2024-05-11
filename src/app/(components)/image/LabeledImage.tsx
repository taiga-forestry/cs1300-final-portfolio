/* eslint-disable react/jsx-props-no-spreading */
import Image, { StaticImageData } from "next/image";

interface LabeledImageProps {
  src: StaticImageData
  label: string
  className: string
  alt: string
  width?: number
  height?: number
}

export default function LabeledImage({
  src, label, className, alt, width, height,
}: LabeledImageProps) {
  const props = {
    ...(width && { width }),
    ...(height && { height }),
  };

  return (
    <div className="relative">
      <Image src={src} className={className} alt={alt} {...props} />
      <div className="w-full h-full grid grid-rows-[1fr_auto] absolute top-0 opacity-0 hover:opacity-100 transition">
        <div />
        <p className="text-14 p-14 bg-black rounded-b-lg opacity-80">
          { label }
        </p>
      </div>
    </div>
  );
}