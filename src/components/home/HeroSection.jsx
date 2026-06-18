import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const shortText = (text, limit = 120) => {
    if (!text) return "";
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  useEffect(() => {
    const script = document.createElement("script");

    window.loadAnnouncements = (data) => {
      console.log("Sheets duyuruları geldi:", data);

      if (Array.isArray(data)) {
        setAnnouncements(data);
      } else {
        console.error("Beklenen formatta veri gelmedi:", data);
      }
    };

    script.src =
      "https://script.google.com/macros/s/AKfycbwVyxhHmJD_ru4AiuyMEyP82hNeK2G0ALGzfW1PHz8oYH-cOcmv88dd7iWtKW6ZMHRZhA/exec?callback=loadAnnouncements";

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.remove();
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/events/hro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="text-white max-w-4xl">
            <p className="tracking-[0.35em] uppercase text-sm md:text-base mb-6 font-inter">
              2026 Teması
            </p>

            <div className="inline-block max-w-full mb-6">
              <h1 className="typing-title text-5xl lg:text-7xl font-bold leading-tight font-playfair">
                Geleceği İnşa Et!
              </h1>
            </div>

            <p className="mt-4 text-xl lg:text-3xl italic text-white/90 font-inter mb-8">
              Değerler Fikirlerin FİDE'sidir.
            </p>

            <Link
              to="/bize-ulasin"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Katılım Başvurusu
            </Link>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase mb-4">
              Duyurular
            </p>

            <h2 className="text-4xl font-bold text-center mb-6 font-playfair">
              Güncel Duyurular
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {announcements.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedAnnouncement(item)}
                className="text-left border-l-4 border-[#0F3D3E] p-5 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex gap-4"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-xl bg-[#0F3D3E]/10 flex items-center justify-center text-3xl flex-shrink-0">
                    📢
                  </div>
                )}

                <div>
                  <p className="text-sm text-gray-500 mb-2 font-inter">
                    {item.date}
                  </p>

                  <h3
                    className={`text-2xl font-bold mb-3 font-playfair ${
                      Number(item.id) === 99 ? "neon-fide" : ""
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-gray-600 font-inter leading-relaxed">
                    {shortText(item.description)}
                  </p>

                  <p className="text-[#0F3D3E] font-semibold mt-3 text-sm">
                    Devamını oku →
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENT MODAL */}
      {selectedAnnouncement && (
        <div
          onClick={() => setSelectedAnnouncement(null)}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl p-6 md:p-8 animate-fadeIn"
          >
            {selectedAnnouncement.image && (
              <img
                src={selectedAnnouncement.image}
                alt={selectedAnnouncement.title}
                className="w-full max-h-[70vh] object-contain rounded-2xl mb-6"
              />
            )}

            <p className="text-sm text-gray-500 mb-2">
              {selectedAnnouncement.date}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F3D3E] font-playfair mb-4">
              {selectedAnnouncement.title}
            </h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedAnnouncement.description}
            </p>

            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="mt-8 bg-[#0F3D3E] text-white px-6 py-3 rounded-full"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;