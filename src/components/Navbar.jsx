import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import clsx from "clsx";
import React from "react";
import { FiMenu } from "react-icons/fi";
import colors from "../components/colors.json";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const variants = {
  base: "text-gray-700 hover:text-black",
  active: "text-red-500 hover:text-red-500 underline underline-offset-2",
};

const Navbar = () => {
  const { childObjects } = colors;

  return (
    <nav className="shadow-xl sticky top-0 z-50 mb-0 bg-grigio font-Bodoni">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center py-4">
          <div className="hidden w-full max-w-4xl pr-10 sm:flex sm:justify-center sm:items-center">
            <div className="flex flex-col items-center sm:text-center sm:justify-center justify-between font-Bodoni">
              <div>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className=" font-extrabold text-xl text-olive cursor-pointer"
                >
                  Clatur73
                </Link>
                <p>Una piccola didascalia</p>
                <div className="hidden sm:block sm:h-0 sm:z-50 sm:relative sm:w-full">
                  <div className="bg-giallino h-14 container w-[100vh] shadow-xl flex justify-center items-center">
                    <div>
                      <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                      >
                        Home
                      </Link>
                      <Link
                        to="prenota"
                        smooth={true}
                        duration={500}
                        className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                      >
                        Prenota
                      </Link>
                      <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                      >
                        About
                      </Link>
                      <Link
                        to="gallery"
                        smooth={true}
                        duration={500}
                        className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                      >
                        Galleria
                      </Link>
                      <Link
                        to="mappa"
                        smooth={true}
                        duration={500}
                        className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                      >
                        Mappa
                      </Link>
                    </div>
                  </div>
                </div>
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
              <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className=" font-extrabold text-xl text-olive cursor-pointer"
                >
                  Clatur73
                </Link>
              </div>
              <div className="flex items-center justify-end ">
                <Sheet>
                  <SheetTrigger>
                    <FiMenu size={28} style={{ color: "#403F2B" }} />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="mb-4 text-3xl font-bold text-center font-Bodoni">
                        Menu
                      </SheetTitle>
                      <SheetDescription>
                        <div className="flex flex-col items-center gap-4 text-lg font-Bodoni">
                          <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                          >
                            Home
                          </Link>
                          <Link
                            to="prenota"
                            smooth={true}
                            duration={500}
                            className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                          >
                            Prenota
                          </Link>
                          <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                          >
                            About
                          </Link>
                          <Link
                            to="gallery"
                            smooth={true}
                            duration={500}
                            className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                          >
                            Galleria
                          </Link>
                          <Link
                            to="mappa"
                            smooth={true}
                            duration={500}
                            className="text-olive px-4 hover:text-olive/50 cursor-pointer hover:underline underline-offset-4"
                          >
                            Mappa
                          </Link>
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
