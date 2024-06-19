import Image from "next/image";
import React from "react";
import { v4 } from "uuid";

const partners = [
  "wb.svg",
  "zenith.jpg",
  "efcc.jpg",
  "evercare.jpg",
  "aedc.png",
  "armlife.png",
  "nasco.svg",
  "fusho.jpg",
  "undp.png",
  "oando.png",
];

function Partners() {
  return (
    <section id="partners" className="bg-white">
      <div className="container py-5">
        <h5 className="text-2xl font-[300] text-center mb-4">Trusted by </h5>
        <div className="flex justify-evenly gap-4 flex-wrap">
          {partners.map((partner) => (
            <Image
              data-aos="zoom-in"
              data-aos-anchor-placement="bottom-bottom"
              src={`/img/partners/${partner}`}
              alt={partner}
              width={55}
              height={55}
              key={`${v4()}_${partner}`}
              className="cursor-pointer hover:scale-125 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

Partners.propTypes = {};

export default Partners;
