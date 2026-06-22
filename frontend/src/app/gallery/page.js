import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import WeddingsGallery from "@/components/WeddingGallery";
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
          <h1 className="font-extrabold text-[40px] text-white">OUR GALLERY</h1>
        </div>
      </div>
      <Section6></Section6>
      <Section5></Section5>
      <WeddingsGallery />
      <Footer></Footer>
    </div>
  );
}

export default page;
