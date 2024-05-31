import { Link } from "react-router-dom";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card"
import colors from "../components/colors.json";

import { FaWifi } from "react-icons/fa6";
import { MdLocalParking } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
//3, 19, 15, 
import casa_1 from "../assets/casa_1.jpeg";
import casa_2 from "../assets/casa_2.jpeg";
import casa_3 from "../assets/casa_3.jpeg";

const images = [casa_1, casa_2, casa_3];



export default function Home() {

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <section> {/*carosello immagini */}
          <div className="flex justify-center h-[530px]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                infinite: true,
                swipe: true,
              }}
              orientation="horizontal"
              className="w-full"
            >
              <CarouselContent className=" ">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-full w-52">
                    <div className="p-1">
                      <Card>
                        <CardContent className={`flex w-full h-[500px] ${colors.mainObjects} items-center justify-center p-4 rounded-xl`}>
                          <img src={image} alt={`foto casa ${index + 1}`} className={`w-full h-full object-cover rounded-xl border ${colors.borderSecondary}`} />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-between -mt-[260px] mx-12 ">
                <CarouselPrevious className={`${colors.childObjects} w-12 h-12`} />
                <CarouselNext className={`${colors.childObjects} w-12 h-12`} />
              </div>
            </Carousel>
          </div>
        </section>
        {/* sezione info */}
        <section className="flex justify-between mx-4 mt-2">
          <div className="flex flex-col items-center justify-center">
            <FaWifi size={50} color={colors.mainIconObjects}/>
            <h2 className="text-center leading-5 text-sm">WiFi Gratuito</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaBed size={50} color={colors.mainIconObjects} />
            <h2 className="text-center leading-5 text-sm">Stanze confortevoli </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <MdLocalParking size={50} color={colors.mainIconObjects} />
            <h2 className="text-center leading-5 text-sm">Parcheggio Gratuito</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <RiCustomerService2Fill size={50} color={colors.mainIconObjects} />
            <h2 className="text-center leading-5 text-sm">Servizio h24</h2>
          </div>
        </section>
        {/*Sezione posizione*/}
        <section>
          <div className={`mt-10 ${colors.mainObjects} px-4 text-left`}>
            <h2>Clatur73 - </h2>
            <p className="text-sm leading-5 mt-4">
              Clatur73 is a recently renovated apartment in Catania, where guests can make the most of its private beach area and garden. This beachfront property offers access to free WiFi and free private parking. The property is non-smoking and is set 2.3 km from Spiaggetta di Ognina.
            </p>
            <p className="text-sm leading-5 mt-4">
              The spacious apartment with a balcony and garden views features 2 bedrooms, a living room, a flat-screen TV, an equipped kitchen with an oven and a microwave, and 1 bathroom with a bidet. Towels and bed linen are featured in the apartment. The property offers city views.
            </p>
            <p className="text-sm leading-5 mt-4">
              A restaurant and snack bar can be found on-site.
            </p>
            <p className="text-sm leading-5 mt-4">
              A variety of wellness packages are available for guests to get rejuvenated on-site. For guests with children, the apartment offers outdoor play equipment. Both a bicycle rental service and a car rental service are available at Clatur73, while cycling and walking tours can be enjoyed nearby.
            </p>
            <p className="text-sm leading-5 mt-4">
              Catania Piazza Duomo is 6.7 km from the accommodation, while Taormina Cable Car - Mazzaro Station is 46 km away. The nearest airport is Catania Fontanarossa Airport, 11 km from Clatur73.
              Le distanze nella descrizione della struttura sono calcolate con © OpenStreetMap
            </p>
          </div>
          <div className={`flex justify-center items-center h-[500px] ${colors.childObjects} rounded-xl p-4 m-4 shadow-xl`}>
            <h1 className="drop-shadow-2xl">Mappa google</h1>
          </div>
        </section>
        {/* sezione info */}
        <section>
          <div className="ml-5">
            <h2 className="text-center leading-5 text-xl">Perché prenotare con me?</h2>
            <p>Perché troverete vicino alla struttura:</p>
            <div className="flex justify-between">
              <ol className="list-disc ml-10">
                <li>Parco Madre Teresa di Calcutta</li>
                <li>Fontana dei Malavoglia</li>
                <li>Marsala, Selinunte E Segesta</li>
                <li>Villa Bellini</li>
                <li>Palazzo del Toscano</li>
                <li>Anfiteatro Romano di Catania</li>
                <li>Palazzo San Demetrio</li>
                <li>Piazza dell'Università</li>
                <li>Palazzo Biscari</li>
                <li>Piazza Duomo</li>
              </ol>
              <ol className={`mr-10 ${colors.textSecondary}`}>
                <li>2,8 km</li>
                <li>2,9 km</li>
                <li>3,3 km</li>
                <li>3,4 km</li>
                <li>3,7 km</li>
                <li>3,8 km</li>
                <li>4 km</li>
                <li>4,1 km</li>
                <li>4,2 km</li>
                <li>4,2 km</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
{/*
{
    "mainObjects": "#A9A9A9",
    "childObjects": "#2F4F4F",
    "mainIconObjects": "#228B22", 
    "textPrimary": "text-gray-800",
    "textSecondary": "#a9a9a9",
    "backgroundPrimary": "bg-white",
    "backgroundSecondary": "bg-gray-100",
    "buttonPrimary": "bg-red-500",
    "buttonSecondary": "bg-yellow-500",
    "borderPrimary": "border-gray-300",
    "borderSecondary": "border-red-500"
  },
*/}