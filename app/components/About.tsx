import React, { Suspense } from "react";
import Container from "./Container";
import Laptop from "@/public/icons/Laptop";
import theme from "@/public/json/theme.json";
import Goal from "@/public/icons/Goal";
import Scope from "@/public/icons/Scope";
import Expand from "@/public/icons/Expand";
import Flash from "@/public/icons/Flash";
import Heart from "@/public/icons/Heart";
import VerticalLine from "@/public/icons/VerticalLine";
import Video from "./Video";


const About = () => {
  return (
    <Container layout="flex-col" class="h-full w-full">
      <div className="flex flex-col justify-start  w-full h-full items-center">
        <h2 className="leading-relaxed text-3xl text-start font-semibold mb-[60px]">
          Will help you to gain more revenue! With our own <span className="underline underline-offset-2 decoration-red-400">framework!</span>
        </h2>
        <div className="flex flex-col gap-12 md:flex-row w-full justify-center">
          <div className="flex flex-col md:w-[50%] cursor-default">
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Laptop svgcolor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium mt-0.5">
                  Initial Consultation
                </h2>
              </div>
              <p className="leading-relaxed text-pretty">
                We start by getting to know you and your website inside out.
                We&apos;ll review your current setup, understand your target
                audience, and identify the challenges and opportunities unique
                to your business.
              </p>
            </section>
            <div className="flex justify-center">
              <span className="text-stone-600">
              <VerticalLine />
             </span>
            </div>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Goal svgcolor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">Goal-setting</h2>
              </div>
              <p className="leading-relaxed text-pretty">
                Together, we&apos;ll define clear, achievable goals. Whether
                it&apos;s increasing traffic, boosting conversions, or enhancing
                user engagement, we&apos;ll set specific objectives that align
                with your broader business aspirations.
              </p>
            </section>
            <div className="flex justify-center">
              <span className="text-stone-600">
              <VerticalLine />
             </span>
            </div>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Scope svgcolor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">Tactical Implementation</h2>
              </div>
              <p className="leading-relaxed text-pretty">
                Based on our strategy, we&apos;ll make targeted improvements in
                design, content, and SEO. We&apos;ll optimize your site for both
                humans and search engines, ensuring it&apos;s not just
                beautiful, but powerful.
              </p>
            </section>
            <div className="flex justify-center">
              <span className="text-stone-600">
              <VerticalLine />
             </span>
            </div>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Expand svgcolor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">Launch & Expand</h2>
              </div>
              <p className="leading-relaxed text-pretty">
                With the foundation set, we launch your revitalized site and
                begin our multi-channel marketing campaigns, meticulously
                designed to draw in and convert your ideal customers.
              </p>
            </section>
            <div className="flex justify-center">
              <span className="text-stone-600">
              <VerticalLine />
             </span>
            </div>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded">
              <div className="flex flex-row items-center space-x-2">
                <figure>
                  <Flash svgcolor={theme.palette.main} />
                </figure>
                <h2 className="text-xl font-medium">
                  Continuous Analysis{" "}
                  <span className="hidden sm:inline">& Optimization</span>
                </h2>
              </div>
              <p className="leading-relaxed text-pretty">
                Our work doesn&apos;t stop at launch. We continuously monitor
                performance metrics and tweak strategies as needed, ensuring you
                remain on the path to increased revenue and business growth.
              </p>
            </section>
            <div className="flex justify-center">
              <span className="text-stone-600">
              <VerticalLine />
             </span>
            </div>
            <section className="flex flex-col space-y-5  bg-stone-600 bg-opacity-40 p-6 rounded border-4 border-red-400">
              <div className="flex flex-row items-center space-x-2">
                <figure className="text-red-400">
                  <Heart  />
                </figure>
                <h2 className="text-xl font-medium">Dedicated Support</h2>
              </div>
              <p className="leading-relaxed text-pretty">
                You&apos;ll have ongoing access to our expertise and support.
                We&apos;re here to answer your questions, make adjustments, and
                keep your digital presence strong against the competition.
              </p>
            </section>
          </div>
          {/* <div className="flex flex-col gap-5 relative w-full h-full md:w-[50%]">
            <figure>
              <Suspense fallback={<p>Loading video...</p>}>
                <Video />
              </Suspense>
            </figure>
            <section className="flex justify-center text-base sm:text-xl md:text-2xl bg-blue-500 bg-opacity-80 font-semibold z-50 py-3 md:p-4">
              <h3>#Don't take it from me, take it from him 💪</h3>
            </section>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default About;
