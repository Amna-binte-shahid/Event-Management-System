import Image from "next/image";
import React from "react";

function Section7() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-6 md:px-12 lg:px-20 py-12">

      {/* LEFT SECTION */}
      <div className="text-black font-sans w-full md:w-1/2">
        <p className="pb-4 font-bold text-pink-900">Why Choose Us?</p>

        <h1 className="font-extrabold text-3xl md:text-[38px] lg:text-[42px] pb-4 leading-tight">
          All-in-One Solution for Your Events
        </h1>

        <p className="pb-4 text-sm md:text-base leading-6">
          Events Planner boasts a vast list of vendors, suppliers and caterers,
          enabling us to provide premium event management services for any scale.
          Our services include:
        </p>

        {/* LISTS */}
        <div className="flex gap-8 pb-4 flex-wrap text-sm md:text-base">
          <ul className="space-y-1">
            <li>Budget Setting</li>
            <li>Procurement</li>
            <li>Lighting</li>
            <li>Decorations</li>
            <li>Savory Food</li>
          </ul>

          <ul className="space-y-1">
            <li>Event Management</li>
            <li>DJ and Music</li>
            <li>Photography</li>
            <li>And More</li>
          </ul>
        </div>

        {/* REVIEW BOX */}
        <div className="bg-black rounded-2xl p-5 w-full max-w-[500px] mt-6">
          <p className="text-white text-xs md:text-sm leading-6">
            My friend suggested Event Planner for my wedding room decoration and
            I am extremely satisfied with their services. They decorated exactly
            the way I imagined and the best part—very affordable!
            <br />
            <span className="font-semibold">— Adeel Asif</span>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center">

        <div className="h-[400px] w-[220px] md:h-[480px] md:w-[250px] lg:h-[520px] lg:w-[280px] relative">
          <Image
            src="/img11.JPG"
            alt="img11"
            fill
            className="object-cover rounded-2xl border-4 border-black"
          />
        </div>

        <div className="h-[400px] w-[220px] md:h-[480px] md:w-[250px] lg:h-[520px] lg:w-[280px] relative">
          <Image
            src="/img12.JPG"
            alt="img12"
            fill
            className="object-cover rounded-2xl border-4 border-black"
          />
        </div>

      </div>
    </div>
  );
}

export default Section7;
