import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Brand from "./components/Brand";
import Contact from "./components/Contact";
import OurTeam from "./components/OurTeam";
import PressRelease from "./components/PressRelease";
import Careers from "./components/Careers";
import Franchise from "./components/Franchise";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OurTeam" element={<OurTeam />} />
        <Route path="/PressRelease" element={<PressRelease />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Franchise" element={<Franchise />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
