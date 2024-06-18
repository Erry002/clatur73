import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from "react";
import emailjs from "emailjs-com";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";
import TextBox from "../components/TextBox.jsx";
import CheckBox from "../components/CheckBox.jsx";
import TextArea from "../components/TextArea.jsx";
import Gallery from "../components/Gallery.jsx";
import MapComponent from "../components/MapComponent.jsx";
import colors from "../components/colors.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import casa_1 from "../assets/casa_1.jpeg";
import casa_2 from "../assets/casa_2.jpeg";
import casa_3 from "../assets/casa_3.jpeg";
import elli from "../assets/ellisse_modificato_1.png";
import elli2 from "../assets/ellisse_modificato_2.png";
import { Star } from "lucide-react";

const images = [casa_1, casa_2, casa_3];

export default function Home() {
  const [selectedDates, setSelectedDates] = useState({ from: null, to: null });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [cellulare, setCellulare] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDateSelect = (dates) => {
    setSelectedDates(dates);
  };

  // console.log("Date selezionate: ", selectedDates);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validazione del form
    if (
      !name ||
      !email ||
      !cellulare ||
      !message ||
      !isChecked ||
      !selectedDates.from ||
      !selectedDates.to
    ) {
      alert(
        "Per favore compila tutti i campi e accetta i termini e condizioni."
      );
      return;
    }

    const fromDate = selectedDates?.from + 0;
    const toDate = selectedDates?.to + 0;

    // Verifica che le date siano valide
    if (!fromDate || !toDate) {
      alert("Seleziona una data di inizio e una data di fine valide.");
      return;
    }

    // Verifica che le date siano oggetti Date validi
    // if (!(fromDate instanceof Date) || !(toDate instanceof Date)) {
    //   alert("Le date selezionate non sono valide.");
    //   return;
    // }

    // console.log("fromDate:", fromDate);
    // console.log("toDate:", toDate);

    // console.log("Delle cose: ", selectedDates.from);
    // console.log("Delle cose: ", selectedDates.to);

    const serviceId = "service_hozzjlm";
    const templateId = "template_u42rl68";
    const publicKey = "vjw7dcQJizcn3ce0Z";

    const templateParams = {
      fromDate,
      toDate,
      name,
      email,
      message,
      cellulare,
      isChecked,
    };

    // const templateParams = {
    //   fromDate: fromDate.toLocaleDateString(), // Se emailjs richiede una stringa
    //   toDate: toDate.toLocaleDateString(), // Se emailjs richiede una stringa
    //   name,
    //   email,
    //   message,
    //   cellulare,
    //   isChecked,
    // };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email inviata con successo!");
      },
      (error) => {
        console.error("FAILED...", error);
        alert(`Errore nell'invio della email: ${error.text}. Riprova.`);
      }
    );
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden scrollbar-hide w-full min-h-screen scroll-smooth overflow-x-hidden font-Bodoni">
        <section className="overflow-x-hidden" id="home">
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
                <h6 className="absolute text-white text-4xl sm:text-[72px] w-[300px] sm:w-full font-[500] sm:leading-[70px] top-[150px] sm:top-[330px] left-12">
                  Benvenuti da Clatur73
                </h6>
                <p className="absolute text-white top-[240px] sm:top-[480px] md:top-[420px] xl:top-[420px] font-[400] left-14 text-lg sm:text-[24px]">
                  Casa vacanza con calore, confort e carattere
                </p>
                <div className="absolute bottom-24 left-12 sm:bottom-20 text-white text-xl">
                  <p>Camere a partire da: 50€</p>
                </div>
                <div className="absolute bottom-16 left-12 sm:right-12 sm:left-auto sm:bottom-20 text-white text-xl ">
                  <h6 className=" ">Valutazione da Booking</h6>
                  <div className="absolute">
                    <div className=" flex">
                      <Star className=" fill-giallino stroke-giallino/90" />
                      <Star className=" fill-giallino stroke-giallino/90" />
                      <Star className=" fill-giallino stroke-giallino/90" />
                      <Star className=" stroke-giallino/90" />
                      <Star className=" stroke-giallino/90" />
                    </div>
                  </div>
                </div>
              </div>
              <CarouselContent className="">
                {images.map((image, index) => (
                  <CarouselItem key={index} className=" md:basis-full">
                    <div className="">
                      <Card>
                        <CardContent
                          className={`flex w-full h-[500px] sm:h-[900px]  items-center justify-center`}
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
        <section className="" id="prenota">
          <div className="z-10 flex flex-col items-center px-3 py-2 text-left bg-giallino">
            <h6 className="py-6 z-10 text-[37px] sm:text-[50px] font-[800] font-Bodoni text-olive">
              Prenota il tuo soggiorno con me.
            </h6>
            <div className="z-10 flex flex-col items-center max-w-xl w-full pb-10 ring-2 ring-olive">
              <h6 className="p-6 text-[20px] font-sans font-[200] text-justify">
                Contattami per sapere se sono disponibili delle camere per
                vivere una vacanza da sogno.
              </h6>
              <form onSubmit={handleSubmit} className=" font-sans mb-4">
                <div className="mb-6">
                  <Calendar
                    mode="range"
                    selected={selectedDates}
                    onSelect={handleDateSelect}
                    className="rounded-2xl ring-olive ring-1 bg-olive/20 items-center justify-center flex sm:w-[500px]"
                  />
                  <div className=" flex bg-grigio text-center justify-center mt-4 ring-2 rounded-2xl text-olive ring-olive gap-32 font-sans">
                    <p className=" ">
                      Check-in:
                      <br />
                      {selectedDates?.from
                        ? selectedDates.from.toLocaleDateString()
                        : "N/A"}
                    </p>
                    <p>
                      Check-out:
                      <br />
                      {selectedDates?.to
                        ? selectedDates.to.toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>
                </div>

                <div className="w-full  mb-4">
                  <TextBox
                    reguired
                    title="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Mario Rossi"
                  />
                  <TextBox
                    required
                    title="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Mariorossi@gmail.com"
                  />
                  <TextBox
                    reguired
                    title="Cellulare"
                    value={cellulare}
                    onChange={(e) => setCellulare(e.target.value)}
                    placeholder="+39 340 123 1212"
                  />
                  <TextArea
                    title="Box richieste:"
                    cols={10}
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Esempio: Ho un animale domestico,"
                  />
                </div>
                <CheckBox
                  isChecked={isChecked}
                  value={isChecked}
                  onChange={(e) => setIsChecked(e.target.value)}
                  label="Accetto termini e condizioni delle Privacy e Cookie Policy"
                />
                <Button
                  type="submit"
                  className="items-center ring-2 ring-olive bg-grigio text-olive w-full my-2 mt-4 hover:olive/20"
                >
                  Invia
                </Button>
              </form>
            </div>
          </div>
          <img
            src={elli2}
            alt="ellisse"
            className="z-10 rotate-180 w-full h-[160px]"
          />
        </section>

        <section className="" id="about">
          <div className="flex flex-col sm:justify-center sm:items-center -mt-[160px] text-olive bg-grigio">
            <div className=" px-6 max-w-4xl ">
              <h5 className="text-[35px] sm:text-center sm:text-[50px] font-[800] z-10 mt-[100px] leading-10">
                Qualcosa sulla mia dimora..
              </h5>
              <h6 className="text-[25px] sm:text-[30px] sm:text-center font-[600] leading-6 sm:leading-8 mt-4 sm:mt-6">
                Il tuo comfort e la tua convenienza è la mia priorità
              </h6>
              <p className="my-4 text-lg font-sans font-[200] sm:text-[20px]">
                Questa casa moderna e luminosa offre una{" "}
                <span className=" text-olive font-[600]">
                  vista panoramica mozzafiato
                </span>{" "}
                sul paesaggio circostante, con scorci sul mare che aggiungono un
                tocco di serenità. Gli interni sono caratterizzati da ampi spazi
                aperti, pavimenti in piastrelle lucide e un{" "}
                <span className=" text-olive font-[600]">
                  design minimalista
                </span>{" "}
                che enfatizza la luce naturale.
              </p>
            </div>
          </div>
        </section>
        {/* <div className=" h-5 bg-olive/80 "></div> */}
        <section id="gallery">
          <div className="flex justify-center items-center text-center font-[500] bg-grigio w-full pt-8 pb-6">
            <div className=" flex flex-col justify-center items-center max-w-4xl">
              <h5 className=" text-[25px] font-[600] sm:text-[50px]">
                Galleria Foto
              </h5>
              <h6 className=" text-lg font-sans font-[200] pb-6 w-72 sm:w-full sm:text-[22px]">
                A un pochi chilometri dal mare e dalla movida nostra
              </h6>
              <div className="">
                <Gallery></Gallery>
              </div>
            </div>
          </div>
        </section>
        <div className=" h-5 bg-olive/80 "></div>
        <section className="" id="mappa">
          <div className=" sm:flex sm:justify-center bg-giallino py-4 px-6">
            <div className=" sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-4xl">
              <h6 className=" text-3xl mb-4 sm:text-[50px] font-[800]">
                Dove si trova...
              </h6>
              <div className=" gap-4 pb-4">
                <p className=" font-sans font-[200] text-[16] sm:text-[20px] mb-8">
                  Benvenuti nella nostra incantevole casa vacanze a Catania,
                  un'oasi di relax e divertimento a{" "}
                  <span className=" text-olive font-[600]">
                    pochi chilometri dal mare
                  </span>{" "}
                  e dal centro storico. Situata in una posizione privilegiata,
                  potrai goderti la bellezza delle spiagge catanesi e
                  l'atmosfera vibrante del centro storico, ricco di storia e
                  cultura. La casa è ideale per chi desidera{" "}
                  <span className=" text-olive font-[600]">
                    trascorrere una vacanza indimenticabile
                  </span>
                  , con tutti i comfort necessari per rendere il soggiorno
                  piacevole e rilassante.
                </p>
                <p className=" font-sans font-[200] text-[16] sm:text-[20px] mb-8">
                  Dotata di spazi luminosi e accoglienti, offre un ambiente
                  <span className=" text-olive font-[600]">
                    {" "}
                    ideale per famiglie
                  </span>
                  , gruppi di amici o coppie. Dalle finestre potrai ammirare lo
                  splendido panorama del mare, mentre il centro storico con le
                  sue stradine pittoresche e i suoi monumenti storici{" "}
                  <span className=" text-olive font-[600]">
                    si trova a breve distanza
                  </span>{" "}
                  e facilmente raggiungibile a piedi.
                </p>
                <p className=" font-sans font-[200] text-[16] sm:text-[20px] mb-8">
                  E quando cala il sole,{" "}
                  <span className=" text-olive font-[600]">
                    la movida notturna
                  </span>{" "}
                  Catanese prende vita, offrendoti una vasta scelta di locali,
                  ristoranti e bar dove potrai{" "}
                  <span className=" text-olive font-[600]">
                    assaporare la cucina locale
                  </span>{" "}
                  e vivere la vera anima della città. Non vediamo l'ora di darti
                  il benvenuto nella nostra casa vacanze e farti scoprire tutte
                  le meraviglie di Catania!
                </p>
              </div>
              {/* <div className=" bg-olive h-[400px] w-full text-white items-center flex justify-center">
                Maps
              </div> */}
              <MapComponent></MapComponent>
            </div>
          </div>
        </section>
        <div className=" h-5 bg-olive/80 "></div>
        <section>
          <div className="flex flex-col p-4 font-sans sm:justify-center sm:items-center bg-grigio ">
            <h6 className=" text-olive p-3 mb-2 sm:mb-8 sm:mt-2 text-3xl sm:text-[50px] font-Bodoni font-[500] w-[400px] sm:w-full sm:text-center leading-10">
              Cosa troverai vicino alla residenza:
            </h6>
            <div className=" sm:max-w-4xl sm:flex sm:justify-center sm:items-center sm:gap-10 sm:w-full sm:mb-4">
              <div className="sm:h-[320px] p-3 ring-2 ring-olive shadow-xl mb-6 sm:mb-0">
                <h2 className=" mb-2 text-[20px]">Edifici Culturali come:</h2>
                <div className=" flex justify-between">
                  <ol className=" ml-5 list-disc ">
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/Pu1534Q2QN6tp8MUA"
                      >
                        Parco Madre Teresa di Calcutta
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/qgd1STJHMVbrskF26"
                      >
                        Fontana dei Malavoglia
                      </a>
                    </li>

                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/GgWPV9AZvspZGcVu7"
                      >
                        Villa Bellini
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/jiEg7RHsDLK4Lbqk6"
                      >
                        Palazzo del Toscano
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/BenhtKkYiGbmg5mA8"
                      >
                        Anfiteatro Romano di Catania
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/6Mq88VXiZkZYPn8V7"
                      >
                        Palazzo San Demetrio
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/8FiMeuuZdKAsF1jd8"
                      >
                        Piazza dell'Università
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/NsQ8qLwXYpCefVB29"
                      >
                        Palazzo Biscari
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/juxqFohAYt6xdg1E7"
                      >
                        Piazza Duomo
                      </a>
                    </li>
                  </ol>
                  <ol className="">
                    <li>2,8 km</li>
                    <li>2,9 km</li>
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
              <div className="sm:h-[320px] p-3 ring-2 ring-olive shadow-xl">
                <h6 className=" text-[20px]">Per la movida:</h6>
                <div className=" flex justify-between sm:h-[248px]">
                  <ol className=" ml-5 list-disc ">
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/WXkh8FwdktDi7t3t7"
                      >
                        LungoMare di Catania
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/DguCSKMWZUR6NHW19"
                      >
                        Porto Rossi
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/626M1gcuvk8o1Ewi7"
                      >
                        Piazza Dante
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/bogt5xpzACPLWJis5"
                      >
                        Teatro Romano Di Catania
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/sMZrLdeZMiGqhEtM8"
                      >
                        Casa Museo di Giovanno Verga
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/UAuh9PEso7AhT6yD7"
                      >
                        Castello Ursino
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/W3oisgHJuYGFv4288"
                      >
                        Porta Garibaldi
                      </a>
                    </li>
                    <li>
                      <a
                        className=" underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/jXJNfg4ekavkxiwL6"
                      >
                        A Putia Dell'Ostello
                      </a>
                    </li>
                  </ol>
                  <ol className="">
                    <li>2,4 km</li>
                    <li>3,9 km</li>
                    <li>4,3 km</li>
                    <li>4,3 km</li>
                    <li>4,4 km</li>
                    <li>4,7 km</li>
                    <li>5,0 km</li>
                    <li>5,4 km</li>
                  </ol>
                </div>
              </div>
            </div>
            <p className=" pt-6 font-sans sm:max-w-4xl sm:text-xl font-[200] px-2 text-justify">
              É queste sono solo alcune delle tappe più iconiche della città di
              Catania, ma sentiti libero di chiedermi qualsiasi cosa su luoghi e
              attrazioni che ti piacerebbe visitare!!
            </p>
            <Carousel className="w-full max-w-sm">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 500 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <div className=" h-5 bg-olive/80 "></div>
        <section>
          <div className=" sm:flex sm:flex-col sm:justify-center sm:items-center text-olive bg-giallino pb-32 p-6">
            <h6 className=" text-[31px] w-[250px] sm:text-center sm:w-full sm:text-[50px] font-[500] leading-8 mb-4 sm:mb-14 sm:mt-6">
              Le opinioni dei nostri ospiti:
            </h6>
            <div className="sm:flex sm:justify-center sm:items-center sm:gap-8 sm:max-w-4xl ">
              <div className=" ring-2 ring-olive p-2 mb-4 shadow-2xl">
                <p className=" font-sans text-[200] text-[16px] mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, nobis rerum nostrum illo repellat ut officiis
                  dicta repellendus eum! Quam!
                </p>
                <div className=" border w-full my-2 border-black"></div>
                <div className=" flex text-xl justify-between mb-1">
                  <h5 className=" ">L. Bianchi</h5>
                  <div className="flex">
                    <Star className=" stroke-black fill-yellow-500" />
                    <Star className=" stroke-black fill-yellow-500" />
                    <Star className=" stroke-black fill-yellow-500" />
                  </div>
                </div>
              </div>
              <div className=" ring-2 ring-olive p-2 mb-4 shadow-2xl">
                <p className=" font-sans text-[200] text-[16px] mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium, nobis rerum nostrum illo repellat ut officiis
                  dicta repellendus eum! Quam!
                </p>
                <div className=" border w-full my-2 border-black"></div>
                <div className=" flex text-xl justify-between mb-1">
                  <h5 className=" ">L.Verdi </h5>
                  <div className="flex">
                    <Star className=" stroke-black fill-yellow-500" />
                    <Star className=" stroke-black fill-yellow-500" />
                    <Star className=" stroke-black fill-yellow-500" />
                  </div>
                </div>
              </div>
              <div className=" ring-2 ring-olive p-2 mb-4 shadow-2xl">
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
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

{
  /*
  cosa da aggiungere
  -prezzo e valutazione booking in home page  V
  - aggiunta descrizione confort casa O
  -carosello attrazioni + descrizione 
  -aggiunta ristoranti
  -rivalutare recensioni clienti (dissolvenza con possibilità di vederle tutte al click) stile AppStore
*/
}
