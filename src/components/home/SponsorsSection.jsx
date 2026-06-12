import { Link } from "react-router-dom";

function SponsorsSection() {
  // Placeholder sponsor logos - in production, these would be real sponsor logos
  const sponsors = [
    { name: "Sponsor 1", url: "#", color: "from-blue-500 to-purple-600" },
    { name: "Sponsor 2", url: "#", color: "from-green-500 to-emerald-600" },
    { name: "Sponsor 3", url: "#", color: "from-red-500 to-pink-600" },
    { name: "Sponsor 4", url: "#", color: "from-yellow-500 to-orange-600" },
    { name: "Sponsor 5", url: "#", color: "from-indigo-500 to-teal-600" },
    { name: "Sponsor 6", url: "#", color: "from-pink-500 to-rose-600" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase mb-4">
            Sponsorlarımız ve Ortaklarımız
          </p>

          <h2 className="text-4xl font-bold text-center mb-6 font-playfair">
            Bizimle İşbirliği Yapmak İster misiniz?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-24 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r {sponsor.color}">
                <span className="text-white font-bold text-sm font-inter">
                  {sponsor.name}
                </span>
              </div>
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