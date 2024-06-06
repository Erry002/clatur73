import { Link } from "react-router-dom";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";
import TextBox from "../components/TextBox.jsx";
import TextArea from "../components/TextArea.jsx";
import Gallery from "../components/Gallery.jsx";
import MapComponent from "../components/MapComponent.jsx";

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
import elli from "../assets/ellisse_modificato_1.png";

const images = [casa_1, casa_2, casa_3];

export default function Home() {
  return (
    <>
      <div className="flex flex-col overflow-hidden scrollbar-hide w-full min-h-screen scroll-smooth overflow-x-hidden font-Bodoni">
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
                <h6 className="absolute text-white text-4xl sm:text-[70px] w-[300px] sm:w-full font-[500] top-[90px] sm:top-[130px] left-12">
                  Benvenuti da Clatur73
                </h6>
                <p className="absolute text-white top-[190px] font-[400] left-12 text-lg sm:text-[24px]">
                  Casa vacanza con calore, confort e carattere
                </p>
                <Button
                  variant="outline"
                  className=" bg-transparent absolute font-sans font-[300] text-white z-10 top-[230px] left-[46px] rounded-3xl"
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
            <h6 className="py-6 z-10 text-[37px] font-[600] font-Bodoni text-olive">
              Prenota il tuo soggiorno con me.
            </h6>
            {/* <div className="h-[0.1px] w-[70%] justify-center items-center bg-olive"></div> */}
            <div className="z-10 flex flex-col items-center max-w-xl w-full pb-10 ring-2 ring-olive">
              <h6 className="p-6 text-[20px] text-justify">
                {" "}
                Contattami per sapere se sono disponibili delle camere per
                vivere una vacanza da sogno.
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
          <img
            src={elli}
            alt="ellisse"
            className="z-10 rotate-180 w-full h-[160px]"
          />
        </section>
        <section className="">
          <div className="flex flex-col sm:justify-center sm:items-center px-6 -mt-[160px] text-olive bg-giallino">
            <div className=" max-w-4xl">
              <h5 className="text-[35px] sm:text-[50px] font-[600] z-10 mt-[100px] leading-10">
                Qualcosa sulla mia dimora..
              </h5>
              <h6 className="text-[25px] sm:text-[30px] font-[600] leading-6 sm:leading-8 mt-4 sm:mt-6">
                Il tuo comfort e la tua convenienza è la mia priorità
              </h6>
              <p className="mt-4 text-lg sm:text-[20px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                assumenda, enim harum fuga nihil quae aspernatur ut labore quam
                unde vero necessitatibus natus molestiae praesentium vitae rem
                dolor architecto officiis. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Aliquid, eaque incidunt cumque quo
                laudantium iste deleniti corrupti aut saepe. Laborum voluptatem
                quam saepe repudiandae dolor blanditiis ea officiis earum!
                Incidunt.
              </p>
              <div className="px-6 sm:px-0 pt-4 pb-6 bg-giallino">
                <Button className="font-sans rounded-3xl font-[300] bg-trasparent ring-1 ring-olive hover:bg-grigio text-olive">
                  Scopri di più
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className=" h-5 bg-olive/80 "></div>
        <section>
          <div className="flex flex-col text-center font-[500] bg-gialloPa w-full pt-8 pb-6">
            <h5 className=" text-[30px]">Gallery</h5>
            <h6 className=" text-lg">
              A un passo dal mare e dalla movida nostra
            </h6>
            <div className="bg-gialloPa px-4">
              <Gallery></Gallery>
            </div>
          </div>
        </section>
        <div className=" h-5 bg-olive/80 "></div>
        <section className="">
          <div className=" sm:flex sm:justify-center bg-giallino py-4 px-6">
            <div className=" sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-4xl">
              <h6 className=" text-3xl mb-4 sm:text-[40px] font-[600]">
                Dove si trova...
              </h6>
              <div className=" gap-4 pb-4">
                <p className=" font-sans font-[200] text-[16] sm:text-[20px] mb-8">
                  Benvenuti nella nostra incantevole casa vacanze a Catania,
                  un'oasi di relax e divertimento a pochi passi dal mare e dal
                  centro storico. Situata in una posizione privilegiata, potrai
                  goderti la bellezza delle spiagge catanesi e l'atmosfera
                  vibrante del centro storico, ricco di storia e cultura. La
                  casa è ideale per chi desidera trascorrere una vacanza
                  indimenticabile, con tutti i comfort necessari per rendere il
                  soggiorno piacevole e rilassante.
                </p>
                <p className=" font-sans font-[200] text-[16] sm:text-[20px] mb-8">
                  Dotata di spazi luminosi e accoglienti, offre un ambiente
                  ideale per famiglie, gruppi di amici o coppie. Dalle finestre
                  potrai ammirare lo splendido panorama del mare, mentre il
                  centro storico con le sue stradine pittoresche e i suoi
                  monumenti storici si trova a breve distanza, facilmente
                  raggiungibile a piedi.
                </p>
                <p className=" font-sans font-[200] text-[16] sm:text-[20px] mb-8">
                  E quando cala il sole, la movida notturna di Catania prende
                  vita, offrendoti una vasta scelta di locali, ristoranti e bar
                  dove potrai assaporare la cucina locale e vivere la vera anima
                  della città. Non vediamo l'ora di darti il benvenuto nella
                  nostra casa vacanze e farti scoprire tutte le meraviglie di
                  Catania!
                </p>
              </div>
              <div className=" bg-olive h-[400px] w-full text-white items-center flex justify-center">
                Maps
              </div>
              {/* <MapComponent></MapComponent> */}
            </div>
          </div>
        </section>
        <div className=" h-5 bg-olive/80 "></div>
        <section>
          <div className="flex flex-col p-4 font-sans bg-gialloPa">
            <h6 className=" p-3 mb-2 text-3xl font-Bodoni font-[500] leading-6">
              Cosa troverai <br /> vicino alla residenza:
            </h6>
            <div className=" bg-grigio p-3 ring-2 ring-olive shadow-xl mb-6">
              <h2 className=" mb-2 text-[20px]">Edifici Culturali come:</h2>
              <div className=" flex justify-between">
                <ol className=" ml-5 list-disc ">
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
                <ol className=" mr-2">
                  <li>2,8 km</li>
                  <li>2,9 km</li>
                  <li>3,3 km</li>
                  <li>3,4 km</li>
                  <li>3,7 km</li>
                  <li>3,8 km</li>
                  <li>4,0 km</li>
                  <li>4,1 km</li>
                  <li>4,2 km</li>
                  <li>4,2 km</li>
                </ol>
              </div>
            </div>
            <div className=" flex flex-col p-4 ring-2 ring-olive shadow-xl bg-grigio">
              <h6 className=" text-[20px]">Per la movida:</h6>
              <div className=" flex justify-between">
                <ol className=" ml-5 list-disc ">
                  <li>Piazza Dante</li>
                  <li>Teatro Romano Di Catania</li>
                  <li>Casa Museo di Giovanno Verga</li>
                  <li>Castello Ursino</li>
                  <li>Porta Garibaldi</li>
                  <li>A Putia Dell'Ostello </li>
                </ol>
                <ol className="">
                  <li>4,3 km</li>
                  <li>4,3 km</li>
                  <li>4,4 km</li>
                  <li>4,7 km</li>
                  <li>5,0 km</li>
                  <li>5,4 km</li>
                </ol>
              </div>
            </div>
            <p className=" py-6 font-sans font-[200] px-2 text-justify">
              É queste sono solo alcune delle tappe più iconiche della città di
              Catania, ma sentiti libero di chiedermi qualsiasi cosa su luoghi e
              attrazioni che ti piacerebbe visitare!!
            </p>
          </div>
        </section>
        <div className=" h-5 bg-olive/80 "></div>
        <section>
          <div className=" text-olive bg-giallino pb-20 p-6">
            <h6 className=" text-[31px] font-[500] leading-8 mb-4">
              Le opinioni dei <br />
              nostri ospiti
            </h6>
            <div className=" ring-2 ring-olive p-2 mb-4 shadow-xl">
              <p className=" font-sans text-[200] text-[16px] mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, nobis rerum nostrum illo repellat ut officiis dicta
                repellendus eum! Quam!
              </p>
              <h5 className=" text-[21px] mb-2 shadow-xl">L. Bianchi</h5>
            </div>
            <div className=" ring-2 ring-olive p-2 mb-4 shadow-xl">
              <p className=" font-sans text-[200] text-[16px] mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, nobis rerum nostrum illo repellat ut officiis dicta
                repellendus eum! Quam!
              </p>
              <h5 className=" text-[21px] mb-2 shadow-xl">L. Rossi</h5>
            </div>
            <div className=" ring-2 ring-olive p-2 mb-4 shadow-xl">
              <p className=" font-sans text-[200] text-[16px] mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, nobis rerum nostrum illo repellat ut officiis dicta
                repellendus eum! Quam!
              </p>
              <h5 className=" text-[21px] mb-2 shadow-xl">L. Verdi</h5>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
