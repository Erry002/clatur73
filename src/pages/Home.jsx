import { useState } from "react";
import * as React from "react";
import emailjs from "emailjs-com";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";
import TextBox from "../components/TextBox.jsx";
import CheckBox from "../components/CheckBox.jsx";
import BoxRecensioni from "../components/BoxRecensioni.jsx";
import TextArea from "../components/TextArea.jsx";
import Gallery from "../components/Gallery.jsx";
import MapComponent from "../components/MapComponent.jsx";
import colors from "../components/colors.json";
// import recensioni from "@/components/recensioni.json"
import ReviewsCarousel from "../components/ReviewsCarousel.jsx";
// import images_catania from "../components/ui/images_catania.json";
import imagesCatania from "../components/ui/images_catania.js";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import casa_1 from "../assets/foto_casa_carmelo/casa_15.jpeg";
import casa_2 from "../assets/foto_casa_carmelo/casa_19.jpeg";
import casa_3 from "../assets/foto_casa_carmelo/casa_3.jpeg";
import casa_6 from "../assets/foto_casa_carmelo/casa_6.jpeg";
import casa_13 from "../assets/foto_casa_carmelo/casa_13.jpeg";
import elli from "../assets/ellisse_modificato_1.png";
import elli2 from "../assets/ellisse_modificato_2.png";
import { Star } from "lucide-react";
import {
  LuAccessibility,
  LuBed,
  LuBus,
  LuChefHat,
  LuDog,
  LuHome,
  LuLanguages,
  LuPalmtree,
  LuParkingCircle,
  LuShoppingCart,
  LuShowerHead,
  LuWifi,
} from "react-icons/lu";

const images = [casa_1, casa_2, casa_3, casa_6, casa_13];

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
      <div className="flex flex-col w-full min-h-screen overflow-hidden overflow-x-hidden scrollbar-hide scroll-smooth font-Bodoni">
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
                <div className="absolute text-xl text-white bottom-24 left-12 sm:bottom-20">
                  <p>Camere a partire da: 50€</p>
                </div>
                <div className="absolute text-xl text-white bottom-16 left-12 sm:right-12 sm:left-auto sm:bottom-20 ">
                  <h6 className="">Valutazione da Booking</h6>
                  <div className="absolute">
                    <div className="flex ">
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
                          className={`flex w-full h-[600px] sm:h-[1050px]  items-center justify-center`}
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
            </Carousel>
          </div>
        </section>
        <section className="" id="prenota">
          <div className="z-10 flex flex-col items-center px-3 py-2 text-left bg-giallino">
            <h6 className="py-6 z-10 text-[37px] sm:text-[50px] font-[800] font-Bodoni text-olive">
              Prenota il tuo soggiorno con me.
            </h6>
            <div className="z-10 flex flex-col items-center w-full max-w-xl pb-10 rounded-sm shadow-2xl ring-2 ring-olive">
              <h6 className="p-6 text-[20px] font-sans font-[200] text-justify">
                Contattami per sapere se sono disponibili delle camere per
                vivere una vacanza da sogno.
              </h6>
              <form onSubmit={handleSubmit} className="px-6 mb-4 font-sans ">
                <div className="mb-6">
                  <Calendar
                    mode="range"
                    selected={selectedDates}
                    onSelect={handleDateSelect}
                    className="rounded-sm ring-olive ring-1 bg-olive/20 items-center justify-center flex sm:w-[500px]"
                  />
                  <div className="flex justify-center gap-32 mt-4 font-sans text-center rounded-sm bg-grigio ring-2 text-olive ring-olive">
                    <p className="">
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

                <div className="w-full mb-4">
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
                  className="items-center w-full my-2 mt-4 ring-2 ring-olive bg-grigio text-olive hover:olive/20"
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
            <div className="max-w-4xl px-6 ">
              <h5 className="text-[35px] sm:text-center sm:text-[50px] font-[800] z-10 mt-[100px] leading-10">
                Qualcosa sulla mia dimora..
              </h5>
              <h6 className="text-[25px] sm:text-[30px] sm:text-center font-[600] leading-6 sm:leading-8 mt-4 sm:mt-6">
                Il tuo comfort e la tua convenienza è la mia priorità
              </h6>
              <p className="my-4 text-lg font-sans font-[200] sm:text-[20px]">
                Questa casa moderna e luminosa offre una{" "}
                <span className=" text-olive font-[600]">
                  vista panoramica mozzafiato{" "}
                </span>
                sul paesaggio circostante, con scorci sul mare che aggiungono un
                tocco di serenità. Gli interni sono caratterizzati da ampi spazi
                aperti, pavimenti in piastrelle lucide e un
                <span className=" text-olive font-[600]">
                  {" "}
                  design minimalista{" "}
                </span>
                che enfatizza la luce naturale.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-grigio">
            <div className="w-full max-w-4xl px-2 py-1 rounded-sm bg-giallino ring-1 ring-olive">
              <h5 className=" text-[30px] font-[600] text-center">
                Tutti i servizi che offriamo
              </h5>
              <div className="font-sans">
                <div className="flex flex-col gap-4 p-2 px-6 mb-4 rounded-t-sm bg-grigio/30 sm:flex-row ring-1 ring-olive">
                  <div>
                    <div className="flex ">
                      <LuParkingCircle className="mt-1 mr-2 " />
                      <h6 className="text-lg font-[600]">Parcheggio</h6>
                    </div>
                    <p>
                      Ampio parcheggio privato disponibile gratuitamente in loco
                    </p>
                  </div>
                  <div>
                    <div className="flex">
                      <LuDog className="mt-1 mr-2" />
                      <h6 className="text-lg font-[600]">Animali</h6>
                    </div>
                    <p>
                      Animali ammessi su richiesta. Potrebbe essere richiesto un
                      supplemento.
                    </p>
                  </div>
                  <div>
                    <div className="flex ">
                      <LuWifi className="mt-1 mr-2" />
                      <h6 className="text-lg font-[600]">Internet</h6>
                    </div>
                    <p>
                      Internet WiFi disponibile gratuitamente in tutta la
                      struttura.
                    </p>
                  </div>
                  <div>
                    <div className="flex ">
                      <LuAccessibility className="mt-1 mr-2 " />
                      <h6 className="text-lg font-[600]">Accessibiltà </h6>
                    </div>
                    <p>Piani superiori accessibili tramite ascensore</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center px-6 py-4 mb-1 -mt-4 rounded-b-sm bg-grigio/30 sm:flex-row sm:gap-32 ring-1 ring-olive">
                  <div className="">
                    <div className="my-4">
                      <div className="flex ">
                        <LuHome className="mt-1 mr-2 " />
                        <h6 className=" text-lg font-[600]">
                          Confort della casa
                        </h6>
                      </div>
                      <ol className="ml-5 list-disc ">
                        <li>Area fumatori designata</li>
                        <li>Aria condizionata</li>
                        <li>Tv a schermo piatto</li>
                        <li>Scrivania</li>
                        <li>Zona Soggiorno</li>
                        <li>Zona Pranzo</li>
                      </ol>
                    </div>
                    <div className="my-4 ">
                      <div className="flex ">
                        <LuBed className="mt-1 mr-2" />
                        <h6 className="text-lg font-[600]">
                          Servizio in camera
                        </h6>
                      </div>
                      <ol className="ml-5 list-disc ">
                        <li>Stendibiancheria</li>
                        <li>Stand appendiabiti</li>
                        <li>Ferro e asse da stiro</li>
                        <li>Ferro da stiro</li>
                      </ol>
                    </div>
                    <div className="my-4 ">
                      <div className="flex ">
                        <LuBus className="mt-1 mr-2" />
                        <h6 className="text-lg font-[600]">
                          Servizio di Trasporto
                        </h6>
                      </div>
                      <ol className="ml-5 list-disc ">
                        <li>
                          Noleggio biciclette{" "}
                          <span className="p-1 text-sm rounded-sm bg-giallino/50 ring-1 ring-olive">
                            a pagamento
                          </span>
                        </li>
                        <li className="my-1 ">
                          Servizio navetta{" "}
                          <span className="p-1 text-sm rounded-sm bg-giallino/50 ring-1 ring-olive">
                            a pagamento
                          </span>
                        </li>
                        <li>
                          Biglietti per i mezzi <br />
                          di trasporto{" "}
                          <span className="p-1 text-sm rounded-sm bg-giallino/50 ring-1 ring-olive">
                            a pagamento
                          </span>
                        </li>
                        <li>Autonoleggio</li>
                        <li>Navetta Aereoportuale</li>
                      </ol>
                    </div>
                    <div className="my-4 ">
                      <div className="flex ">
                        <LuPalmtree className="mt-1 mr-2" />
                        <h6 className="text-lg font-[600]">
                          Spazzi all'aperto
                        </h6>
                      </div>
                      <ol className="ml-5 list-disc ">
                        <li>
                          Ampio parco di 30.000mq <br />
                          separato dal parcheggio{" "}
                        </li>
                        <li>Balcone</li>
                        <li>Vista Città</li>
                        <li>Vista Giardino</li>
                        <li>Vista Mare</li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <div className="my-4 ">
                      <div className="flex ">
                        <LuShowerHead className="mt-1 mr-2 " />
                        <h6 className=" text-lg font-[600]">Bagno</h6>
                      </div>
                      <ol className="ml-5 list-disc ">
                        <li>Bagno privato</li>
                        <li>Prodotti da bagno in omaggio</li>
                        <li>Asciugacapelli</li>
                      </ol>
                    </div>
                    <div className="my-4 ">
                      <div className="flex ">
                        <LuChefHat className="mt-1 mr-2 " />
                        <h6 className=" text-lg font-[600]">Cucina</h6>
                      </div>
                      <ol className="ml-5 list-disc ">
                        <li>Tavolo da pranzo</li>
                        <li> Prodotti per le pulizie</li>
                        <li>Piano cottura</li>
                        <li>Bollitore</li>
                        <li>Cucina</li>
                        <li>Forno a microonde</li>
                        <li>Frigorifero</li>
                      </ol>
                    </div>
                    <div className="my-4 ">
                      <div className="flex ">
                        <LuShoppingCart className="mt-1 mr-2" />
                        <h6 className=" text-lg font-[600]">Negozi</h6>
                      </div>
                      <ol className="ml-5 list-disc ">
                        <li>Market</li>
                        <li>Panificio</li>
                        <li>Ristorante</li>
                        <li>Meccanico</li>
                        <li>Fermata Bus</li>
                        <li>Parrucchiere</li>
                        <li>Centro estetico</li>
                      </ol>
                    </div>
                    <div className="mt-4 ">
                      <div className="flex ">
                        <LuLanguages className="mt-1 mr-2 " />
                        <h6 className=" text-lg font-[600]">Lingue parlate</h6>
                      </div>
                      <ol className="ml-5 list-disc ">
                        <li>Inglese</li>
                        <li>Italiano</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery">
          <div className="flex justify-center items-center text-center font-[500] bg-grigio w-full pt-8 pb-6">
            <div className="flex flex-col items-center justify-center max-w-4xl ">
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
        <div className="h-5 bg-olive/80"></div>
        <section className="" id="mappa">
          <div className="px-6 py-4 sm:flex sm:justify-center bg-giallino">
            <div className=" sm:flex sm:flex-col sm:justify-center sm:items-center sm:max-w-4xl">
              <h6 className=" text-3xl mb-4 sm:text-[50px] font-[800]">
                Dove si trova...
              </h6>
              <div className="gap-4 pb-4 ">
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
                    si trova a breve distanza.
                  </span>
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
        <div className="h-5 bg-olive/80"></div>
        <section>
          <div className="flex flex-col p-4 font-sans sm:justify-center sm:items-center bg-grigio ">
            <h6 className=" text-olive p-3 mb-2 sm:mb-8 sm:mt-2 text-3xl sm:text-[50px] font-Bodoni font-[500] w-[400px] sm:w-full sm:text-center leading-10">
              Cosa troverai vicino alla residenza:
            </h6>
            <div className=" sm:max-w-5xl sm:flex sm:flex-col xl:flex-row sm:justify-center sm:items-center sm:gap-10 sm:w-full sm:mb-4">
              <div className="sm:h-[320px] p-3 ring-2 ring-olive rounded-sm shadow-xl mb-6 sm:mb-0">
                <h2 className=" mb-2 text-[20px]">Edifici Culturali come:</h2>
                <div className="flex justify-between gap-4 ">
                  <ol className="ml-5 list-disc ">
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/Pu1534Q2QN6tp8MUA"
                      >
                        Parco Madre Teresa di Calcutta
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/qgd1STJHMVbrskF26"
                      >
                        Fontana dei Malavoglia
                      </a>
                    </li>

                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/GgWPV9AZvspZGcVu7"
                      >
                        Villa Bellini
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/jiEg7RHsDLK4Lbqk6"
                      >
                        Palazzo del Toscano
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/BenhtKkYiGbmg5mA8"
                      >
                        Anfiteatro Romano di Catania
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/6Mq88VXiZkZYPn8V7"
                      >
                        Palazzo San Demetrio
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/8FiMeuuZdKAsF1jd8"
                      >
                        Piazza dell'Università
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/NsQ8qLwXYpCefVB29"
                      >
                        Palazzo Biscari
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
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
              <div className="sm:h-[320px] p-3 ring-2 rounded-sm ring-olive shadow-xl mb-6 sm:mb-0">
                <h6 className=" text-[20px]">Per la movida:</h6>
                <div className=" flex justify-between sm:h-[248px]">
                  <ol className="ml-5 list-disc ">
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/WXkh8FwdktDi7t3t7"
                      >
                        LungoMare di Catania
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/DguCSKMWZUR6NHW19"
                      >
                        Porto Rossi
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/626M1gcuvk8o1Ewi7"
                      >
                        Piazza Dante
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/bogt5xpzACPLWJis5"
                      >
                        Teatro Romano Di Catania
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/sMZrLdeZMiGqhEtM8"
                      >
                        Casa Museo di Giovanno Verga
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/UAuh9PEso7AhT6yD7"
                      >
                        Castello Ursino
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/W3oisgHJuYGFv4288"
                      >
                        Porta Garibaldi
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
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
              <div className="sm:h-[320px] p-3 ring-2 rounded-sm ring-olive shadow-xl">
                <h6 className=" text-[20px]">Ristoranti:</h6>
                <div className=" flex justify-between sm:h-[248px]">
                  <ol className="ml-5 list-disc ">
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/BWYMcynVYYLzzyHfA"
                      >
                        Pizza Time
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/5EivJQ83MUHfw5h36"
                      >
                        Al Braciere da donna Pippa
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/e9nvEb4nF8S85mKx9"
                      >
                        Botanike Resturant
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/tkGZpriYfkZhtRLa7"
                      >
                        Quattrochiacchiere
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/jZAcpYWpwqDkoqyC6"
                      >
                        Gohan Catania
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline hover:text-olive/50 underline-offset-2"
                        href="https://maps.app.goo.gl/cnMaRuG3oSHUVbiZ6"
                      >
                        I Dolci di Nonna Vincenza
                      </a>
                    </li>
                  </ol>
                  <ol className="">
                    <li>800 m</li>
                    <li>900 m</li>
                    <li>1,3 km</li>
                    <li>1,6 km</li>
                    <li>1,7 km</li>
                    <li>2,1 km</li>
                  </ol>
                </div>
              </div>
            </div>
            <p className=" pt-6 font-sans sm:max-w-4xl sm:text-xl font-[200] px-2 text-justify">
              É queste sono solo alcune delle tappe più iconiche della città di
              Catania, ma sentiti libero di chiedermi qualsiasi cosa su luoghi e
              attrazioni che ti piacerebbe visitare!!
            </p>
            <div className="relative bg-center bg-no-repeat sm:h-full">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  infinite: true,
                  swipe: true,
                }}
                orientation="horizontal"
                className="overflow-x-hidden sm:max-w-5xl"
              >
                <CarouselContent className="gap-2 mb-2">
                  {imagesCatania.map((items, index) => (
                    <CarouselItem
                      key={index}
                      className="flex items-center justify-center rounded-sm sm:px-0 sm:basis-1/3"
                    >
                      <div className="flex flex-col-reverse items-center justify-center p-2 px-6 pt-4 pb-8 rounded-sm ">
                        <h6 className="w-[96%] rounded-sm text-xl mt-6 font-Bodoni font-[600] text-center py-1 z-50">
                          {items.title}
                        </h6>
                        <img
                          src={items.url}
                          alt={`foto catania ${index + 1}`}
                          className="sm:m-1 sm:ml-0 bg-no-repeat bg-contain shadow-2xl bg-giallino p-2 ring-1 rounded-sm ring-olive h-[600px] sm:w-[400px] mt-1"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute shadow-xl left-1" />
                <CarouselNext className="absolute shadow-xl right-1" />
              </Carousel>
            </div>
          </div>
        </section>
        <div className="h-5 bg-olive/80"></div>
        <section>
          <div className="p-6 pb-20 text-olive bg-giallino">
            <h6 className=" text-[31px] w-[250px] sm:text-center sm:w-full sm:text-[50px] font-[500] leading-8 mb-4 sm:mb-14 mt-6 sm:mt-6">
              Le opinioni dei nostri ospiti:
            </h6>
            <div className="max-w-5xl m-auto h-96">
              <ReviewsCarousel />
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
  - aggiunta descrizione confort casa V
  -carosello attrazioni + descrizione V
  -aggiunta ristoranti
  -rivalutare recensioni clienti (dissolvenza con possibilità di vederle tutte al click) stile AppStore V
  -Google My Business: Registra la tua casa vacanze su Google My Business per apparire nelle ricerche locali.
*/
}
