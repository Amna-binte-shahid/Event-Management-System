import Image from 'next/image'
import React from 'react'


function Section4({image,title,description}) {
  return (
    <div className="flex justify-between">
            <div className="bg-pink-900 rounded-3xl flex overflow-hidden">
              <Image  src={image}
                alt={title}
                width={270}
                height={350}
                className="rounded-l-3xl"/>
              <div className=" flex flex-col justify-center items-center pl-4 text-white">
                <h1 className="font-bold text-[25px] text-center">{title}</h1>
                <p>{description}</p>
              </div>
            </div>
            </div>
  )
}

export default Section4