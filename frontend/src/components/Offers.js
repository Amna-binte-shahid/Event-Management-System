import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";

function Offers() {
  return (
    <div>
      <div className="flex justify-between item-center">
        <div className="h-[600px] w-[650px] font-sans p-12">
          <h1 className="font-extrabold text-pink-900 text-5xl pb-6">
            Seasonal & Limited <br />
            Time Offers
          </h1>
          <p className="pb-6">
            Our seasonal and limited-time offers are specially designed to help
            <br />
            you celebrate your events in a beautiful and budget-friendly way.
            <br />
            Whether you’re planning a wedding, birthday, bridal shower, or
            <br />
            corporate event, you can now enjoy exclusive discounts during our
            <br />
            promotional periods. These offers include reduced rates on décor
            <br />
            themes, photography bundles, floral arrangements, and complete event
            <br />
            management services. Each deal is available only for a short time,
            <br /> so it’s the perfect opportunity to save more while still
            getting
            <br />
            premium-quality service. Don’t miss out—book your event now and take
            <br />
            advantage of the amazing offers before they end.
          </p>
          <div className="flex items-center gap-2 mt-8 mr-8">
            <Link href="/about">
              <Button className="bg-pink-900 pb-6 h-[70px] w-[200px] text-pink-300 font-extrabold hover:bg-black hover:text-white px-6 py-4 rounded-4xl">
                More About Us
              </Button>
            </Link>

            <Button className="bg-pink-900 pb-6 h-[70px] w-[200px] text-pink-300 font-extrabold hover:bg-black hover:text-white px-6 py-4 rounded-4xl">
              <BsFillTelephoneFill />
              +92 123456789
            </Button>
          </div>
        </div>
        <div className="p-12 ">
          <Image
            src="/img14.JPG"
            alt="img14"
            width={600}
            height={600}
            className="object-cover rounded-4xl border-6 border-black"
          />
        </div>
      </div>
      <div className="relative w-full h-[579px] flex items-center">
        <Image src="/img6.JPG" alt="img3" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/100 "></div>
        <div className="relative container mx-auto">
          <h1 className="text-5xl font-bold text-black pb-4">
            Exclusive Event
            <br /> Packages!!
          </h1>
          <p className="font-medium">
            Our exclusive event packages are created to provide the perfect
            combination of style, convenience, and affordability.<br/> Each package
            covers essential event services such as décor setup, stage design,
            photography options, entrance styling<br/>, and guest seating
            arrangements—all tailored to match your theme and preferences.
            Whether you want something simple <br/>and elegant or fully luxurious and
            grand, we have packages for every budget and every type of event.
            With clear pricing<br/> and well-organized services, our goal is to make
            your planning stress-free and enjoyable. Explore our packages and
            choose<br/> the one that best fits your vision, and let us turn your
            special day into a truly memorable experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offers;
