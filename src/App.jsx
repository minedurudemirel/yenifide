import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import announcements from "./data/announcements";
import About from "./components/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function Home() {
  const slides = [
    "/events/ilk.jpeg",
    "/events/sl.jpeg",
    "/events/fidesta.jpeg",
    "/events/sld.jpeg",
    "/events/ana.jpeg",
    "/events/bizkimiz.jpg",
    "/events/canakkale.jpg",
    "/events/antalya.jpg",
    "/events/deprem2.jpg",
  ];

  return (
    <main>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={slide}
            className="hero-slide absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide})`,
              animationDelay: `${index * 4}s`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="text-white max-w-5xl">
            <p className="tracking-[0.35em] uppercase text-sm md:text-base mb-5">
              2026 Teması
            </p>

            <h1 className="text-5xl md:text-8xl font-extrabold leading-tight animate-[slideInLeft_1.3s_ease-out]">
              Geleceği İnşa Et!
            </h1>

            <p className="mt-6 text-xl md:text-3xl italic text-white/90">
              Değerler Fikirlerin FİDE'sidir.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8] py-20">
  <div className="max-w-6xl mx-auto px-6">

    <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase mb-4 text-center">
      Duyurular
    </p>

    <h2 className="text-4xl font-bold text-center mb-12">
      Güncel Duyurular
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {announcements.map((item) => (
        <div
          key={item.id}
          className="border-l-4 border-[#0F3D3E] pl-6 py-2"
        >
          <p className="text-sm text-gray-500 mb-2">
            {item.date}
          </p>

          <h3 className="text-2xl font-bold mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* BİZ KİMİZ */}
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        <div
          className="min-h-[420px] bg-cover bg-center"
          style={{ backgroundImage: "url('/events/bizkimiz.jpg')" }}
        ></div>

        <div className="flex items-center px-8 md:px-20 py-20 bg-white">
          <div>
            <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase mb-4">
              BİZ KİMİZ?
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Fikirden değere, değerden geleceğe.
            </h2>

            <p className="text-gray-600 text-lg leading-8">
              Fikir ve Değerler Derneği, gençlerin sosyal sorumluluk,
              kültür, gelişim ve dayanışma alanlarında aktif rol almasını
              destekleyen gönüllü bir sivil toplum kuruluşudur.
            </p>
          </div>
        </div>
      </section>

      {/* FAALİYETLER */}
      <section className="grid md:grid-cols-2 min-h-[70vh]">
        <div className="flex items-center px-8 md:px-20 py-20 bg-[#0F3D3E] text-white order-2 md:order-1">
          <div>
            <p className="font-semibold tracking-widest uppercase mb-4 text-white/70">
              FAALİYETLERİMİZ
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Gençliğin enerjisini toplumsal faydaya dönüştürüyoruz.
            </h2>

            <p className="text-white/85 text-lg leading-8">
              Sosyal sorumluluk projeleri, kültürel geziler, gelişim
              programları ve dayanışma faaliyetleriyle gençlerin geleceğine
              değer katıyoruz.
            </p>
          </div>
        </div>

        <div
          className="min-h-[420px] bg-cover bg-center order-1 md:order-2"
          style={{ backgroundImage: "url('/events/deprem2.jpg')" }}
        ></div>
      </section>
    </main>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = (
    <>
      <Link to="/" onClick={() => setMenuOpen(false)}>
        ANASAYFA
      </Link>

      <Link to="/biz-kimiz" onClick={() => setMenuOpen(false)}>
        BİZ KİMİZ?
      </Link>

      <Link to="/etkinlikler" onClick={() => setMenuOpen(false)}>
        ETKİNLİKLER
      </Link>

      <span>BASIN</span>

      <Link to="/bize-ulasin" onClick={() => setMenuOpen(false)}>
        BİZE ULAŞIN
      </Link>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/fidelogo.png"
              alt="Fikir ve Değerler Derneği"
              className="h-14 w-auto"
            />

            <span className="font-bold text-lg">
              Fikir ve Değerler Derneği
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>

          <div className="hidden md:flex gap-8 text-sm font-semibold">
            {menuItems}
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0B2F30] px-6 py-5 flex flex-col gap-4 text-sm font-semibold">
            {menuItems}
          </div>
        )}
      </nav>

      {/* ROUTES */}
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