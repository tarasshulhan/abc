import "leaflet/dist/leaflet.css";
import "./App.css";
import Map from "./components/Map";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Map />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
