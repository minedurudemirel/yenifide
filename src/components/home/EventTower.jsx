import { useState } from "react";

function EventTower() {
  const towerEvents = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    image: `/last/${index + 1}.jpg`,
    title: `Etkinlik Fotoğrafı ${index + 1}`,
  }));

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-[#F7F4EF] py-16 md:py-28 overflow-hidden">
      <div className="w-full flex justify-center items-center">
        {/* MOBILE TOWER */}
        <div className="md:hidden relative h-[340px] flex items-center justify-center perspective-[900px]">
          <div className="event-tower relative w-[120px] h-[170px] transform-style-3d">
            {towerEvents.map((event, index) => {
              const angle = (360 / towerEvents.length) * index;

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setSelectedImage(event.image)}
                  className="absolute inset-0 cursor-pointer rounded-[1.4rem] overflow-hidden shadow-xl border border-white/20 bg-white"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(185px)`,
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* DESKTOP TOWER */}
        <div className="hidden md:flex relative h-[560px] items-center justify-center perspective-[1200px]">
          <div className="event-tower relative w-[220px] h-[300px] transform-style-3d">
            {towerEvents.map((event, index) => {
              const angle = (360 / towerEvents.length) * index;

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setSelectedImage(event.image)}
                  className="absolute inset-0 cursor-pointer rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-white"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(360px)`,
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90vw] max-h-[90vh] rounded-3xl shadow-2xl animate-fadeIn"
          />
        </div>
      )}
    </section>
  );
}

export default EventTower;