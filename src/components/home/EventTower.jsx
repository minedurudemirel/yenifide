import { events } from "../../data/events";

function EventTower() {
  const towerEvents = events.filter((event) => event.image).slice(0, 10);

  return (
    <section className="bg-[#F7F4EF] py-28 overflow-hidden">
      <div className="w-full flex justify-center items-center">
        <div className="relative h-[560px] flex items-center justify-center perspective-[1200px]">
          <div className="event-tower relative w-[220px] h-[300px] transform-style-3d">
            {towerEvents.map((event, index) => {
              const angle = (360 / towerEvents.length) * index;

              return (
                <div
                  key={event.id}
                  className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-white"
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