import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import { useState, useRef, useEffect } from 'react';

const Map = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const jordanMarkerRef = useRef(null);
  const [jordanScreenPosition, setJordanScreenPosition] = useState({ x: 0, y: 0 });
  const [jordanPercentPosition, setJordanPercentPosition] = useState({ x: '0%', y: '0%' });
  const [markerReady, setMarkerReady] = useState(false);

  useEffect(() => {
    if (jordanMarkerRef.current) {
      const markerElement = jordanMarkerRef.current;
      const element = markerElement.getElement();
      
      const updatePosition = () => {
        const rect = element.getBoundingClientRect();
        const pixelX = rect.left + rect.width / 2;
        const pixelY = rect.top + rect.height / 2;
        
        // Calculate percentages
        const percentX = ((pixelX / window.innerWidth) * 100).toFixed(2);
        const percentY = ((pixelY / window.innerHeight) * 100).toFixed(2);

        setJordanScreenPosition({ x: pixelX, y: pixelY });
        setJordanPercentPosition({ x: `${percentX}%`, y: `${percentY}%` });
        setMarkerReady(true);
      };

      // Update position initially and when map moves
      updatePosition();
      markerElement._map.on('move zoom', updatePosition);

      return () => {
        if (markerElement._map) {
          markerElement._map.off('move zoom', updatePosition);
        }
      };
    }
  }, [jordanMarkerRef.current]);

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
      geocode: [41.37749, 64.58526],
      popUpTitle: "Armenia",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
  ];
  
  const MyCustomIcon = L.icon({
    iconUrl: '/marker3.png',
    iconSize: [30, 30],
    iconAnchor: [15, 24],
    popupAnchor: [1, -8],
  });

  const screenWidth = window.innerWidth;
  return (
    <div id="/" className="bg-black/50 relative">
      <MapContainer
        className="z-0 rounded-bl-[15rem]"
        id="map"
        zoomSnap={0.01}
        center={screenWidth > 768 ? [10, 0] : [25, -10]}
        zoom={screenWidth > 768 ? 3.4 : 1.55}
        scrollWheelZoom={false}
        dragging={screenWidth > 768}
        attributionControl={false}
        zoomControl={false}
        doubleClickZoom={false}
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
                {markerReady && (
                  <circle 
                    cx={jordanPercentPosition.x} 
                    cy={jordanPercentPosition.y} 
                    r="50" 
                    fill="black"
                  />
                )}
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="rgba(0,0,0,0.7)"
              mask="url(#circle-mask)"
            />
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
