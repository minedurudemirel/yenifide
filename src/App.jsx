import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
function Home() {
  return (
    <section className="py-32 px-6 text-center bg-slate-50">
      <h2 className="text-6xl font-bold text-[#0F3D3E] mb-6">
        Fikir ve Değerler Derneği
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Değerler Fikirlerin FİDE'sidir.
      </p>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-[#0F3D3E] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/fidelogo.png"
              alt="Fikir ve Değerler Derneği"
              className="h-16 w-auto"
            />

            <h1 className="text-lg font-bold">
              Fikir ve Değerler Derneği
            </h1>
          </Link>

          <ul className="flex gap-6 text-sm font-medium">
            <li><Link to="/">ANASAYFA</Link></li>
            <li><Link to="/biz-kimiz">BİZ KİMİZ?</Link></li>
            <li><Link to="/etkinlikler">ETKİNLİKLER</Link></li>
            <li>BASIN</li>
            <li><Link to="/bize-ulasin">BİZE ULAŞIN</Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biz-kimiz" element={<About />} />
        <Route path="/etkinlikler" element={<Events />} />
        <Route path="/bize-ulasin" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;