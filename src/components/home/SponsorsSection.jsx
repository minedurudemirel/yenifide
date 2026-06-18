import { Link } from "react-router-dom";

function SponsorsSection() {
  const sponsors = [
    {
      name: "Ankara Valiliği",
      logo: "/vali.png",
    },
    {
      name: "Belediye",
      logo: "/bld.png",
    },
    {
      name: "Astor",
      logo: "/astor.jpeg",
    },
    {
      name: "British Town",
      logo: "/brt.png",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase mb-4">
            İş Birliği Yaptığımız Kurumlar
          </p>

          <h2 className="text-4xl font-bold text-center mb-6 font-playfair">
            Bizimle İşbirliği Yapmak İster misiniz?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 min-h-[160px]"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-24 max-w-[220px] w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/ortaklik"
            className="bg-[#0F3D3E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0F3D3E]/90 transition-all duration-300"
          >
            Ortaklık İçin Başvuru
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SponsorsSection;