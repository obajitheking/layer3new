"use client";
import ReactPlayer from "react-player";

function VideoCard({
  url,
  text,
}: {
  url?: string;
  text?: {
    testimony?: string;
    name?: string;
    company?: string;
  };
}) {
  const { testimony, name, company } = text || {};
  return (
    <div className="w-full min-h-[420px] lg:h-[400px]">
      {url && (
        <div className="h-full w-full flex-shrink-0 px-4 bg-brand-dark-2">
          <ReactPlayer
            controls
            className=""
            width={"100%"}
            height={"400px"}
            url={url}
          />
        </div>
      )}
      {text && (
        <div className="min-h-[420px] p-4 flex flex-col justify-between bg-brand-dark-2">
          <p className="text-lg text-white font-light mb-6">“{testimony}”</p>
          <div>
            <h3 className="text-white text-2xl font-normal mb-2">{name}</h3>
            <p className="text-base font-light text-white text-opacity-80">
              {company}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

VideoCard.propTypes = {};

export default VideoCard;
