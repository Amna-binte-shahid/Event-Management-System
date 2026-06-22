import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Footer from "@/components/Footer";
import { cards } from "@/components/data";

function page() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="h-[500px] w-full relative">
        <Image src="/img4.JPG" alt="img4" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/100"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="font-extrabold text-[40px] text-white">
            OUR SERVICES
          </h1>
        </div>
      </div>
      <Section3></Section3>
      <div className="w-[95%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((i, index) => (
            <Section4
              key={i.id}
              id={i.id}
              image={i.image}
              title={i.title}
              description={i.description}
            />
          ))}
        </div>
        <Section7></Section7>
        <Section8></Section8>
        <Footer></Footer>
    </div>
  );
}

export default page;
