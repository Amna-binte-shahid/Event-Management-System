"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm h-20">
      <div className="container mx-auto flex items-center justify-between pl-4 pr-4 pb-4">
         <Image src="/logo.JPG" width={100} height={70} alt="Logo" />

        <NavigationMenu className="w-auto">
          <NavigationMenuList className="flex gap-6">

            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-lg hover:text-pink-900 font-semibold">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="text-lg  hover:text-pink-900 font-semibold">
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
             
            <NavigationMenuItem>
              <NavigationMenuLink href="/services" className="text-lg  hover:text-pink-900 font-semibold">
                Our Services
              </NavigationMenuLink>
            </NavigationMenuItem> 
           
            <NavigationMenuItem>
              <NavigationMenuLink href="/gallery" className="text-lg  hover:text-pink-900 font-semibold">
                Our Gallery
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="text-lg  hover:text-pink-900 font-semibold">
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/offers" className="text-lg  hover:text-pink-900 font-semibold">
                Offers
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/mission" className="text-lg hover:text-pink-900 font-semibold">
                Our Mission
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>

          <NavigationMenuViewport className="hidden" />
        </NavigationMenu>
      </div>
    </div>
  );
}
