import Image, { StaticImageData } from "next/image";
import partiful from "../../../public/partiful/partiful.png";
import wordhippo from "../../../public/wordhippo/wordhippo.png";
import grapes from "../../../public/grapes/grapes.png";

interface MainProjectProps {
  title: string
  description: string
  src: string
  href: string
}

export default function MainProject({
  title, description, src, href,
}: MainProjectProps) {
  const imagesMap = {
    partiful,
    grapes,
    wordhippo,
  } as Record<string, StaticImageData>;

  return (
    <a className="l-column" href={href}>
      <div className="bg-off-white rounded-lg">
        <Image src={imagesMap[src]} className="shadow rounded-lg transition hover:opacity-90" alt={`Featured project image for ${title}`} />
      </div>
      <figcaption className="p-14">
        <h1 className="text-20">
          { title }
        </h1>
        <p className="text-14">
          { description }
        </p>
      </figcaption>
    </a>
  );
}
