"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa6";

function Footer() {
  // state for callback bar
  const [cbName, setCbName] = useState("");
  const [cbPhone, setCbPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequestCallback = async () => {
    if (!cbName || !cbPhone) {
      alert("Please enter your name and phone number.");
      return;
    }

    setLoading(true);

    const payload = {
      type: "callback",     // 👈 API ko pata chalega ye callback request hai
      name: cbName,
      phone: cbPhone,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send callback request");

      const data = await res.json();
      console.log("Callback Response:", data);
      alert(data.message || "Callback request sent!");

      // reset fields
      setCbName("");
      setCbPhone("");
    } catch (err) {
      console.error("Callback Error:", err);
      alert("Failed to send callback request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Top callback bar */}
      <div className="bg-pink-900 mt-6 flex justify-between items-center h-[170px] rounded-t-[50px] px-20">
        <div className="font-extrabold">
          <h1 className="text-[50px] text-white leading-tight">
            Request a
            <br />
            CallBack
          </h1>
        </div>

        <div className="flex items-center gap-6">
          <Input
            type="text"
            placeholder="Enter Your Name"
            className="bg-white h-[50px] w-[200px] text-black border-2 border-black"
            value={cbName}
            onChange={(e) => setCbName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Enter Your Phone No"
            className="bg-white h-[50px] w-[200px] text-black border-2 border-black"
            value={cbPhone}
            onChange={(e) => setCbPhone(e.target.value)}
          />
          <Button
            className="bg-black h-[70px] w-[200px] text-white font-extrabold px-6 py-4 rounded-4xl"
            onClick={handleRequestCallback}
            disabled={loading}
          >
            {loading ? "Sending..." : "Request a CallBack"}
          </Button>
        </div>
      </div>

      {/* Footer content */}
      <div className="h-[500px] w-full relative">
        <Image
          src="/img8.JPG"
          alt="img8"
          fill
          className="object-cover opacity-60"
        />

        <div className="absolute top-1/2 left-20 -translate-y-1/2 flex gap-6">
          <div className="h-[300px] w-[350px] p-6 bg-white text-black rounded-4xl shadow-xl flex flex-col">
            <Image
              src="/logo.JPG"
              alt="logo"
              width={120}
              height={80}
              className="object-contain"
            />
            <h1 className="font-bold text-[20px] mt-2">Events Planner</h1>
            <p className="mt-2 text-sm">
              We have years of experience providing comprehensive event planning
              services in Lahore and other cities in Punjab.
            </p>
          </div>

          <div className="h-[300px] w-[250px] p-6  text-black rounded-4xl shadow-xl">
            <h1 className="font-extrabold text-[30px] mb-3">Quick Links:</h1>

            <ul className=" text-[20px] font-bold">
              <li className="pb-2">
                <Link href="/">.Home</Link>
              </li>
              <li className="pb-2">
                <Link href="/about">.About Us</Link>
              </li>
              <li className="pb-2">
                <Link href="/services">.Our Services</Link>
              </li>
              <li className="pb-2">
                <Link href="/gallery">.Our Gallery</Link>
              </li>
              <li className="pb-2">
                <Link href="/contact">.Contact Us</Link>
              </li>
              <li className="pb-2">
                <Link href="/offers">.Offers</Link>
              </li>
              <li className="pb-2">
                <Link href="/mission">.Our Mission</Link>
              </li>
            </ul>
          </div>

          <div className="h-[300px] w-[250px] p-6  text-black rounded-4xl shadow-xl">
            <h1 className="font-extrabold text-[30px] mb-3">Our Services:</h1>

            <ul className=" text-[20px] font-bold">
              <li className="pb-2">.Catering Services</li>
              <li className="pb-2">.Wedding Planner</li>
              <li className="pb-2">.Corporate Event Planner</li>
              <li className="pb-2">.Wedding Decorator</li>
            </ul>
          </div>

          <div className="h-[300px] w-[250px] p-6  text-black rounded-4xl shadow-xl">
            <h1 className="font-extrabold text-[30px] mb-3">Contact Info:</h1>

            <ul className=" text-[20px] font-bold">
              <li className="pb-2 flex items-center gap-2">
                <BsFillTelephoneFill className="text-2xl" />
                +92 123456789
              </li>
              <li className="pb-2 flex items-center gap-2">
                <FaEnvelope className="text-2xl" />
                eventplanners.1@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full bg-pink-900 py-4 flex justify-center">
        <h1 className="text-white text-sm font-medium">
          Copyright© 2025 | Events Planner | All right Reserved.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
