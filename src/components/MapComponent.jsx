import React from "react";

const MapComponent = () => {
  return (
    <div className="relative w-full h-96 shadow-2xl">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC_XRfIC1kXGHMwEbUYFKoO4R8LIVEeN4k&q=37.5393797,15.1001286`}
        
        /* src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.651141995531!2d15.1001286!3d37.5393797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13134f1a5a5a5a5a%3A0x400c455c71a41111!2sVia%20Novaluce%2C%2073%2C%2095030%20Catania%2C%20Italia!5e0!3m2!1sen!2sus!4v1677700655051!5m2!1sen!2sus&markers=color:orange%7Clabel:S%7CVia%20Novaluce%2C%207%2C%2095030%20Catania%2C%20Italia`} */
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        className=" rounded-sm shadow-2xl ring-2 ring-olive"
        referrerPolicy="no-referrer-when-downgrade"
      />
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
