import Image from "next/image";
import Link from "next/link";

export interface IServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  actionLabel: string;
}

function ServiceCard({
  title,
  description,
  image,
  href,
  actionLabel,
}: IServiceCardProps) {
  return (
    <div className="service-card border-[5px] border-white  border-opacity-10 w-full max-w-[393px]">
      <div className="service__image relative w-full h-[324px]">
        <Image fill src={image} alt="icon" className="object-cover" />
      </div>
      <div className="service__content p-4 bg-[#0A0A0A] text-white text-center">
        <h4 className="service__title text-lg font-medium">{title}</h4>
        <p className="service__description mb-4 min-h-[100px] text-xs  text-white text-opacity-80 font-light my-2">
          {description}
        </p>
        <Link
          href={href}
          className="btn btn-outline text-white min-h-[35px] text-sm font-medium h-[35px] rounded w-full"
        >
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {};

export default ServiceCard;
