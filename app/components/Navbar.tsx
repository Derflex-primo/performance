import React from "react";
import Container from "./Container";
import Image from "next/image";
import daryl from "../../public/json/daryl.json";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container layout="flex-row" class="items-center py-8" justify="between">
      <div className="flex items-center space-x-6">
        <section className="relative h-12 w-12  rounded-xl">
          <Image
            fill
            src="/images/daryl.png"
            alt={daryl.name}
            className="object-contain rounded-full"
          />
        </section>
        <Link href='https://twitter.com/dryldeogracias' target="blank" className="group cursor-pointer">
          <h1 className="font-bold text-xl">{daryl.name}</h1>
          <p className="text-xs text-gray-600 group-hover:underline">@dryldeogracias</p>
        </Link>
      </div>
      <div className="flex space-x-4">
        <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">About me</h3>
        <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">Colleagues</h3>
        <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">Development</h3>
      </div>
    </Container>
  );
};

export default Navbar;
