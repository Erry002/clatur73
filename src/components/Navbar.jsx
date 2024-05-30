import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Link } from "react-router-dom";
import React from "react";
import { FiMenu } from 'react-icons/fi';

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
}

const Navbar = () => {
  return (
    <nav className=" bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4">
          <div className=" hidden sm:block w-full pr-10">
            <div className=" flex justify-between items-center max-w-7xl">
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    clsx(" uppercase font-bold text-xl", {
                      "": isActive,
                    })
                  }
                >
                  MeloSito
                </NavLink>
              </div>
              <div className="flex gap-5 text-lg justify-end items-center">
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
            </div>
          </div>
          <div className=" block sm:hidden w-full">
            <div className=" flex justify-between items-center max-w-7xl">
              <div>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    clsx(" uppercase font-bold text-xl", {
                      "": isActive,
                    })
                  }
                >
                  MeloSito
                </NavLink>
              </div>
              <div className=" flex justify-end items-center">
                <Sheet>
                  <SheetTrigger>
                    <FiMenu size={28} style={{ color: "green" }} />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="text-3xl font-bold text-center mb-4">Menu</SheetTitle>
                      <SheetDescription>
                        <div className=" flex flex-col items-center gap-4 text-lg">
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
                            Atrazioni
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
