import React from "react";
import Container from "./Container";
import Image from "next/image";
import daryl from "../../public/json/daryl.json";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <Container layout="flex-row" class="md:items-center justify-between  py-4 sm:py-8">
      <div className="flex  md:items-center space-x-6">
        <section className="relative h-12 w-12  rounded-xl">
          <Image
            fill
            src="/images/mainlogo.jpeg"
            alt={daryl.name}
            className="object-contain rounded-full"
          />
        </section>
        <Link href='https://twitter.com/dryldeogracias' target="blank" className="group cursor-pointer mb-2 sm:mb-0">
          <h1 className="font-bold  text-[14px] xs:text-md sm:text-xl">{daryl.name}</h1>
          <p className="text-xs text-gray-600 group-hover:underline">@dryldeogracias</p>
        </Link>
      </div>
      <div className="flex md:hidden">
        <Menu />
      </div>
      <div className="hidden space-x-4 md:flex">
        <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">About me</h3>
        <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">Colleagues</h3>
        <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">Development</h3>
      </div>
    </Container>
  );
};

export default Navbar;
