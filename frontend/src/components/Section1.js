import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
function Section1() {
  return (
    <div className="flex justify-between item-center">
     
      <div className="p-12 ">
       
        <Image
          src="/img2.JPG"
          alt="img2"
          width={600}
          height={600}
          className="object-cover rounded-4xl border-6 border-black"
        />
      </div>
      <div className="h-[600px] w-[650px] font-sans pl-0">
        
        <p className="text-pink-800 text-3xl font-bold pb-4 pt-20">
          
          Who We Are
        </p>
        <h1 className="font-extrabold text-gray-700 text-5xl pb-4">
         
          Best Event Management <br /> Company in Lahore
        </h1>
        <p>
        
          With a handpicked team of specialist event designers, managers, and,
          planners, <br /> we offer a complete spectrum of event management
          services, ranging from the <br /> tiniest detail to crafting a
          complete event. Our event planners in Lahore spare no <br /> effort to
          ensure unparalleled services to enhance your event’s spectacle. Be it
          a <br /> small or large event, day or night, we will be with you from
          budget setting to <br /> execution and procurement, leaving you
          relaxed and free to attend to your guests.
        </p>
        <div className="flex items-center gap-2 mt-8 mr-8">
          
          <Button className="bg-pink-900 h-[70px] w-[200px] text-pink-300 font-extrabold hover:bg-black hover:text-white rounded-4xl">
           
            <CiCalendarDate /> 10 Years Experience
          </Button>
          <Link href="/about">
            
            <Button className="bg-pink-900 h-[70px] w-[200px] text-pink-300 font-extrabold hover:bg-black hover:text-white px-6 py-4 rounded-4xl">
              
              More About Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Section1;
