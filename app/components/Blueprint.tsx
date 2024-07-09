import React from "react";
import Container from "./Container";

const Blueprint = () => {
  return (
    <Container layout="flex-col" class="h-auto w-full mt-[100px]">
      <div className="w-full flex justify-center">
        <h2 className="text-2xl font-semibold">Ultimate Website Blueprint</h2>
      </div>

      <div className="relative h-auto mt-6 text-[13px] text-black">
        <div className="absolute  brightness-50 w-full h-full top-0 z-0">
          <video
            src="/video/droneshot.mp4"
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            preload="meta"
          />
        </div>
        <div className="relative z-10">
          <div className="text-center bg-violet-500 py-1.5 text-[10px] text-white sm:text-[13px]">
            Need any (your service type) help? Call us today!{" "}
            <span className="underline">412 - 345 - 679</span>
          </div>
          <div className="flex justify-between border-b px-4 md:px-6 py-3 text-black  w-full bg-white ">
            <div className="flex items-center gap-3 text-[10px] sm:text-[13px]">
              <div className=" pr-4 border-r">
                <div className="bg-stone-100 p-2">(Your company logo)</div>
              </div>
              <div className="bg-violet-500 font-medium hover:bg-opacity-95 cursor-pointer text-white p-1 px-2 rounded-[2px]">
                Book appointment here!
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4 font-medium">
              <div className="cursor-pointer hover:text-violet-500">
                Services
              </div>
              <div className="cursor-pointer hover:text-violet-500">
                Reviews
              </div>
              <div className="cursor-pointer hover:text-violet-500">
                Careers
              </div>
              <div className="cursor-pointer hover:text-violet-500">
                About us
              </div>
            </div>
          </div>
          <div className="grid  md:grid-cols-2  md:mt-12">
            <div>
              <div className="hidden md:flex  md:pl-6 md:mt-12 text-violet-100">
                <div className="text-2xl font-medium uppercase">
                  Out of This World (Your service) <br />
                  Solutions in Central California.
                </div>
              </div>
              <div className="flex md:hidden px-4 mt-5 text-violet-100">
                <div className="text-lg font-medium uppercase">
                  Out of This World (Your service) Solutions in Central  California.
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
