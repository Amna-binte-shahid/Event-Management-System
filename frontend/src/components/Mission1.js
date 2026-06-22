import Image from "next/image";
import React from "react";

function Mission1() {
  return (
    <div className="bg-pink-900 relative mt-4">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-300/100 "></div>
      <div className="flex justify-between relative">
        <div className="text-black font-sans mt-12 ml-16 w-[500px] h-[600px]">
          <h1 className="font-extrabold text-[40px] pb-4">Our Mission:</h1>
          <p className="pb-2">
            Our mission is to create unforgettable events that reflect your
            personality, style, and dreams. We aim to provide stress-free
            planning, creative designs, and smooth execution so you can enjoy
            every moment without worry. With a focus on quality,
            professionalism, and attention to detail, our team works with
            passion to transform your vision into reality. From intimate
            gatherings to grand celebrations, we strive to deliver events that
            feel special, beautiful, and meaningful. Our mission is simple: to
            make your moments memorable and to provide an experience that you
            will cherish forever.
          </p>
          <h1 className="font-extrabold text-[40px] pb-4">Our Vission:</h1>
          <p className="pb-2">
            Our vision is to become one of the most trusted and innovative event
            planning companies, known for our creativity, reliability, and
            excellence. We aim to continuously grow by introducing fresh themes,
            modern décor styles, and improved services that match the latest
            trends in the event industry. In the future, we hope to expand our
            reach, collaborate with the best vendors, and make high-quality
            event planning accessible to everyone.
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <div className="h-[500px] w-[400px] relative mt-10">
            <Image
              src="/img12.JPG"
              alt="img11"
              fill
              className="object-cover rounded-4xl border-4 border-black"
            />
          </div>

          <div className="h-[500px] w-[400px] relative -ml-20 mt-30 mr-6">
            <Image
              src="/img14.JPG"
              alt="img12"
              fill
              className="object-cover rounded-4xl border-4 border-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission1;
