"use client";

import { useState } from "react";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Contact() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const formData = { username, phone, email, service, message };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      const data = await res.json();
      console.log("Server Response:", data);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <div>
      {/* Top info section */}
      <div className="flex justify-between items-center">
        <div className="h-[600px] w-[650px] font-sans pl-12">
          <p className="text-pink-800 text-3xl font-bold pb-4 pt-20">
            Get Connected
          </p>

          <h1 className="font-extrabold text-gray-700 text-5xl pb-4">
            Let’s Plan Your Perfect
            <br /> Event
          </h1>

          <p>
            No matter the type of event you are planning, you can rely on us to
            make
            <br /> it memorable for everyone. Contact us now!
          </p>

          <h1 className="text-gray-700 text-2xl font-bold pt-6 flex items-center gap-2">
            <BsFillTelephoneFill />
            Phone Number
          </h1>
          <p className="text-black">+92 123456789</p>

          <h1 className="text-gray-700 text-2xl font-bold pt-4 flex items-center gap-2">
            <FaEnvelope />
            Email Address
          </h1>
          <p className="text-black">eventplanners.1@gmail.com</p>

          <h1 className="text-gray-700 text-2xl font-bold pt-4 flex items-center gap-2">
            <FaLocationDot />
            Our Address
          </h1>
          <p className="text-black">
            Al Hafeez Shopping Mall, 402, Gulberg III, Lahore
          </p>
        </div>

        
        <div className="relative pr-8 pt-10">
          <Image
            src="/img5.JPG"
            alt="img5"
            width={500}
            height={400}
            className="object-cover rounded-4xl border-[6px] border-black"
          />

          <div className="absolute h-[250px] w-[300px] -mt-62 p-6 rounded-4xl text-white bg-black border-[6px] border-pink-900">
            <p>
              My friend suggest me Event Planner for my wedding room decoration,
              and I am very happy after seeing their services. They decorate my
              room just like I want and the most important part is that they are
              very affordable.
              <br />
              <span className="font-semibold">Adeel Asif</span>
            </p>
          </div>
        </div>
      </div>

     
      <div className="relative flex justify-between items-center">
        <div className="pl-28 pt-14">
          <Image
            src="/img13.JPG"
            alt="img13"
            width={600}
            height={400}
            className="object-cover rounded-4xl border-[6px] border-black"
          />
        </div>

        <div className="h-[700px] w-[600px] flex flex-col items-center gap-4 absolute z-10 ml-160 bg-white rounded-4xl border-4 border-pink-900 mt-10">
          <h1 className="font-extrabold text-gray-700 text-4xl pl-6 pt-8 text-center">
            Lets Send a Message to Us
          </h1>

          {/* Name */}
          <h1 className="font-extrabold text-[18px] pr-[85px] self-start pl-16">
            Name:
          </h1>
          <Input
            type="text"
            placeholder="Enter Your Name"
            className="bg-white h-10 w-[400px] text-black border-2 border-black"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {/* Phone */}
          <h1 className="font-extrabold text-[18px] pr-80 self-start pl-16">
            Phone No:
          </h1>
          <Input
            type="text"
            placeholder="Enter Your Phone No"
            className="bg-white h-10 w-[400px] text-black border-2 border-black"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Email */}
          <h1 className="font-extrabold text-[18px] pr-[85px] self-start pl-16">
            Email:
          </h1>
          <Input
            type="text"
            placeholder="Enter Your Email"
            className="bg-white h-10 w-[400px] text-black border-2 border-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Service */}
          <h1 className="font-extrabold text-[18px] pr-[60px] self-start pl-16">
            Select Your Service:
          </h1>
          <Select onValueChange={(value) => setService(value)}>
            <SelectTrigger className="w-[400px] text-black border-2 border-black">
              <SelectValue placeholder="Select Your Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="decorate">Wedding Decorators</SelectItem>
              <SelectItem value="planner">Wedding Planner</SelectItem>
              <SelectItem value="catering">Catering Service</SelectItem>
              <SelectItem value="event">Corporate Event Planner</SelectItem>
            </SelectContent>
          </Select>

          {/* Message */}
          <h1 className="font-extrabold text-[18px] pr-80 self-start pl-16">
            Message:
          </h1>
          <Input
            type="text"
            placeholder="How can we help you?"
            className="bg-white h-[100px] w-[400px] text-black border-2 border-black"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Button */}
          <Button
            className="bg-pink-900 h-10 w-[400px] text-white border-2 border-white mt-2"
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
