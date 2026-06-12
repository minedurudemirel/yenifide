import { useState } from "react";
import BoardTower from "./BoardTower";
function About() {

const managementBoard = [
  {
    name: "Mehmet Fatih GÜLEÇ",
    role: "Başkan",
    image: "/board/mfg.jpg",
  },
  {
    name: "Ali Arda PORAZAN",
    role: "Genel Sekreter",
    image: "/board/ali-arda.jpg",
  },
  {
    name: "Enes YILMAZ",
    role: "Üye",
    image: "/board/enesy.jpg",
  },

  {
    name: "Zeki Görkem GENÇ",
    role: "Sayman",
    image: "/board/zeki-gorkem.jpg",
  },
  {
    name: "Süleyman Serhan TOPRAK",
    role: "İcra ve Koordinasyondan Sorumlu Başkan Yardımcısı",
    image: "/board/serhan.jpg",
  },
  {
    name: "Muhammet Enes AKTEPE",
    role: "Organizasyon ve İş Birliğinden Sorumlu Başkan Yardımcısı",
    image: "/board/enesa.jpg",
  },
  {
    name: "İsmail Berkay TOKYÜREK",
    role: "Basın ve İletişimden Sorumlu Başkan Yardımcısı",
    image: "/board/berkay.jpg",
  },
];
const auditBoard = [
  {
    name: "Ali TUMANİ",
    role: "Denetim Kurulu Üyesi",
    image: "/board/ali-tumani.jpg",
  },
  {
    name: "Mert ARIKAN",
    role: "Denetim Kurulu Üyesi",
    image: "/board/mert.jpg",
  },
  {
    name: "Koray DOĞAN",
    role: "Denetim Kurulu Üyesi",
    image: "/board/koray.jpg",
  },
  
];
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
            <br></br>
            <br></br>
            <br></br>

             {/* Vizyon Misyon */}
          <div className="grid md:grid-cols-2 gap-8">
  
  <div className="bg-slate-100 rounded-3xl p-10">
    <h3 className="text-3xl font-bold text- [#0F3D3E]mb-6">
      Vizyonumuz
    </h3>

    <p className="leading-8 text-gray-700">
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

          <section className="bg-white py-20 px-6">
   <BoardTower  />

          </section>

   
          
          <section className="bg-white py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-14">
      <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase mb-3">
        ORGANİZASYON YAPIMIZ
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Yönetim Kurulumuz
      </h2>

      <p className="max-w-3xl mx-auto text-gray-600 mt-5 leading-8">
        Derneğimiz; yönetim kurulu, başkan yardımcıları ve denetim kurulu
        aracılığıyla faaliyetlerini şeffaflık, katılımcılık ve sorumluluk
        ilkeleri doğrultusunda yürütmektedir.
      </p>
    </div>

    <div className="flex flex-col items-center gap-10">
      <MemberCard member={managementBoard[0]} large />

      <div className="hidden md:block w-px h-10 bg-[#0F3D3E]/40"></div>

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-3xl">
        <MemberCard member={managementBoard[1]} />
        <MemberCard member={managementBoard[2]} />
        <MemberCard member={managementBoard[3]} />
      </div>

      <div className="hidden md:block w-px h-10 bg-[#0F3D3E]/40"></div>

      <div className="w-full max-w-4xl">
  <div className="text-center mb-10">
    <h3 className="text-3xl font-bold text-[#0F3D3E]">
      Başkan Yardımcıları
    </h3>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <MemberCard member={managementBoard[4]} />
  <MemberCard member={managementBoard[5]} />
  <MemberCard member={managementBoard[6]} />
</div>
</div>
    </div>

    <div className="mt-20 border-t border-gray-200 pt-10">
    <div className="mt-20 border-t border-gray-200 pt-12">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-[#0F3D3E]">
      Denetim Kurulu
    </h3>
  </div>

  <div className="grid md:grid-cols-3 gap-10">
    {auditBoard.map((member) => (
      <MemberCard
        key={member.name}
        member={member}
      />
    ))}
  </div>
</div>
    </div>
  </div>
</section>
  
         
  
        </div>
      </section>
    )
    
  }
  function MemberCard({ member, large = false, wide = false }) {
    return (
      <div
        className={`flex ${
          wide ? "max-w-3xl w-full" : "flex-col"
        } items-center gap-5 text-center md:text-left`}
      >
        <img
          src={member.image}
          alt={member.name}
          className={`${
            large ? "w-36 h-36" : "w-28 h-28"
          } rounded-full object-cover border-4 border-[#0F3D3E] bg-slate-100`}
        />
  
        <div className={wide ? "text-center md:text-left" : "text-center"}>
          <h3 className="text-xl font-bold text-gray-900">
            {member.name}
          </h3>
  
          <p className="text-[#0F3D3E] mt-1 leading-6">
            {member.role}
          </p>
        </div>
      </div>
    );
  }
  
  export default About