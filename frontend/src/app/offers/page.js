import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Offers from '@/components/Offers'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className="h-[500px] w-full relative">
                <Image src="/img4.JPG" alt="img4" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/100"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <h1 className="font-extrabold text-[40px] text-white">OFFERS</h1>
                </div>
              </div>
              <Offers></Offers>
              <Footer></Footer>
    </div>
  )
}

export default page