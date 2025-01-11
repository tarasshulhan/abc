import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
      geocode: [40.1431, 47.57692],
      popUpTitle: "Kyrgyzstan",
      popUpContent: "Afghanistan is a country in Central Asia.",
    },
    {
      geocode: [41.20438, 74.76609],
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

  const screenWidth = window.innerWidth;
  return (
    <MapContainer
      className="w-full h-full z-0"
      id="map"
      zoomSnap={0.1}
      center={[38.709991, -9.472008]}
      zoom={screenWidth > 768 ? 3.4 : 1.5}
      scrollWheelZoom={false}
      dragging={screenWidth > 768}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.geocode}>
          <Popup>
            <h2>{marker.popUpTitle}</h2>
            <p>{marker.popUpContent}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
