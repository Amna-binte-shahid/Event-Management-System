import React from 'react'
import Image from "next/image";
function Section8() {
  return (
    <div className="relative">
            <div className="relative flex justify-between items-center">
              <div className="p-12">
                <Image
                  src="/img6.JPG"
                  alt="img2"
                  width={550}
                  height={300}
                  className="object-cover rounded-4xl border-4 border-black"
                />
              </div>
              <div className="h-[600px] w-[650px] font-sans pl-0">
                <p className="text-pink-800 text-3xl font-bold pb-4 pt-20">
                  Unparalleled Expertise
                </p>
                <h1 className="font-extrabold text-gray-700 text-5xl pb-4">
                  Capturing Your <br />
                  Management Perfectly
                </h1>
                <p>
                  We are an event management agency that takes every new project{" "}
                  <br /> as a challenge and a learning experience. We claim to
                  provide
                  <br /> the best event management service as our event planner in
                  Lahore team
                  <br /> offers a plethora of options to our clients, ranging from
                  décor,
                  <br /> curtains, seating furniture, buffet tables, etc. We create
                  an <br />
                  event as the microcosm of your desires.
                </p>
              </div>
            </div>
            <div className="">
              <div className="p-12 absolute -mt-66 z-10">
                <Image
                  src="/img1.JPG"
                  alt="img1"
                  height={200}
                  width={850}
                  className="rounded-4xl border-4 border-black"
                />
              </div>
              <div className="relative pl-250">
                <h1 className="text-3xl font-extrabold text-pink-900 pb-4">
                  All-Inclusive Service:
                </h1>
    
                <p className="text-lg font-semibold text-gray-700 mb-4 pb-4">
                  Our Event planning encompasses <br /> everything.
                </p>
                <ul className="text-[20px] pb-4">
                  <li>.Budget Setting</li>
                  <li>.Lighting</li>
                  <li>.Decorations</li>
                  <li>.Savory Food</li>
                  <li>.Event Management</li>
                  <li>.DJ and Music</li>
                </ul>
              </div>
            </div>
          </div>
  )
}

export default Section8