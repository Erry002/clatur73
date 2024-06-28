import React, { useEffect } from 'react';

const MapComponent = () => {
  useEffect(() => {
    // Carica lo script di Google Maps
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDRuV91jIeATXFDYrouZcQs1BcDk98Bqbo&callback=initMap&libraries=maps,marker&v=beta`;
    script.async = true;
    document.head.appendChild(script);

    // Callback per inizializzare la mappa
    window.initMap = function () {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.53925323486328, lng: 15.10033893585205 },
        zoom: 16,
        mapId: 'DEMO_MAP_ID'
      });

      const marker = new window.google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: 37.53925323486328, lng: 15.10033893585205 },
        title: 'My location'
      });

      marker.addListener('click', () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=37.53925323486328,15.10033893585205&travelmode=driving`;
        window.open(url, '_blank');
      });
    };

    return () => {
      // Rimozione del callback e del script se necessario
      delete window.initMap;
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-full ring-1 ring-olive">
      <div id="map" className="w-full h-96"></div>
    </div>
  );
};

export default MapComponent;
/*
AIzaSyDRuV91jIeATXFDYrouZcQs1BcDk98Bqbo
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
