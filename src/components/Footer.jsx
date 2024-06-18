import { Link } from "react-router-dom";
import React from "react";
import elli from "../assets/ellisse_modificato_1.png";
import { TbBrandBooking } from "react-icons/tb";
import { LuHotel } from "react-icons/lu";
import { SiAirbnb } from "react-icons/si";

export default function footer() {
  return (
    <>
      <img
        src={elli}
        alt="ellisse"
        className=" w-full h-[160px] z-10 -mt-40"
      />
      <footer className=" bg-grigio w-full sm:flex sm:justify-center sm:items-center">
        <div className=" flex flex-col max-w-4xl w-full sm:flex-row sm:justify-between sm:items-center font-[200] gap-6 py-8 px-6">
          <h1 className="font-Bodoni font-[500] text-[31px]">Clatur73</h1>
          <div className=" flex gap-4">
            <a href="https://www.booking.com/hotel/it/clatur73.it.html">
              <TbBrandBooking className=" size-10 cursor-pointer" />
            </a>
            <a href="https://planetofhotels.com/en/italy/santagata-li-battiati-/clatur73">
              <LuHotel className=" size-9" />
            </a>
          </div>
          <div>
            <h6 className=" ">cel: (+39) 328 773 2571</h6>
            <h6 className=" ">email: Info@gmail.com</h6>
          </div>
          <h6>
            Via Novaluce, 73 ,95123 Catania CT, <br />
            Italia
          </h6>
        </div>
      </footer>
    </>
  );
}
