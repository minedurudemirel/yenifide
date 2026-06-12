import { Link } from "react-router-dom";

function UpcomingEvents() {
  return (
    <section className="relative min-h-screen bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-black/50 uppercase tracking-[0.4em] mb-6">
          Yakında
        </p>

        <h1 className="coming-title text-5xl md:text-8xl font-bold uppercase text-black">
          COMING SOON
        </h1>

        <p className="text-black/70 mt-8 max-w-2xl mx-auto leading-8">
          Yeni dönem etkinlik takvimimiz hazırlanıyor. <br></br>
          FİDEFEST 2026 ve diğer etkinlik duyuruları çok yakında burada
          yayınlanacak.
        </p>

        <Link
          to="/etkinlikler"
          className="inline-flex mt-10 rounded-full border border-black/20 px-8 py-3 text-black hover:border-black/60 transition"
        >
          Geçmiş Etkinlikleri İncele
        </Link>

        <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-2xl border-4 border-white"
>
  <source src="/events/upcoming.mp4" type="video/mp4" />
</video>
      </div>
    </section>
  );
}

export default UpcomingEvents;
