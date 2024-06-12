import { Link } from "react-router-dom";
import React from "react";
import elli from "../assets/ellisse_modificato_1.png";

export default function footer() {
  return (
    <>
      <img src={elli} alt="ellisse" className=" w-full h-[160px] z-10 -mt-40 shadow-xl" />
      <footer className=" bg-grigio w-full sm:flex sm:justify-center sm:items-center">
        <div className=" flex flex-col max-w-4xl w-full sm:flex-row sm:justify-between sm:items-center font-[200] gap-6 py-8 px-6">
          <h1 className="font-Bodoni font-[500] text-[31px]">Clatur73</h1>
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
