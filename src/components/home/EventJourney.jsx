import { useState } from "react";
import { Link } from "react-router-dom";
import { events } from "../../data/events";

const selectedTitles = [
  "LÖSEMİLİ ÇOCUKKLAR HAFTASI I",
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

  const activeEvent = journeyEvents[activeIndex];
  const activeDate = formatDate(activeEvent.date);

  const positions = [
    { top: "4%", left: "72%" },
    { top: "18%", left: "84%" },
    { top: "36%", left: "90%" },
    { top: "55%", left: "86%" },
    { top: "73%", left: "74%" },
    { top: "86%", left: "54%" },
  ];

  return (
    <section className="bg-[#F7F4EF] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[#0F3D3E] font-semibold tracking-[0.25em] uppercase text-sm mb-4">
            Etkinlik Hikayemiz
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            FİDE’nin iz bırakan yolculuğu
          </h2>
        </div>

        <div className="grid lg:grid-cols-[440px_1fr] gap-16 items-center">
          <div className="hidden lg:block relative h-[640px]">
            <div className="absolute -left-[430px] top-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-[#0F3D3E]/25" />

            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
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
              const pos = positions[index];

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`absolute z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border transition-all duration-500 ${
                    isActive
                      ? "bg-[#0F3D3E] text-white border-[#0F3D3E] scale-125 shadow-[0_20px_50px_rgba(15,61,62,0.35)]"
                      : "bg-white text-[#0F3D3E]/60 border-[#0F3D3E]/20 scale-90 hover:scale-95"
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

          <article
  key={activeEvent.id}
  className="animate-fadeIn grid md:grid-cols-[300px_1fr] gap-8 items-center rounded-[2.5rem] bg-white p-6 md:p-10 shadow-2xl transition-all duration-500"
>
            <div className="relative h-80 rounded-[2rem] overflow-hidden bg-gray-100">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div>
              <p className="text-[#0F3D3E] font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                {activeEvent.date}
              </p>

              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                {activeEvent.title}
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                {activeEvent.description}
              </p>

              <span className="inline-flex rounded-full bg-[#0F3D3E]/10 text-[#0F3D3E] px-5 py-2 text-sm font-semibold">
                {activeEvent.category}
              </span>

              <div className="mt-8">
                <Link
                  to="/etkinlikler"
                  className="inline-flex items-center justify-center rounded-full bg-[#0F3D3E] text-white px-7 py-3 font-semibold hover:bg-[#092829] transition"
                >
                  Tüm Etkinlikleri Gör
                </Link>
              </div>
            </div>
          </article>

          <div className="lg:hidden flex gap-3 overflow-x-auto pb-4">
            {journeyEvents.map((event, index) => {
              const date = formatDate(event.date);
              const isActive = index === activeIndex;

              return (
                <button
                  key={event.id}
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-28 rounded-full border px-4 py-3 transition ${
                    isActive
                      ? "bg-[#0F3D3E] text-white border-[#0F3D3E]"
                      : "bg-white text-[#0F3D3E] border-[#0F3D3E]/20"
                  }`}
                >
                  <span className="block text-xs uppercase">{date.month}</span>
                  <span className="block text-xl font-bold">{date.year}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventJourney;