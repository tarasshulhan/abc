import { MapContainer, TileLayer, Marker, Popup, ZoomControl} from "react-leaflet";
import L from 'leaflet';
import { useState, useRef, useEffect } from 'react';

const Map = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const jordanMarkerRef = useRef(null);

  useEffect(() => {
    if (!showOverlay && jordanMarkerRef.current) {
      jordanMarkerRef.current.openPopup();
    }
  }, [showOverlay]);

  const markers = [
    {
      geocode: [33.93911, 67.70995],
      popUpTitle: "Afghanistan",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [40.1431, 47.57692],
      popUpTitle: "Azerbaijan", 
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [19.3, -70.16265],
      popUpTitle: "Dominican Republic",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [18.70958, -77.2975],
      popUpTitle: "Jamaica",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [30.58516, 36.23841],
      popUpTitle: "Jordan",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [48.01957, 66.92368],
      popUpTitle: "Kazakhstan",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [42.8746, 74.5698],
      popUpTitle: "Kyrgyzstan",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [19.4326, -99.1332],
      popUpTitle: "Mexico",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [38.86103, 71.27609],
      popUpTitle: "Tajikistan",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [41.37749, 64.58526],
      popUpTitle: "Uzbekistan",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [40.0691, 45.0382],
      popUpTitle: "Armenia",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
  ];
  
  const MyCustomIcon = L.icon({
    iconUrl: '/marker.png',
    iconSize: [30, 30],
    iconAnchor: [15, 24],
    popupAnchor: [1, -8],
  });

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const [jordanPercentPosition, setJordanPercentPosition] = useState({ x: '0%', y: '0%', labelX: '0%' });

  useEffect(() => {
    const updatePosition = () => {
      if (jordanMarkerRef.current) {
        const markerElement = jordanMarkerRef.current;
        const element = markerElement.getElement();
        const rect = element.getBoundingClientRect();
        const xPercent = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
        const yPercent = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
        
        setJordanPercentPosition({ 
          x: `${xPercent}%`,
          y: `${yPercent}%`,
          labelX: `${xPercent - (screenWidth > 768 ? 5 : 15)}%`, // Offset label 10% to the left
        });
      }
    };

    // Small delay to ensure the map and marker are fully rendered
    const timeoutId = setTimeout(updatePosition, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="/"  className="bg-black/50 relative">
      <MapContainer
        style={{height: screenHeight}}
        className="z-0 rounded-bl-[15rem]"
        id="map"
        zoomSnap={0.01}
        center={screenWidth > 768 ? [10, 0] : [25, -10]}
        zoom={screenWidth > 768 ? 3.4 : 1.55}
        scrollWheelZoom={false}
        doubleClickZoom={screenWidth > 768 ? true : false}
        dragging={screenWidth > 768}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={marker.geocode} 
            icon={MyCustomIcon}
            ref={marker.popUpTitle === "Jordan" ? jordanMarkerRef : null}
          >
            <Popup>
              <h2>{marker.popUpTitle}</h2>
              <p>{marker.popUpContent}</p>
            </Popup>
          </Marker>
        ))}
      {screenWidth > 768 && <ZoomControl position="bottomright"/>}
      </MapContainer>

      {showOverlay && (
        <div 
          className="absolute inset-0 z-10"
          onClick={() => setShowOverlay(false)}
        >
          <svg className="w-full h-full" style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
            <defs>
              <mask id="circle-mask">
                <rect width="100%" height="100%" fill="white"/>
                <circle 
                cx={jordanPercentPosition.x} 
                cy={jordanPercentPosition.y} 
                r={screenWidth > 768 ? "50" : "30"} 
                fill="black"/>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="rgba(0,0,0,0.7)"
              mask="url(#circle-mask)"
            />
            <text
              x={jordanPercentPosition.labelX}
              y={jordanPercentPosition.y}
              fill="white"
              fontSize="20"
              textAnchor="end"
              dominantBaseline="middle"
              className="hidden md:block"
            >
              Click here →
            </text>
            <text
              x={jordanPercentPosition.labelX}
              y={jordanPercentPosition.y}
              fill="white"
              fontSize="20"
              textAnchor="end"
              dominantBaseline="middle"
              className="block md:hidden"
            >
              Tap here →
            </text>
          </svg>
        </div>
      )}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-4xl animate-bounce">
        ↓
      </div>
    </div>
  );
};

export default Map;
