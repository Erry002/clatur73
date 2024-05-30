import { Link } from "react-router-dom";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
//3, 19, 15, 
//import casa_ from "../assets/casa_1.jpeg";
//import casa_ from "../assets/casa_2.jpeg";
//import casa_ from "../assets/casa_3.jpeg";

//<img src={casa_15} alt="foto casa" className={variants.classCasa}/>

//posso creare una variabile che contiene delle classi di taiwind per usarla
//in più componenti (esempio i link della navbar) così da non ricopiare ogni volta 
//tutte le classi
const variants = {
  base: " ml-4",
  classCasa: " w-[300px] h-[300px] rounded-xl"
}

export default function Home() {

  return (
    <div className="flex justify-center min-h-screen">
      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        className="w-[500px] mx-8"
      >
        <CarouselContent className=" sm:h-[550px] mt-52 h-[500px] ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square bg-red-300 items-center justify-center p-6">
                  <span className="text-2xl font-semibold ">{index + 1}</span>
                  {/* <img src={`casa_`${index}} alt="foto casa" className={variants.classCasa}/> */}
                </CardContent>
              </Card>
            </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between">
          <CarouselPrevious className="bg-red-500" />
          <CarouselNext className="bg-red-500 flex" />
        </div>
      </Carousel>
    </div>
  )

}
