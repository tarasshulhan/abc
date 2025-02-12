import { MapContainer, TileLayer, Marker, Popup, ZoomControl} from "react-leaflet";
import L from 'leaflet';
import { useState, useRef, useEffect } from 'react';
import Cookies from 'js-cookie';
import { markers } from '../data/markers';

const Map = () => {
  // Screen dimensions for responsive layout
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  
  // State and refs
  const [showOverlay, setShowOverlay] = useState(() => {
    return Cookies.get('hasSeenOverlay') !== 'true';
  });
  const jordanMarkerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(screenWidth > 768 ? 3.4 : 1.55); // Different zoom levels for mobile/desktop
  const mapRef = useRef(null);
  const [jordanPercentPosition, setJordanPercentPosition] = useState({ x: '0%', y: '0%', labelX: '0%' });

  // Effect: Open Jordan marker popup when overlay is closed
  useEffect(() => {
    if (!showOverlay && jordanMarkerRef.current) {
      jordanMarkerRef.current.openPopup();
    }
  }, [showOverlay]);

  // Effect: Track scroll position for scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect: Set cookie when overlay is closed
  useEffect(() => {
    if (!showOverlay) {
      Cookies.set('hasSeenOverlay', 'true', { expires: 365 });
    }
  }, [showOverlay]);

  // Effect: Calculate Jordan marker position for overlay
  useEffect(() => {
    const updatePosition = () => {
      if (jordanMarkerRef.current) {
        const markerElement = jordanMarkerRef.current;
        const element = markerElement.getElement();
        const rect = element.getBoundingClientRect();
        
        // Calculate position as percentages of viewport
        const xPercent = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
        const yPercent = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
        
        setJordanPercentPosition({ 
          x: `${xPercent}%`,
          y: `${yPercent}%`,
          labelX: `${xPercent - (screenWidth > 768 ? 5 : 15)}%`, // Offset label position
        });
      }
    };

    const timeoutId = setTimeout(updatePosition, 100); // Delay to ensure render
    return () => clearTimeout(timeoutId);
  }, []);

  // Custom marker icon configuration
  const MyCustomIcon = L.icon({
    iconUrl: '/marker4.png',
    iconSize: [30, 30],
    iconAnchor: [15, 24],
    popupAnchor: [1, -8],
  });

  // Map zoom control handlers
  const handleZoomIn = () => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.setZoom(map.getZoom() + 1);
      setZoomLevel(map.getZoom());
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.setZoom(map.getZoom() - 1);
      setZoomLevel(map.getZoom());
    }
  };

  return (
    <div id="/" className="bg-black/50 relative">
      {/* Main Map Container */}
      <MapContainer
        ref={mapRef}
        style={{height: screenHeight}}
        className="z-0 rounded-bl-[15rem]"
        id="map"
        zoomSnap={0.01}
        center={screenWidth > 768 ? [10, 0] : [25, -10]} // Different centers for mobile/desktop
        zoom={zoomLevel}
        scrollWheelZoom={false}
        doubleClickZoom={true}
        dragging={screenWidth > 768} // Enable dragging only on desktop
        attributionControl={false}
        zoomControl={false}
      >
        {/* Map Tile Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Map Markers */}
        {markers.map((marker, index) => (
          <Marker 
            key={index} 
            position={marker.geocode} 
            icon={MyCustomIcon}
            ref={marker.popUpTitle === "Jordan" ? jordanMarkerRef : null}
          >
            <Popup>
              <h2 className="text-lg font-bold text-center mb-4">{marker.popUpTitle}</h2>
              {marker.projects.length > 0 ? (
                <div className="mt-2">
                  {marker.projects.map((project) => (
                    <div key={project.id} className="mb-2">
                      <div className="flex items-center gap-2">
                        <span>{project.icon}</span>
                        <span className="font-semibold">{project.title}</span>
                      </div>
                      <p className="text-sm text-gray-600">{project.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{project.year}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-gray-500">No projects available</p>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Custom Zoom Controls (Desktop only) */}
      {screenWidth > 768 && (
        <div className="absolute mx-2 text-white text-2xl font-bold bottom-8 right-4 z-5 flex flex-col gap-2">
          <button 
            onClick={handleZoomIn}
            className="bg-black/50 rounded-sm w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-700"
          >
            +
          </button>
          <button 
            onClick={handleZoomOut}
            className="bg-black/50 rounded-sm w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-700"
          >
            -
          </button>
        </div>
      )}

      {/* Tutorial Overlay */}
      {showOverlay && (
        <div 
          className="absolute inset-0 z-10"
          onClick={() => setShowOverlay(false)}
        >
          <svg className="w-full h-full" style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
            <defs>
              <mask id="circle-mask">
                <rect width="100%" height="100%" fill="white"/>
                <circle 
                  cx={jordanPercentPosition.x} 
                  cy={jordanPercentPosition.y} 
                  r={screenWidth > 768 ? "50" : "30"} 
                  fill="black"
                />
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="rgba(0,0,0,0.8)"
              mask="url(#circle-mask)"
            />
            {/* Desktop instruction text */}
            <text
              x={jordanPercentPosition.labelX}
              y={jordanPercentPosition.y}
              fill="white"
              fontSize="20"
              textAnchor="end"
              dominantBaseline="middle"
              className="text-white text-lg font-bold hidden md:block"
            >
              Click here →
            </text>
            {/* Mobile instruction text */}
            <text
              x={jordanPercentPosition.labelX}
              y={jordanPercentPosition.y}
              fill="white"
              fontSize="20"
              textAnchor="end"
              dominantBaseline="middle"
              className="text-white text-lg font-bold md:hidden"
            >
              Tap here →
            </text>
          </svg>
        </div>
      )}

      {/* Mobile pinch-to-zoom indicator */}
      <div className="absolute bottom-4 right-4 z-5 p-2 md:hidden">
        <img 
          src="/pinch.png" 
          alt="Map instructions" 
          className="w-8 h-8"
        />
      </div>
  
      {/* Scroll indicator (hidden after scrolling) */}
      <div 
        className={`absolute bottom-4 left-4 text-white text-4xl animate-bounce ${
          scrollY > 100 ? 'hidden' : ''
        }`}
      >
        ↓
      </div>
    </div>
  );
};

export default Map;
