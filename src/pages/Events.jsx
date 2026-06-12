import { useState } from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";

const categories = [
  "Tümü",
  "Sosyal Etkinlikler",
  "Kültürel Etkinlikler",
  "Gelişim Etkinlikleri",
  "Sosyal Sorumluluk ve Yardım Faaliyetleri",
];

function Events() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredEvents =
    selectedCategory === "Tümü"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-white py-20 px-6 text-center">
        <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase">
          GEÇMİŞTEN GÜNÜMÜZE
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
          Faaliyetlerimiz ve Etkinliklerimiz
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          Fikir ve Değerler Derneği olarak sosyal sorumluluk, kültür, gelişim ve gençlik alanlarında yürüttüğümüz faaliyetlerle toplumsal fayda üretmeyi amaçlıyoruz. Her etkinliğimiz, gençlerin gelişimine katkı sağlamak ve dayanışma kültürünü güçlendirmek amacıyla hayata geçirilmektedir.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-3 rounded-full text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-[#0F3D3E] text-white shadow-md"
                  : "bg-white text-[#0F3D3E] border border-[#0F3D3E] hover:bg-[#0F3D3E] hover:text-white"
              }`}
            >
              {category === "Sosyal Sorumluluk ve Yardım Faaliyetleri"
                ? "Sosyal Sorumluluk"
                : category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Events;