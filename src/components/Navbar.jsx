import { NavLink } from "react-router-dom";
import clsx from "clsx";
import React from "react";
import { FiMenu } from 'react-icons/fi';
import colors from "../components/colors.json";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const variants = {
  base: "text-gray-700 hover:text-black",
  active: "text-red-500 hover:text-red-500 underline underline-offset-2",
};

const Navbar = () => {
  const { childObjects } = colors;

  return (
    <nav className={`shadow-sm bg-gialloPa font-Bodoni`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center py-4">
          <div className="hidden w-full pr-10 sm:block">
            <div className="flex items-center  sm:text-center sm:justify-center justify-between max-w-7xl font-Bodoni">
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    clsx("font-bold text-[#403F2B] text-xl", {
                      "": isActive,
                    })
                  }
                >
                  Clatur73
                </NavLink>
                <p>Una piccola didascalia</p>
              </div>
              <div className="flex items-center justify-end gap-5 text-lg">
                {/* <NavLink
                  to="/"
                  className={({ isActive }) =>
                    clsx(variants.base, {
                      [variants.active]: isActive,
                    })
                  }
                >
                  Home
                </NavLink> */}
              </div>
            </div>
          </div>
          <div className="block w-full sm:hidden">
            <div className="flex items-center justify-between max-w-7xl font-Bodoni">
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    clsx(" font-bold text-xl font-Bodoni", {
                      "": isActive,
                    })
                  }
                >
                  Clatur 73
                </NavLink>
              </div>
              <div className="flex items-center justify-end ">
                <Sheet>
                  <SheetTrigger>
                    <FiMenu size={28} style={{ color: "#403F2B" }} />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="mb-4 text-3xl font-bold text-center font-Bodoni">Menu</SheetTitle>
                      <SheetDescription>
                        <div className="flex flex-col items-center gap-4 text-lg font-Bodoni">
                          <NavLink
                            to="/"
                            className={({ isActive }) =>
                              clsx(variants.base, {
                                [variants.active]: isActive,
                              })
                            }
                          >
                            Home
                          </NavLink>
                          <NavLink
                            to="/about"
                            className={({ isActive }) =>
                              clsx(variants.base, {
                                [variants.active]: isActive,
                              })
                            }
                          >
                            About
                          </NavLink>
                          <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                              clsx(variants.base, {
                                [variants.active]: isActive,
                              })
                            }
                          >
                            Contact
                          </NavLink>
                          <NavLink
                            to="/attrazioni"
                            className={({ isActive }) =>
                              clsx(variants.base, {
                                [variants.active]: isActive,
                              })
                            }
                          >
                            Attrazioni
                          </NavLink>
                        </div>
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
