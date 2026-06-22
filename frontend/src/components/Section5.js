import Image from "next/image";
import React from "react";

function Section5() {
  return (
    <div className="relative flex justify-between items-center mb-10">
      <div className="container mx-auto pt-16 pl-6">
        <p className="mb-2 text-black font-sans font-bold pb-4">
          How Does It Work?
        </p>
        <h1 className="text-5xl font-bold text-black  pb-4">
          4 Simple Steps to a<br />
          Perfect Event
        </h1>
        <p className="font-medium">
          Being a leading event planner in Lahore, our work process targets the
          <br />
          comfort of our clients, providing premium services at their doorstep.
        </p>
        <br />
        <Image
          src="/img8.JPG"
          alt="img8"
          width={500}
          height={250}
          className="rounded-3xl border-6 border-black"
        />
      </div>
      <div className="absolute right-14 top-10 flex flex-col gap-6 ">
        <div className=" h-[120px] w-[650px] bg-black text-white p-6 rounded-4xl flex gap-4">
        <h1 className="font-extrabold text-4xl text-pink-900">01</h1>
          <span className="font-medium text-[20px]">
            Reach out
            <br />
            Give us a call or fill up the booking form on our website
          </span>
        </div>
        <div className="h-[120px] w-[650px] bg-black text-white p-6 rounded-4xl flex gap-4">
        <h1 className="font-extrabold text-4xl text-pink-900">02</h1>
          <span className="font-medium text-[20px]">
            Discuss Your Plan
            <br />
            Consult your event’s details and your ideas with our team
          </span>
        </div>
        <div className="h-[120px] w-[650px] bg-pink-900 text-white p-6 rounded-4xl flex gap-4">
        <h1 className="font-extrabold text-4xl text-pink-300">03</h1>
          <span className="font-medium text-[20px]">
            Choose Your Package
            <br />
            Tailor-design your event package according to your needs
          </span>
        </div>
        <div className="h-[120px] w-[650px] bg-black text-white p-6 rounded-4xl flex gap-4">
        <h1 className="font-extrabold text-4xl text-pink-900">04</h1>
          <span className="font-medium text-[20px]">
            That’s All!
            <br />
            We will plan and design your event and execute it smoothly</span>
        </div>
      </div>
    </div>
  );
}

export default Section5;
