import React from "react";
import PropTypes from "prop-types";

function AddressCard(props: {
  branch?: string;
  address: string;
  mapQuery?: string;
}) {
  return (
    <div className="flex items-center space-x-4 min-h-[174px]">
      <div className="w-full max-w-[200px] min-h-[174px] bg-white">
        <iframe
          width="200"
          height="174"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?width=200&height=174&hl=en&q=${encodeURIComponent(
            props?.mapQuery || props?.address
          )}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}
        ></iframe>{" "}
      </div>
      <div className="p-4 bg-brand-dark-2 min-h-[174px]">
        <h4 className="mb-4 font-medium text-2xl text-white tracking-[2%]">
          {props?.branch}
        </h4>
        <p className="font-light text-base text-white tracking-[2%] leading-[30px]">
          {props?.address}
        </p>
      </div>
    </div>
  );
}

AddressCard.propTypes = {};

export default AddressCard;
