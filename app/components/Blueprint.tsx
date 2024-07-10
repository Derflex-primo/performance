import React from "react";
import Container from "./Container";
import Support from "@/public/icons/Support";
import Goal from "@/public/icons/Goal";
import Flash from "@/public/icons/Flash";
import Expand from "@/public/icons/Expand";
import Heart from "@/public/icons/Heart";
import Google from "@/public/icons/Google";
import Image from "next/image";

const Blueprint = () => {
  return (
    <Container layout="flex-col" class="h-auto w-full mt-[100px]">
      <div className="w-full flex justify-center">
        <h2 className="text-2xl font-semibold">Ultimate Website Blueprint</h2>
      </div>

      <div className="relative h-auto mt-6 text-[13px] text-black sm:rounded-none">
        <div className="absolute  brightness-50 w-full h-full top-0 z-0 mt-6">
          <video
            src="/video/droneshot.mp4"
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            preload="meta"
          />
        </div>
        <div className="relative flex md:hidden items-center justify-between bg-stone-50 z-10 p-2">
          <div>ii</div>
          <div className="bg-slate-100 border w-auto p-2 rounded-full">
            https://yourcompany.com
          </div>
          <div>ii</div>
          <div>ii</div>
        </div>
        <div className="relative z-10">
          <div className="text-center bg-blue-500 py-1.5 text-[10px] text-white sm:text-[13px]">
            Need any (your service type) help? Call us today!{" "}
            <span className="underline">412 - 345 - 679</span>
          </div>
          <div className="flex justify-between border-b px-4 md:px-6 py-3 text-black  w-full bg-white ">
            <div className="flex items-center gap-3 text-[10px] sm:text-[13px]">
              <div className="pr-4 ">
                <div className="bg-stone-100 p-2 animate-pulse">(Your company logo)</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 font-medium">
              <div className="cursor-pointer hover:text-blue-500">Services</div>
              <div className="cursor-pointer hover:text-blue-500">Reviews</div>
              <div className="cursor-pointer hover:text-blue-500">Careers</div>
              <div className="cursor-pointer hover:text-blue-500">About us</div>
            </div>
          </div>
          <div className="grid  md:grid-cols-2  md:mt-12">
            <div>
              <div className="hidden md:flex  md:pl-6  mt-2 text-blue-100">
                <div className="text-2xl font-medium ">
                  Out of This World (Your service)<br />
                  Solutions in Central California.
                </div>
              </div>
              <div className="flex md:hidden mt-5 px-4 text-blue-100">
                <div className="text-lg font-medium uppercase">
                  Out of This World (Your service) Solutions in Central
                  California.
                </div>
              </div>
              <div className="ml-4 md:ml-6 flex items-center gap-4 mt-4 md:mt-6">
                <div className="text-white rounded-[2px] bg-blue-500 border-[0.5px] border-blue-500 px-2 py-1 font-medium hover:bg-blue-400 cursor-pointer">
                  Book an appointment
                </div>
                <div className="text-blue-300 px-2 border-[2px] py-0.5 border-blue-300 rounded-[2px] font-medium cursor-pointer">
                  Client Feedback
                </div>
              </div>
              <div className=" ml-4 md:ml-6 inline-flex flex-col gap-2 mt-8 text-xs">
                <div className="inline-flex  gap-2 items-center text-blue-500 font-medium rounded-[2px] bg-stone-100 w-auto px-2 py-1.5">
                  <Goal />
                  <h3 className="text-stone-700">
                    Fully Licensed, Insured, and Comitted to Transparency
                  </h3>
                </div>
                <div className="inline-flex  gap-2 items-center text-blue-500 font-medium rounded-[2px] bg-stone-100 w-auto px-2 py-1.5">
                  {" "}
                  <Expand />
                  <h3 className="text-stone-700">
                    Exceptional Quality, Verified by Customers
                  </h3>
                </div>
                <div className="inline-flex  gap-2 items-center text-red-500 font-medium rounded-[2px] bg-stone-100 w-auto px-2 py-1.5">
                  {" "}
                  <Heart />
                  <h3 className="text-stone-700">
                    Central FLorida’s Premier Choice{" "}
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-8 md:mt-12 max-w-[360px] ml-3 md:ml-5">
                <div className="flex justify-start relative h-[40px] w-auto">
                  <Image
                    src="/images/googlerated.webp"
                    fill
                    alt="Google rating 5 star"
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-center  relative h-[40px] w-full text-center items-center bg-stone-100 text-[10px] animate-pulse">
                  (your service award)
                </div>
                <div className="flex justify-center relative h-[40px] w-full bg-stone-100 text-center text-[10px] items-center animate-pulse">
                  (your service award)
                </div>
              </div>
            </div>
            <div className="flex md:justify-end h-auto w-full mt-6 md:mt-0 px-4 md:px-6 md:pl-0">
              <div className="bg-white h-[500px] w-full  md:w-[380px]">
                Calendy
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blueprint;
