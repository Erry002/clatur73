import { Link } from "react-router-dom";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";
import TextBox from "../components/TextBox.jsx";
import TextArea from "../components/TextArea.jsx";

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
} from "@/components/ui/carousel";
//3, 19, 15,
import casa_1 from "../assets/casa_1.jpeg";
import casa_2 from "../assets/casa_2.jpeg";
import casa_3 from "../assets/casa_3.jpeg";

const images = [casa_1, casa_2, casa_3];

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen overflow-x-hidden font-Bodoni">
        <section className="overflow-x-hidden">
          {/*carosello immagini */}
          <div className="relative justify-center h-full overflow-x-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                infinite: true,
                swipe: true,
              }}
              orientation="horizontal"
              className="w-full overflow-x-hidden"
            >
              <div className="absolute z-10 h-full w-full bg-[#00000060]">
                <h6 className="absolute text-white text-4xl font-[500] top-[90px] left-12">
                  Benvenuti da <br /> Clature73
                </h6>
                <p className="absolute text-white top-[175px] font-[400] left-12 text-lg">
                  Casa vacanza con calore, confort e <br />carattere
                </p>
                <Button
                  variant="outline"
                  className=" bg-transparent absolute font-sans font-[300] text-white z-10 top-[260px] left-12 rounded-3xl"
                >
                  Chiedi disponibilità
                </Button>
              </div>
              <CarouselContent className="">
                {images.map((image, index) => (
                  <CarouselItem key={index} className=" md:basis-full">
                    <div className="">
                      <Card>
                        <CardContent
                          className={`flex w-full h-[500px] ${colors.mainObjects} items-center justify-center`}
                        >
                          <img
                            src={image}
                            alt={`foto casa ${index + 1}`}
                            className={`w-full h-full object-cover ${colors.borderSecondary}`}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* <div className="absolute z-40 -mt-[250px] ">
                <CarouselPrevious
                  className={`${colors.childObjects} w-8 h-8`}
                />
                <CarouselNext className={`${colors.childObjects} w-8 h-8`} />
              </div> */}
            </Carousel>
          </div>
        </section>
        <section className="">
          <div className="z-10 flex flex-col items-center px-6 py-2 text-left bg-grigio">
            <h6 className="py-4 z-10 text-[27px] font-[500] font-Bodoni text-olive">
              Prenota il tuo soggiorno con me.
            </h6>
            {/* <div className="h-[0.1px] w-[70%] justify-center items-center bg-olive"></div> */}
            <div className="z-10 flex flex-col items-center w-full py-4 ring-2 ring-olive">
              <h6 className="px-4 pb-4 text-justify">
                {" "}
                Contattami persapere se sono disponibili delle camere per vivere
                una vacanza da sogno.
              </h6>
              <p className=" w-[230px] text-justify"></p>
              <div className=" w-[80%] mb-4">
                <TextBox
                  title="Nome Completo"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder="Mario Rossi"
                />
                <TextBox
                  title="Email"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder="Mariorossi@gmail.com"
                />
                <TextBox
                  title="Numero di tel"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  placeholder="+39 340 123 1212"
                />
                <TextArea
                  title="Richieste particolari"
                  cols={10}
                  rows={30}
                  placeholder="Ho un animale domestico, "
                />
              </div>
              <Button className="items-center ring-2 ring-olive bg-gialloPa text-olive w-[80%] mb-2">
                Invia
              </Button>
            </div>
          </div>
          <div className="absolute z-0 -bottom-[500px] -left-[540px] w-[1500px] h-[700px] rounded-b-full bg-grigio overflow-hidden"></div>
        </section>
        <section className="overflow-x-hidden">
          <div className="flex flex-col px-6 text-olive bg-giallino">
            <h5 className="text-[35px] font-[600] z-10 mt-[40px] leading-10">Qualcosa sulla mia dimora..</h5>
            <h6 className="text-[25px] font-[500] mt-4">Il tuo comfort e la tua convenienza è la mia priorità</h6>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              assumenda, enim harum fuga nihil quae aspernatur ut labore quam
              unde vero necessitatibus natus molestiae praesentium vitae rem
              dolor architecto officiis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquid, eaque incidunt cumque quo laudantium
              iste deleniti corrupti aut saepe. Laborum voluptatem quam saepe
              repudiandae dolor blanditiis ea officiis earum! Incidunt.
            </p>
          </div> 
          <div className="px-6 pb-4 bg-giallino">
            <Button className="font-sans rounded-3xl font-[300] bg-trasparent ring-1 ring-olive hover:bg-grigio text-olive">Scopri di più</Button>
          </div>
        </section>
        <section>
          <div className=" bg-gialloPa">
            <h5>Gallery</h5>
            <h6>A un passo dal mare e dalla movida nostra</h6>
          </div>
          <div className="grid ">
            
          </div>
        </section>
      </div>
    </>
  );
}
