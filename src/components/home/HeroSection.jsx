import { useState } from "react";
import { Link } from "react-router-dom";
import announcements from "../../data/announcements";

function HeroSection() {
  

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

      <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 font-playfair">
        Geleceği İnşa Et!
      </h1>

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

              <div
                key={item.id}
                className="border-l-4 border-[#0F3D3E] pl-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                
                <p className="text-sm text-gray-500 mb-2 font-inter">
                  {item.date}
                </p>
              

                <h3
  className={`text-2xl font-bold mb-3 font-playfair ${
    item.id === 99 ? "neon-fide" : ""
  }`}
>
  {item.title}
</h3>

                <p className="text-gray-600 font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>
              
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;