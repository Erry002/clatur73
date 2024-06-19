import React, { useState } from "react";
import images from "./ui/images.js";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Controllo se images è un array valido
  if (!Array.isArray(images) || images.length === 0) {
    return <div>Errore: Nessuna immagine disponibile.</div>;
  }

  return (
    <div className="relative  sm:h-full bg-no-repeat bg-center">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          infinite: true,
          swipe: true,
        }}
        orientation="horizontal"
        className=" max-w-4xl overflow-x-hidden"
      >
        <CarouselContent className=" gap-2 mb-2">
          {/* Iterazione sugli items del carousel */}
          {images.map((image, index) => (
            <CarouselItem key={index} className=" flex px-72 sm:px-0 sm:basis-1/3 justify-center items-center">
              {/* Contenuto del singolo item del carousel */}
              <img src={image} alt={`foto casa ${index + 1}`} className="sm:m-1 sm:ml-0 bg-giallino p-1 ring-1 rounded-sm ring-olive h-96 w-96 mt-1 ml-4" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Gallery;

{
  /* <div className="grid gap-4 grid-cols-2 max-w-4xl px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
        <div className="grid">
          <img
            src={images.casa_1}
            alt="Immagine 1"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_2}
            alt="Immagine 2"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_3}
            alt="Immagine 3"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_4}
            alt="Immagine 4"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_5}
            alt="Immagine 5"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_6}
            alt="Immagine 6"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_7}
            alt="Immagine 7"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_16}
            alt="Immagine 16"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_9}
            alt="Immagine 9"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_10}
            alt="Immagine 10"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_20}
            alt="Immagine 20"
            className="ring-2 rounded ring-olive"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_12}
            alt="Immagine 12"
            className="ring-2 rounded ring-olive"
          />
        </div>
      </div> */
}
