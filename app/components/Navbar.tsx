import React from "react";
import Container from "./Container";
import Image from "next/image";
import daryl from "../../public/json/daryl.json";
import Link from "next/link";
import Menu from "./Menu";
import Support from "@/public/icons/Support";

const Navbar = () => {
  return (
    <>
      <Container class="fixed w-full sm:py-3 bg-black border-b-[0.5px] border-stone-800">
        <nav className="flex flex-row w-full items-center justify-between    ">
          <div className="flex items-center space-x-1 md:space-x-3">
            <div className="flex items-center text-2xl sm:text-3xl font-bold text-white mr-2 sm:pr-6 sm:border-r-[0.5px] border-stone-800">
              kanlura
              <span className="text-blue-500">n</span>
            </div>
            <section className="invisible sm:visible relative h-8 w-8 rounded-xl">
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
              className="group cursor-pointer mb-2 sm:mb-0 invisible sm:visible"
            >
              <h1 className="font-bold text-stone-100  text-[14px] xs:text-md sm:text-sm">
                {daryl.name}
              </h1>
              <p className="text-[9px] text-gray-600 group-hover:underline">
                @dryldeogracias
              </p>
            </Link>
          </div>
          <div className="flex md:hidden">
            <Menu />
          </div>
          <div className="hidden space-x-6 md:flex items-center text-sm">
            <h3 className="font-semibold cursor-pointer hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded underline underline-offset-2 decoration-red-400">
              Development
            </h3>
            <h3 className="font-semibold cursor-pointer  hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded">
              Web Blueprint
            </h3>
            <h3 className="flex items-center space-x-1.5 font-semibold cursor-pointer px-1.5 py-0.5 bg-blue-500 hover:bg-blue-400 text-white transition-colors ease-in-out rounded-[2px]">
              <span>Contact us</span>
              <Support />
            </h3>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
