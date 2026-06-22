import Image from "next/image";
import React from "react";
import { FaPeopleLine } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiPartyFlags } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";

function Section2() {
  return (
    <div className="relative w-full h-[579px] flex items-center">
      <Image src="/Image3.JPG" alt="img3" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300/100 "></div>
      <div className="relative container mx-auto">
        <p className="mb-2 text-black font-sans font-bold pb-4">
          Reach Out Now!
        </p>
        <h1 className="text-5xl font-bold text-black pb-4">
          Plan your Event <br />
          to Perfection
        </h1>
        <p className="font-medium">
          Reach Out Now! Plan your Event to Perfection Get customized design and
          <br />
          management services for your event at an affordable cost. Reach out
          <br />
          now to elevate your event’s charm.
        </p>
        <div className="flex  justify-between items-center absolute gap-6 mt-7.5 ml-25 h-[130px] w-[1100px] bg-black text-white p-6 rounded-3xl">
          <div className="flex items-start gap-2">
            <FaPeopleLine className="text-2xl mb-1" />
            <span className="font-bold">Creative Staff<br/>
            Giving life to your ideas</span>
          </div>

          <div className="flex items-start gap-2">
            <FaMoneyBillAlt className="text-2xl mb-1" />
            <span className="font-bold">Cost-effective<br/>
            Budget-friendly options</span>
          </div>

          <div className="flex items-start gap-2">
            <GiPartyFlags className="text-2xl" />
            <p className="font-bold">Endless Options<br/>
            Flexible decor ideas
            </p>
          </div>

          <div className="flex items-center gap-2">
            <BsFillTelephoneFill className="text-2xl" />
            <span className="font-bold">+92 123456789</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
