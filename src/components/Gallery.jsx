import React, { useState } from "react";
import images from "./ui/images.js";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className="relative bg-center bg-no-repeat sm:h-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          infinite: true,
          swipe: true,
        }}
        orientation="horizontal"
        className="max-w-4xl overflow-x-hidden "
      >
        <CarouselContent className="gap-2 mb-2 ">
          {/* Iterazione sugli items del carousel */}
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center rounded-sm px-72 sm:px-0 w-[500px] sm:basis-1/3"
            >
              {/* Contenuto del singolo item del carousel */}
              <img
                src={image}
                alt={`foto casa ${index + 1}`}
                className="object-cover p-1 rounded-sm sm:m-1 sm:ml-0 bg-giallino ring-1 ring-olive h-96 "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-1" />
        <CarouselNext className="absolute right-1" />
      </Carousel>
    </div>
  );
}

export default Gallery;