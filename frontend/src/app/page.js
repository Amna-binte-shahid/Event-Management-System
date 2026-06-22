import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import { cards } from "@/components/data";
import React from "react";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Footer from "@/components/Footer";

function page() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="relative w-full h-[600px] flex items-center">
        <Image
          src="/img1.JPG"
          alt=""
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/100"></div>

        <div className="relative container mx-auto">
          <p className="uppercase mb-2 text-black font-sans font-bold">
            Events Planner
          </p>
          <h1 className="text-5xl font-bold text-black leading-tight">
            Shaping Memories & <br />
            <div className=" bg-pink-900 text-black w-[24%] rounded-2xl pl-1">
              Filling Colors
            </div>
            in Your Celebrations
          </h1>
          <p className="font-medium">
            Be it your wedding, corporate event, or birthday party; our creative
            team will craft a <br />
            mesmerizing design for your event that will leave your guests
            spellbound.
          </p>
        </div>
        <div className="absolute bottom-24 left-10 flex item-center gap-6">
          <div>
            <Link href="/services" passHref>
              <Button className="bg-pink-900 text-pink-300 hover:bg-black hover:text-white px-6 py-4 rounded-4xl">
                Our Services
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-2 ">
            <Button className="bg-pink-900 text-pink-300 hover:bg-black hover:text-white rounded-4xl">
              <BsFillTelephoneFill />
              +92 123456789
            </Button>
          </div>
        </div>
      </div>
      <Section1></Section1>
      <Section2></Section2>
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
        <Section5></Section5>
        <Section6></Section6>
        <Section7></Section7>
        <Footer></Footer>
    </div>
  );
}

export default page;
