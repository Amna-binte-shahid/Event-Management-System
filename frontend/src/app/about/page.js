import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="h-[500px] w-full relative">
        <Image src="/img4.JPG" alt="img4" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/100"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="font-extrabold text-[40px] text-white">ABOUT US</h1>
        </div>
      </div>
      <Section1></Section1>
      <Section2></Section2>
      <div className="mt-20">
      <Footer></Footer>
      </div>
    </div>
  );
}

export default page;
