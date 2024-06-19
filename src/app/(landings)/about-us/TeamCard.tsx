import Image from "next/image";

function TeamCard({
  src,
  name,
  position,
}: {
  src: string;
  name?: string;
  position?: string;
}) {
  return (
    <div className="leader flex flex-col gap-4">
      <div className="w-full relative h-[426px]">
        <Image
          fill
          sizes="100vw"
          src={src}
          alt={name || "team member card"}
          className="object-cover object-top"
        />
      </div>

      <div className="content flex flex-col gap-10px">
        <h6 className="text-2xl font-medium leading-[30px] text-white">{name}</h6>
        <p className="text-xl font-light leading-[25px] text-white">{position}</p>
      </div>
    </div>
  );
}

export default TeamCard;
