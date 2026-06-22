import React from "react";
import { GrGallery } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";
import Image from "next/image";

function Section6() {
  return (
    <div>
      <div className="flex justify-between items-center bg-pink-900">
        <div className="h-[200px] w-[600px] text-white font-sans mt-12 ml-12">
          <p className="pb-4 font-bold">Featured Portfolio</p>
          <h1 className="font-extrabold text-[40px] pb-4">
            Let Our Work Speak for Itself
          </h1>
          <p className="pb-4">
            Every project of ours speaks of the mastery of our team over the
            craft. Take a look at our past projects.
          </p>
        </div>
        <div className="flex flex-col jusifty-center items-center gap-6 mr-12">
          <div className="flex items-start gap-6">
            <GrGallery className="font-bold text-2xl text-white" />
            <p className="text-white font-bold">
              {" "}
              Graceful Themes
              <br />
              Get a plethora of jaw-dropping event themes
            </p>
          </div>
          <div className="flex items-start gap-6">
            <BsCashCoin className="font-bold text-2xl text-white" />
            <p className="text-white font-bold">
              Budget Friendly
              <br />
              Plan your event in a budget-friendly manner
            </p>
          </div>
        </div>
      </div>
      <div className="bg-pink-900">
        <div className="flex justify-center gap-6 px-12">
          <div className="h-[260px] w-[280px] relative">
            <Image
              src="/img9.JPG"
              alt="img9"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="h-[260px] w-[280px] relative">
            <Image
              src="/img10.JPG"
              alt="img10"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="h-[260px] w-[280px] relative">
            <Image
              src="/img11.JPG"
              alt="img11"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="h-[260px] w-[280px] relative">
            <Image
              src="/img12.JPG"
              alt="img12"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="flex justify-center gap-6 px-12 mt-10 pb-8">
          <div className="h-[260px] w-[280px] relative">
            <Image
              src="/img4.JPG"
              alt="img4"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="h-[260px] w-[280px] relative">
            <Image
              src="/img7.JPG"
              alt="img7"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="h-[260px] w-[280px] relative">
            <Image
              src="/img6.JPG"
              alt="img6"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="h-[260px] w-[280px] relative">
            <Image
              src="/img5.JPG"
              alt="img5"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
