import { useState, useEffect } from "react";

function EventTower() {
  const towerEvents = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    image: `/last/${index + 1}.jpg`,
    title: `Etkinlik Fotoğrafı ${index + 1}`,
  }));

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(towerEvents[index].image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      const next = prev === towerEvents.length - 1 ? 0 : prev + 1;
      setSelectedImage(towerEvents[next].image);
      return next;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      const previous = prev === 0 ? towerEvents.length - 1 : prev - 1;
      setSelectedImage(towerEvents[previous].image);
      return previous;
    });
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="bg-[#F7F4EF] py-16 md:py-28 overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <div className="md:hidden relative h-[340px] flex items-center justify-center perspective-[900px]">
          <div className="event-tower relative w-[120px] h-[170px] transform-style-3d">
            {towerEvents.map((event, index) => {
              const angle = (360 / towerEvents.length) * index;

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => openImage(index)}
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

        <div className="hidden md:flex relative h-[560px] items-center justify-center perspective-[1200px]">
          <div className="event-tower relative w-[220px] h-[300px] transform-style-3d">
            {towerEvents.map((event, index) => {
              const angle = (360 / towerEvents.length) * index;

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => openImage(index)}
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
          onClick={closeModal}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-11 h-11 md:w-14 md:h-14 rounded-full text-4xl flex items-center justify-center"
          >
            ‹
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-w-[88vw] max-h-[86vh] rounded-3xl shadow-2xl animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-11 h-11 md:w-14 md:h-14 rounded-full text-4xl flex items-center justify-center"
          >
            ›
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ×
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-4 py-2 rounded-full">
            {currentIndex + 1} / {towerEvents.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default EventTower;