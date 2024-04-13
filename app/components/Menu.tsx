"use client";

import React, { useState } from "react";
import Humburger from "@/public/icons/Humburger";
import Close from "@/public/icons/Close";
import Container from "./Container";

const Menu = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const handleMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <React.Fragment>
      <button onClick={handleMenu} className="flex ">
        <Humburger />
      </button>

      {menu && (
        <Container layout="flex-col" class="fixed inset-0 bg-black overflow-hidden">
          <button
            onClick={handleMenu}
            className="flex w-full items-end justify-end mt-4 sm:mt-8"
          >
            <Close />
          </button>
          <div className="flex flex-col h-full mt-[200px] items-center space-y-4 overflow-hidden">
            <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">
              About me
            </h3>
            <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">
              Colleagues
            </h3>
            <h3 className="font-semibold cursor-pointer px-3 py-2 hover:bg-white hover:bg-opacity-[0.07] text-white transition-colors ease-in-out rounded-md">
              Development
            </h3>
          </div>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Menu;
