import React from "react";

function Gallery() {
  return (
    <div className="bg-gialloPa">
      <div className="my-6 grid grid-cols-2 gap-4 md:max-w-4xl md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 bg-gialloPa">
        {/* Prima riga */}
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://picsum.photos/400/200"
            alt="Immagine 1"
            className="ring-2 ring-olive"
          />
        </div>
        {/* Seconda riga */}
        <div className="col-span-1 md:col-span-1">
          <img
            src="https://picsum.photos/270/200"
            alt="Immagine 2"
            className="ring-2 ring-olive"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <img
            src="https://picsum.photos/200/145"
            alt="Immagine 3"
            className="ring-2 ring-olive"
          />
        </div>
        {/* Terza riga */}
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://picsum.photos/400/200"
            alt="Immagine 4"
            className="ring-2 ring-olive"
          />
        </div>
        {/* Quarta riga */}
        <div className="col-span-1 md:col-span-1">
          <img
            src="https://picsum.photos/400/500"
            alt="Immagine 5"
            className="ring-2 ring-olive"
          />
        </div>
        {/* Quinta riga */}
        <div className="col-span-1 md:col-span-1">
          <img
            src="https://picsum.photos/170/200"
            alt="Immagine 6"
            className="w-[160px] ring-2 ring-olive h-[200px]"
          />
        </div>
        <div className="col-span-1 md:col-span-1">
          <img
            src="https://picsum.photos/200/200"
            alt="Immagine 7"
            className="h-[200px] ring-2 ring-olive"
          />
        </div>
        {/* Sesta riga */}
        <div className="col-span-2 md:col-span-1">
          <img
            src="https://picsum.photos/400/200"
            alt="Immagine 8"
            className="ring-2 ring-olive"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
