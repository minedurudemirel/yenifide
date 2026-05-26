function About() {
    return (
      <section
        id="about"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
  
          {/* Başlık */}
          <div className="text-center mb-16">
            <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase">
              BİZ KİMİZ?
            </p>
  
            <h2 className="text-5xl font-bold text-gray-900 mt-4">
              Fikir ve Değerler Derneği
            </h2>
  
            <div className="w-24 h-1 bg-[#0F3D3E] mx-auto mt-6 rounded-full" />
          </div>
  
          {/* Hakkımızda */}
          <div className="bg-slate-50 rounded-3xl p-10 shadow-sm mb-12">
  
            <h3 className="text-3xl font-bold text-[#0F3D3E] mb-6">
              Hakkımızda
            </h3>
  
            <p className="text-gray-700 leading-8 text-lg">
              Fikir ve Değerler Derneği, gençlerin özgürce
              üretebildiği, fikirlerini cesaretle ifade edebildiği
              ve kendi potansiyelini keşfedebildiği bir alan
              oluşturmak amacıyla kurulmuştur. </p>

              <p className="text-gray-700 leading-8 text-lg">
              Dernek; çevre koruma, eğitim, sosyal yardım,
              kültür-sanat ve gençlik çalışmaları başta olmak üzere
              birçok alanda projeler geliştirerek toplumsal fayda
              üretmeyi hedeflemektedir. </p>

              <p className="text-gray-700 leading-8 text-lg">
              Bugüne kadar lösemili çocuklar için farkındalık
              çalışmaları, deprem yardımları, kariyer etkinlikleri,
              hatıra ormanı projeleri, köy okullarına kütüphane
              kurulması ve sosyal sorumluluk faaliyetleri gibi
              birçok çalışma gerçekleştirmiştir.
            </p>
  
          </div>
  
          {/* Vizyon Misyon */}
          <div className="grid md:grid-cols-2 gap-8">
  
            <div className="bg-[#0F3D3E] text-white rounded-3xl p-10">
              <h3 className="text-3xl font-bold mb-6">
                Vizyonumuz
              </h3>
  
              <p className="leading-8 text-white/90">
                Gençlerin özgürce üretebildiği, yaratıcılık,
                bilgi ve cesaretin merkezde konumlandığı;
                akademik mükemmeliyet ile sosyal sorumluluğu
                birleştiren, değerlerine bağlı ve liderlik
                potansiyelini geliştiren bir buluşma noktası olmak.
              </p>
            </div>
  
            <div className="bg-slate-100 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-[#0F3D3E] mb-6">
                Misyonumuz
              </h3>
  
              <p className="leading-8 text-gray-700">
                Üniversite topluluklarının dinamizminden ilham
                alarak gençleri milli değerlere bağlı, sosyal
                sorumluluk sahibi, girişimci ve vizyon sahibi
                bireyler olarak yetiştirmek; onların akademik,
                sosyal ve profesyonel gelişimlerine katkı sağlayan
                projeler üretmek.
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    )
  }
  
  export default About