import React from "react";
import Container from "./Container";
import Image from "next/image";
import daryl from "../../public/json/daryl.json";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full top-0 z-[10000] flex justify-center p-2 text-xs sm:text-sm bg-green-500">
        Hello there , im giving 50% discount for my first client 💪!
      </div>
      <Container>
        <nav className="flex flex-row w-full md:items-center justify-between  py-4 sm:py-8 mt-8 sm:mt-5">
          <div className="flex  md:items-center space-x-2 md:space-x-6">
            <section className="relative h-10 w-10  rounded-xl">
              <Image
                fill
                src="/images/mainlogo.jpeg"
                alt={daryl.name}
                className="object-contain rounded-full"
              />
            </section>
            <Link
              href="https://twitter.com/dryldeogracias"
              target="blank"
              className="group cursor-pointer mb-2 sm:mb-0"
            >
              <h1 className="font-bold  text-[14px] xs:text-md sm:text-lg">
                {daryl.name}
              </h1>
              <p className="text-xs text-gray-600 group-hover:underline">
                @dryldeogracias
              </p>
            </Link>
          </div>
          <div className="flex md:hidden">
            <Menu />
          </div>
          <div className="hidden space-x-4 md:flex">
            <h3 className="font-semibold cursor-pointer px-2.5 py-1.5 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded underline underline-offset-2 decoration-red-400">
              Development
            </h3>
            <h3 className="font-semibold cursor-pointer px-2.5 py-1.5 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded">
              Web-Blueprint
            </h3>
            <h3 className="font-semibold cursor-pointer px-2.5 py-1.5 bg-blue-500 hover:bg-blue-400 text-white transition-colors ease-in-out rounded">
              Contact us
            </h3>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
