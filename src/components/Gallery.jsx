import React from "react";
import images from "./ui/images.js"; // Assicurati che il percorso sia corretto

function Gallery() {
  return (
    <>
      <div className="grid gap-4 grid-cols-2 max-w-4xl px-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
        <div className="grid">
          <img
            src={images.casa_1}
            alt="Immagine 1"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_2}
            alt="Immagine 2"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_3}
            alt="Immagine 3"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_4}
            alt="Immagine 4"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_5}
            alt="Immagine 5"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_6}
            alt="Immagine 6"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_7}
            alt="Immagine 7"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_16}
            alt="Immagine 16"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_9}
            alt="Immagine 9"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_10}
            alt="Immagine 10"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_20}
            alt="Immagine 20"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
        <div className="grid">
          <img
            src={images.casa_12}
            alt="Immagine 12"
            className="ring-2 rounded ring-olive hover:scale-150 transition-all"
          />
        </div>
      </div>
    </>
  );
}


export default Gallery;
