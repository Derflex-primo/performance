import React from "react";
import Container from "./Container";
import Laptop from "@/public/icons/Laptop";
import theme from "@/public/json/theme.json";
import Goal from "@/public/icons/Goal";
import Scope from "@/public/icons/Scope";
import Expand from "@/public/icons/Expand";
import Flash from "@/public/icons/Flash";
import Heart from "@/public/icons/Heart";

const About = () => {
  return (
    <Container layout="flex-col" class="h-[100vh] w-full">
      <div className="flex flex-col justify-start  w-full h-full items-center">
        <h2 className="leading-relaxed text-3xl text-start font-semibold mb-[100px]">
          Will help you to gain more revenue! With our own framework!
        </h2>
        <div className="flex flex-col gap-4 md:flex-row w-full">
          <div className="flex flex-col gap-12 md:w-[50%] cursor-default">
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Laptop svgColor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium mt-0.5">
                  Initial Consultation
                </h2>
              </div>
              <p className="leading-relaxed text-pretty">
                We start by getting to know you and your website inside out.
                We'll review your current setup, understand your target
                audience, and identify the challenges and opportunities unique
                to your business.
              </p>
            </section>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Goal svgColor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">Goal-setting</h2>
              </div>
              <p className="leading-relaxed text-pretty">
                Together, we'll define clear, achievable goals. Whether it's
                increasing traffic, boosting conversions, or enhancing user
                engagement, we'll set specific objectives that align with your
                broader business aspirations.
              </p>
            </section>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Scope svgColor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">Tactical Implementation</h2>
              </div>
              <p className="leading-relaxed text-pretty">
                Based on our strategy, we'll make targeted improvements in
                design, content, and SEO. We’ll optimize your site for both
                humans and search engines, ensuring it’s not just beautiful, but
                powerful.
              </p>
            </section>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Expand svgColor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">Launch & Expand</h2>
              </div>
              <p className="leading-relaxed text-pretty">
                With the foundation set, we launch your revitalized site and
                begin our multi-channel marketing campaigns, meticulously
                designed to draw in and convert your ideal customers.
              </p>
            </section>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Flash svgColor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">
                  Continuous Analysis <span className="hidden sm:inline">& Optimization</span> 
                </h2>
              </div>
              <p className="leading-relaxed text-pretty">
                Our work doesn’t stop at launch. We continuously monitor
                performance metrics and tweak strategies as needed, ensuring you
                remain on the path to increased revenue and business growth.
              </p>
            </section>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Heart svgColor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">Dedicated Support</h2>
              </div>
              <p className="leading-relaxed text-pretty">
                You’ll have ongoing access to our expertise and support. We’re
                here to answer your questions, make adjustments, and keep your
                digital presence strong against the competition.
              </p>
            </section>
          </div>
          <div className="hidden md:block w-[50%]  border border-red-400 "></div>
        </div>
      </div>
    </Container>
  );
};

export default About;
