import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';

const Map = () => {
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
      geocode: [18.73569, -70.16265],
      popUpTitle: "Dominican Republic",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [18.10958, -77.2975],
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
  ];
  
  const MyCustomIcon = L.icon({
    iconUrl: '/marker2.png', // Replace with the URL of your icon image
    iconSize: [30, 30], // Size of the icon
    iconAnchor: [15, 24], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -8], // Point from which the popup should open relative to the iconAnchor

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
          <Marker key={index} position={marker.geocode} icon={MyCustomIcon} >
            <Popup>
              <h2>{marker.popUpTitle}</h2>
              <p>{marker.popUpContent}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-4xl animate-bounce">
        ↓
      </div>
    </div>
  );
};

export default Map;
