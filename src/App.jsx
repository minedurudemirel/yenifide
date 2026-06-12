import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import About from "./components/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Ortaklik from "./pages/ortaklik";
import UpcomingEvents from "./pages/UpcomingEvents";

// Import homepage sections
import HeroSection from "./components/home/HeroSection";
import StatsSection from "./components/home/StatsSection";
import SponsorsSection from "./components/home/SponsorsSection";
import FinalCTASection from "./components/home/FinalCTASection";
import EventJourney from "./components/home/EventJourney";
import EventTower from "./components/home/EventTower";

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <EventJourney /> 
      <EventTower />
      <SponsorsSection />
      <FinalCTASection />
    </>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biz-kimiz" element={<About />} />
        <Route path="/etkinlikler" element={<Events />} />
        <Route path="/bize-ulasin" element={<Contact />} />
        <Route path="/ortaklik" element={<Ortaklik />} />
        <Route
    path="/geleceketkinlikler"
    element={<UpcomingEvents />}
  />
      </Routes>
    </Layout>
  );
}

export default App;