import React from "react";

function Gallery() {
  return (
    <div className=" bg-gialloPa">
      <div class="my-6 grid grid-cols-2 gap-4 sm:max-w-xl sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-2 bg-gialloPa">
        {/* <!-- Prima riga --> */}
        <div class="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <img
            src="https://picsum.photos/400/200"
            alt="Immagine 1"
            class="ring-2 ring-olive"
          />
        </div>
        {/* <!-- Seconda riga --> */}
        <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
          <img
            src="https://picsum.photos/270/200"
            alt="Immagine 2"
            class="ring-2 ring-olive"
          />
        </div>
        <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
          <img
            src="https://picsum.photos/200/145"
            alt="Immagine 3"
            class="ring-2 ring-olive"
          />
        </div>
        {/* <!-- Terza riga --> */}
        <div class="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <img
            src="https://picsum.photos/400/200"
            alt="Immagine 4"
            class="ring-2 ring-olive"
          />
        </div>
        {/* <!-- Quarta riga --> */}
        <div class="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <img
            src="https://picsum.photos/400/500"
            alt="Immagine 5"
            class="ring-2 ring-olive"
          />
        </div>
        {/* <!-- Quinta riga --> */}
        <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
          <img
            src="https://picsum.photos/170/200"
            alt="Immagine 6"
            class="w-[160px] ring-2 ring-olive h-[200px]"
          />
        </div>
        <div class="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1">
          <img
            src="https://picsum.photos/200/200"
            alt="Immagine 7"
            class=" h-[200px] ring-2 ring-olive"
          />
        </div>
        {/* <!-- Sesta riga --> */}
        <div class="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1">
          <img
            src="https://picsum.photos/400/200"
            alt="Immagine 8"
            class="ring-2 ring-olive "
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
