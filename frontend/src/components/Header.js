import React from 'react';
import { FaEnvelope } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Header() {
  return (
    <div className="w-full h-[50px] font-sans flex justify-between items-center bg-pink-900 px-12 py-4">
      <p className="font-medium text-white">
        One-Stop Shop for Comprehensive Event Planning
      </p>
      <div className="flex gap-4 text-white">
        <div className="flex items-center gap-2">
          <FaEnvelope />
          eventplanners.1@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <BsFillTelephoneFill />
          +92 123456789
        </div>
        <div className="flex items-center gap-2">
          <AiFillInstagram />
          @eventsplanners1
        </div>
      </div>
    </div>
  )
}

export default Header