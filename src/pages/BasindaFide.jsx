
import React, { useState } from "react";



const pressItems = [
  
  {
    id: 1,
    source: "Haberler.com",
    title:
      "Gazi Üniversiteli Güleç, lösemili çocuklara umut oluyor",
    description:
      "Lösemiden kaybettiği kuzeninin anısını yaşatmak ve hastalıkla mücadele eden çocuklara destek olmak için yürütülen çalışmalar basında yer aldı.",
    url: "https://www.haberler.com/amp/gazi-universiteli-gulec-losemili-cocuklara-20413122-haberi/",
    image: "/duyuru/ankara-gundem-kuzenini-losemiden-kaybeden-genc-cocuklar-icin-dernek-kurdu-3.webp",
  },
  {
    id: 2,
    source: "Demirören Haber Ajansı",
    title:
      "Kuzenini lösemiden kaybetti, hastalıkla mücadele eden çocukların umudu oldu",
    description:
      "Lösemiyle mücadele eden çocuklara destek olma amacıyla gerçekleştirilen çalışmalar DHA tarafından haberleştirildi.",
    url: "http://www.dha.com.tr/foto-galeri/kuzenini-losemiden-kaybetti-hastalikla-mucadele-eden-cocuklarin-umudu-oldu-2978786",
    image: "/duyuru/newhaber.jpg",
  },
  {
    id: 3,
    source: "SonDakika.com",
    title:
      "Güleç, lösemiden kaybettiği kuzeninin anısını yaşatıyor",
    description:
      "Lösemi nedeniyle kaybedilen bir yakının anısından doğan dayanışma ve çocuklara destek çalışmaları haber konusu oldu.",
    url: "https://www.sondakika.com/guncel/haber-gulec-losemiden-kaybettigi-kuzeninin-anisini-20413123/",
    image: "/duyuru/son-dakika.jpg",
  },
  {
    id: 4,
    source: "Adana Masası",
    title:
      "Kuzenini lösemiden kaybetti, hastalıkla mücadele eden çocukların umudu oldu",
    description:
      "Çocuklara yönelik destek çalışmaları ve bu çalışmaların ortaya çıkış hikâyesi Adana Masası'nda yayımlandı.",
    url: "https://www.adanamasasi.com/kuzenini-losemiden-kaybetti-hastalikla-mucadele-eden-cocuklarin-umudu-oldu/830077/",
    image: "/duyuru/adana-haber.jpg",
  },
  {
    id: 5,
    source: "NewHaber",
    title:
      "Kuzenini lösemiden kaybeden genç, çocuklar için dernek kurdu",
    description:
      "Lösemiyle mücadele eden çocuklara destek olmak amacıyla kurulan derneğin hikâyesi NewHaber'de yer aldı.",
    url: "https://newhaber.com/yasam/kuzenini-losemiden-kaybeden-genc-cocuklar-icin-dernek-kurdu",
    image: "/duyuru/ankara-gundem-kuzenini-losemiden-kaybeden-genc-cocuklar-icin-dernek-kurdu-4.webp",
  },
  {
    id: 6,
    source: "Avrupa Gazete",
    title:
      "Kuzenini lösemiden kaybetti, hastalıkla mücadele eden çocukların umudu oldu",
    description:
      "Derneğin çocuklara umut olmayı amaçlayan çalışmaları Avrupa Gazete'nin haberinde okuyucularla buluştu.",
    url: "https://www.avrupagazete.co.uk/kuzenini-losemiden-kaybetti-hastalikla-mucadele-eden-cocuklarin-umudu-oldu",
    image: "/duyuru/avrupa-gazete.jpg",
  },
];

function PressImage({ src, alt }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full aspect-[16/10] overflow-hidden bg-[#EAE6DE]">
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-sm text-[#77736B] tracking-wide">
            Haber görseli henüz eklenmedi
          </span>
        </div>
      )}
    </div>
  );
}

function BasindaFide() {
  return (
    <main className="bg-[#F8F5EF] text-[#252A26]">

      {/* SAYFA BAŞLIĞI */}
      <section className="px-6 md:px-16 lg:px-24 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">

          <p className="text-[#B68D40] uppercase tracking-[0.3em] text-xs mb-6">
            Fikir ve Değerler Derneği
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#0F3D3E] leading-tight">
            Basında FİDE
          </h1>

          <div className="w-20 h-[2px] bg-[#B68D40] mt-9 mb-8" />

          <p className="max-w-2xl text-base md:text-lg leading-8 text-[#5D625D]">
            Fikir ve Değerler Derneği'nin çalışmalarına,
            dayanışma anlayışına ve çocuklara umut olma
            yolculuğuna basında yer verilen haberler.
          </p>

        </div>
      </section>
        {/* VİDEO BÖLÜMÜ */}
        <section className="bg-[#0F3D3E] text-[#F8F5EF] px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <h2 className="font-serif text-2xl md:text-4xl leading-tight max-w-3xl">
            Hikâyemiz ve
            <br />
            Çalışmalarımız
          </h2>

          <p className="text-[#D5DCD5] text-base leading-8 max-w-2xl mt-7 mb-12">
            FİDE'nin kuruluş hikâyesini ve çocuklara umut olma
            yolculuğunu anlatan video içeriğimizi izleyebilirsiniz.
          </p>

          <div className="w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Zi4PJKb_rPU"
              title="FİDE - Fikir ve Değerler Derneği"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <a
            href="https://youtu.be/Zi4PJKb_rPU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 text-sm text-[#D5B77A] hover:text-white transition-colors"
          >
            YouTube'da İzle
            <span aria-hidden="true">↗</span>
          </a>

        </div>
      </section>

      {/* HABERLER */}
      <section className="py-4 px-6 md:px-16 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between border-b border-[#D8D1C5] pb-5 mb-4">
            <h2 className="font-serif text-2xl md:text-3xl text-[#0F3D3E]">
              Basında Biz
            </h2>

            <span className="text-xs tracking-widest text-[#77736B]">
              HABER ARŞİVİ
            </span>
          </div>

          <div>
            {pressItems.map((item, index) => (
              <article
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-[minmax(280px,0.9fr)_1.1fr] gap-7 md:gap-12 py-10 md:py-12 border-b border-[#D8D1C5]"
              >

                {/* HABER GÖRSELİ */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  aria-label={`${item.source} haberini aç`}
                >
                  <div className="overflow-hidden">
                    <PressImage
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </a>

                {/* HABER METNİ */}
                <div className="flex flex-col justify-center">

                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[#B68D40] text-xs tracking-[0.18em] uppercase">
                      {item.source}
                    </span>

                    <span className="w-8 h-px bg-[#B68D40]" />

                    <span className="text-xs text-[#88847C]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-snug text-[#0F3D3E] group-hover:text-[#B68D40] transition-colors">
                      {item.title}
                    </h3>
                  </a>

                  <p className="mt-5 text-sm md:text-base leading-7 text-[#656A64] max-w-xl">
                    {item.description}
                  </p>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mt-7 text-sm font-medium text-[#0F3D3E] hover:text-[#B68D40] transition-colors w-fit"
                  >
                    Haberi Oku
                    <span aria-hidden="true">↗</span>
                  </a>

                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

    

      {/* KAPANIŞ */}
      <section className="px-6 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <p className="text-[#B68D40] text-xs tracking-[0.3em] uppercase mb-6">
            Fikir ve Değerler Derneği
          </p>

          <h2 className="font-serif text-3xl md:text-5xl text-[#0F3D3E] leading-tight max-w-3xl">
            Her çocuğun umut dolu bir yarına ulaşması için.
          </h2>

          <a
            href="/"
            className="inline-flex items-center gap-3 mt-9 text-sm text-[#0F3D3E] hover:text-[#B68D40] transition-colors"
          >
            Ana Sayfaya Dön
            <span aria-hidden="true">↗</span>
          </a>

        </div>
      </section>

    </main>
  );
}

export default BasindaFide;
