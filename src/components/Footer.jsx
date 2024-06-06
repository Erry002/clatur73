import { Link } from "react-router-dom";
import React from "react";
import elli from "../assets/ellisse_modificato_1.png";

export default function footer() {
  return (
    <>
      <img
        src={elli}
        alt="ellisse"
        className=" w-full h-[160px] z-10 -mt-40"
      />
      <div className=" flex flex-col font-[200] bg-grigio gap-6 py-8 px-6">
        <h1 className="font-Bodoni font-[500] text-[31px]">Clatur73</h1>
        <div>
          <h6 className=" ">(+39) 328 773 2571</h6>
          <h6 className=" ">Info@gmail.com</h6>
        </div>
        <h6>
          Via Novaluce, 73 ,95123 Catania CT, <br />
          Italia
        </h6>
      </div>
    </>
  );
}
