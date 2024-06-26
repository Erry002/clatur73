/* 
    <div className=" ring-2 rounded-sm ring-olive p-2 mb-4 shadow-2xl">
                <p className=" font-sans text-[200] text-[16px] mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, nobis rerum nostrum illo repellat ut officiis
                  dicta repellendus eum! Quam!
                </p>
                <div className=" border w-full my-2 border-black"></div>
                <div className=" flex text-xl justify-between mb-1">
                  <h5 className=" ">L.Rossi</h5>
                  <div className="flex">
                    <Star className=" stroke-black fill-yellow-500" />
                    <Star className=" stroke-black fill-yellow-500" />
                    <Star className=" stroke-black fill-yellow-500" />
                    <Star className=" stroke-black fill-yellow-500" />
                    <Star className=" stroke-black " />
                  </div>
                </div>
              </div>
*/
import React from "react";
import { Star } from "lucide-react";
import reviews from "@/components/recensioni.json"

const Reviews = () => {
  return (
    <div>
      <h1>Recensioni della Casa Vacanza</h1>
      <ul>
        {reviews.reviews.map((review, index) => (
          <li key={index}>
            <h2>{review.username}</h2>
            <p>Valutazione: {review.rating}</p>
            <p>Data: {review.date}</p>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
