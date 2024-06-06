import React from "react";

const MapComponent = () => {
  return (
    <div className="relative w-full h-96 shadow-2xl">
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.651141995531!2d15.09214131534365!3d37.50234298046878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13134f1a5a5a5a5a%3A0x400c455c71a41111!2sVia%20Novaluce%2C%2073%2C%2095030%20Catania%2C%20Italia!5e0!3m2!1sen!2sus!4v1677700655051!5m2!1sen!2sus&markers=color:orange%7Clabel:S%7CVia%20Novaluce%2C%207%2C%2095030%20Catania%2C%20Italia`}
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        className=" rounded-xl shadow-2xl ring-2 ring-olive"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div> */}
    </div>
  );
};

export default MapComponent;

/*
    L'API di Google Maps non è completamente gratuita. Google offre una versione gratuita dell'API con alcune limitazioni, ma se si superano queste limitazioni, è necessario pagare una tariffa per l'utilizzo dell'API.

Ecco le principali limitazioni della versione gratuita dell'API di Google Maps:

2,500 richieste al giorno per gli utenti autenticati (ad esempio, gli utenti che hanno effettuato l'accesso con un account Google)
25 richieste al giorno per gli utenti non autenticati
100,000 richieste al mese per gli utenti che hanno creato un progetto nel Google Cloud Console e hanno abilitato la fatturazione
Se si superano queste limitazioni, Google addebiterà una tariffa per ogni richiesta aggiuntiva. La tariffa varia in base al tipo di richiesta e al numero di richieste effettuate.

Inoltre, Google offre anche piani di tariffazione diversi per l'API di Google Maps, ad esempio:

Il piano "Google Maps JavaScript API" costa $0,005 per richiesta per gli utenti autenticati e $0,01 per richiesta per gli utenti non autenticati
Il piano "Google Maps Static API" costa $0,002 per richiesta
Il piano "Google Maps Directions API" costa $0,005 per richiesta
È importante notare che queste tariffe sono soggette a cambiamenti, quindi è sempre meglio verificare le informazioni sulla tariffazione sul sito web di Google.

In generale, se si utilizza l'API di Google Maps per un progetto personale o per un sito web con un traffico limitato, la versione gratuita potrebbe essere sufficiente. Tuttavia, se si utilizza l'API per un progetto commerciale o per un sito web con un traffico elevato, è probabile che si debba pagare una tariffa per l'utilizzo dell'API.
*/
