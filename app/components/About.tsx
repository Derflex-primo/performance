import React from "react";
import Container from "./Container";
import Image from "next/image";
import daryl from "../../public/json/daryl.json";

const About = () => {
  return (
    <Container layout="flex-col" class="h-[100vh] w-full">
      <div className="flex justify-center w-full h-[100vh] items-center">
        <h1 className="leading-relaxed text-6xl xs:text-start sm:text-center font-semibold mb-[260px]">
          Looking to truly stand out? It's essential <br /> to do more than just
          show up online.
        </h1>
      </div>
    </Container>
  );
};

export default About;
