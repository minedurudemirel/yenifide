import { events } from "../../data/events";

function EventTower() {
  const towerEvents = events.filter((event) => event.image).slice(0, 10);

  return (
    <section className="bg-[#F7F4EF] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-[#0F3D3E]">
          <p className="uppercase tracking-[0.3em] text-white/60 text-sm mb-4">
            Etkinlik Albümü
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Hatıralar dönen bir albümde
          </h2>

          <p className="text-[#0F3D3E]/75 text-lg leading-8 max-w-xl">
            FİDE’nin farklı dönemlerde gerçekleştirdiği etkinliklerden kareler,
            dinamik bir görsel akışla bir araya geliyor.
          </p>
        </div>

        <div className="relative h-[560px] flex items-center justify-center perspective-[1200px]">
          <div className="event-tower relative w-[260px] h-[340px] transform-style-3d">
            {towerEvents.map((event, index) => {
              const angle = (360 / towerEvents.length) * index;

              return (
                <div
                  key={event.id}
                  className="absolute inset-0 rounded-5xl overflow-hidden shadow-2xl border border-white/20 bg-white"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(360px)`,
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventTower;