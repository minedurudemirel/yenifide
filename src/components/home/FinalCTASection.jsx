import { Link } from "react-router-dom";

function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0F3D3E] to-[#111827] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 font-playfair">
          Fikir ve Değerler Derneği'ne Katılın
        </h2>
        <p className="text-xl mb-8 font-inter leading-relaxed max-w-2xl mx-auto">
          Gençlerin geleceğini şekillendiren projelerde yer alın, değerli deneyimler kazanın ve toplumsal değişiklikte bir parçə olun. Her el emeği, daha iyi bir dünya için bir adımdır.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link
            to="/bize-ulasin"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border border-white/20"
          >
            Gönüllü Ol
          </Link>
          <Link
            to="/etkinlikler"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 border border-white/20"
          >
            Etkinlikleri Gör
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;