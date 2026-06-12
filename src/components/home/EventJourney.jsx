import { useState } from "react";
import { Link } from "react-router-dom";
import { events } from "../../data/events";

const selectedTitles = [
  "LÖSEMİLİ ÇOCUKLAR HAFTASI I",
  "Deprem Bölgesi Yardımı - 3 Günde 5 İl",
  "Ramazan Fidesi",
  "FİDE Hatıra Ormanı",
  "FİDEFEST",
  "Antalya Köy Okulu Kütüphane Projesi",
];

function formatDate(date) {
  const parts = date.split(" ");

  if (parts.length >= 3) {
    return {
      month: parts[parts.length - 2],
      year: parts[parts.length - 1],
    };
  }

  return {
    month: date,
    year: "",
  };
}

function EventJourney() {
  const journeyEvents = selectedTitles
    .map((title) => events.find((event) => event.title === title))
    .filter(Boolean);

  const [activeIndex, setActiveIndex] = useState(0);

  if (journeyEvents.length === 0) return null;

  const activeEvent = journeyEvents[activeIndex];
  const activeDate = formatDate(activeEvent.date);

  const desktopPositions = [
    { top: "4%", left: "72%" },
    { top: "18%", left: "84%" },
    { top: "36%", left: "90%" },
    { top: "55%", left: "86%" },
    { top: "73%", left: "74%" },
    { top: "86%", left: "54%" },
  ];

  const mobilePositions = [
    { top: "10%", left: "58%" },
    { top: "24%", left: "72%" },
    { top: "42%", left: "80%" },
    { top: "60%", left: "77%" },
    { top: "76%", left: "65%" },
    { top: "88%", left: "48%" },
  ];

  return (
    <section className="bg-[#F7F4EF] py-16 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-14">
          <p className="text-[#0F3D3E] font-semibold tracking-[0.25em] uppercase text-xs md:text-sm mb-4">
            Etkinlik Hikayemiz
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            FİDE’nin iz bırakan yolculuğu
          </h2>
        </div>

        <div className="grid lg:grid-cols-[440px_1fr] gap-6 lg:gap-16 items-center">
          {/* Desktop yay */}
          <div className="hidden lg:block relative h-[620px]">
            <div className="absolute -left-[430px] top-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-[#0F3D3E]/25" />

            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 transition-all duration-500">
              <p className="text-[#0F3D3E]/60 text-sm uppercase tracking-[0.35em] mb-4">
                Aktif Tarih
              </p>

              <h3 className="text-6xl font-bold text-[#0F3D3E] leading-none">
                {activeDate.month}
              </h3>

              <p className="text-5xl font-bold text-gray-900">
                {activeDate.year}
              </p>
            </div>

            {journeyEvents.map((event, index) => {
              const date = formatDate(event.date);
              const isActive = index === activeIndex;
              const pos = desktopPositions[index];

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`absolute z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border transition-all duration-500 ${
                    isActive
                      ? "bg-[#0F3D3E] text-white border-[#0F3D3E] scale-125 shadow-[0_20px_50px_rgba(15,61,62,0.35)]"
                      : "bg-white text-[#0F3D3E]/60 border-[#0F3D3E]/20 scale-90 opacity-60 hover:opacity-100 hover:scale-95"
                  }`}
                  style={{
                    top: pos.top,
                    left: pos.left,
                  }}
                >
                  <span className="text-xs uppercase tracking-[0.18em]">
                    {date.month}
                  </span>
                  <span className="text-2xl font-bold leading-none">
                    {date.year}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobil yay */}
          <div className="lg:hidden relative h-[230px] mb-2 overflow-hidden">
            <div className="absolute -left-[230px] top-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-[#0F3D3E]/20" />

            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
              <p className="text-[#0F3D3E]/60 text-[10px] uppercase tracking-[0.3em] mb-2">
                Aktif Tarih
              </p>

              <h3 className="text-4xl font-bold text-[#0F3D3E] leading-none">
                {activeDate.month}
              </h3>

              <p className="text-3xl font-bold text-gray-900">
                {activeDate.year}
              </p>
            </div>

            {journeyEvents.map((event, index) => {
              const date = formatDate(event.date);
              const isActive = index === activeIndex;
              const pos = mobilePositions[index];

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`absolute z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border transition-all duration-500 ${
                    isActive
                      ? "bg-[#0F3D3E] text-white border-[#0F3D3E] scale-110 shadow-lg"
                      : "bg-white text-[#0F3D3E]/60 border-[#0F3D3E]/20 scale-90 opacity-60"
                  }`}
                  style={{
                    top: pos.top,
                    left: pos.left,
                  }}
                >
                  <span className="text-[8px] uppercase tracking-[0.08em]">
                    {date.month}
                  </span>
                  <span className="text-xs font-bold leading-none">
                    {date.year}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Etkinlik kartı */}
          <article
            key={activeEvent.id}
            className="animate-fadeIn grid md:grid-cols-[300px_1fr] gap-5 md:gap-8 items-center rounded-[1.75rem] md:rounded-[2.5rem] bg-white p-4 md:p-10 shadow-xl md:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-52 sm:h-72 md:h-80 rounded-[1.4rem] md:rounded-[2rem] overflow-hidden bg-gray-100">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-[#0F3D3E] font-semibold tracking-[0.16em] md:tracking-[0.2em] uppercase text-xs md:text-sm mb-3 md:mb-4">
                {activeEvent.date}
              </p>

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-5 leading-tight">
                {activeEvent.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-7 md:leading-8 mb-5 md:mb-6">
                {activeEvent.description}
              </p>

              <span className="inline-flex rounded-full bg-[#0F3D3E]/10 text-[#0F3D3E] px-4 md:px-5 py-2 text-xs md:text-sm font-semibold">
                {activeEvent.category}
              </span>

              <div className="mt-6 md:mt-8">
                <Link
                  to="/etkinlikler"
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-[#0F3D3E] text-white px-6 md:px-7 py-3 font-semibold hover:bg-[#092829] transition"
                >
                  Tüm Etkinlikleri Gör
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default EventJourney;