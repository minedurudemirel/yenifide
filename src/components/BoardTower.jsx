import { useState } from "react";

const boardMembers = [
  {
    id: 1,
    name: "Mehmet Fatih GÜLEÇ",
    role: "Başkan",
    image: "/board/mfg.jpg",
  },
  {
    id: 2,
    name: "Ali Arda PORAZAN",
    role: "Genel Sekreter",
    image: "/board/ali-arda.jpg",
  },
  {
    id: 3,
    name: "Enes YILMAZ",
    role: "Üye",
    image: "/board/enesy.jpg",
  },
  {
    id: 4,
    name: "Zeki Görkem GENÇ",
    role: "Sayman",
    image: "/board/zeki-gorkem.jpg",
  },
  {
    id: 5,
    name: "Süleyman Serhan TOPRAK",
    role: "İcra ve Koordinasyondan Sorumlu Başkan Yardımcısı",
    image: "/board/serhan.jpg",
  },
  {
    id: 6,
    name: "Muhammet Enes AKTEPE",
    role: "Organizasyon ve İş Birliğinden Sorumlu Başkan Yardımcısı",
    image: "/board/enesa.jpg",
  },
  {
    id: 7,
    name: "İsmail Berkay TOKYÜREK",
    role: "Basın ve İletişimden Sorumlu Başkan Yardımcısı",
    image: "/board/berkay.jpg",
  },
  {
    id: 8,
    name: "Ali TUMANİ",
    role: "Denetim Kurulu Üyesi",
    image: "/board/ali-tumani.jpg",
  },
  {
    id: 9,
    name: "Mert ARIKAN",
    role: "Denetim Kurulu Üyesi",
    image: "/board/mert.jpg",
  },
  {
    id: 10,
    name: "Koray DOĞAN",
    role: "Denetim Kurulu Üyesi",
    image: "/board/koray.jpg",
  },
];

function BoardTower() {
  const [selectedMember, setSelectedMember] = useState(boardMembers[0]);

  return (
    <section className="bg-[#0F3D3E] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[430px_1fr] gap-12 items-center">
        <div className="text-white">
          <p className="uppercase tracking-[0.35em] text-white/60 text-sm mb-4">
            Yönetim Kurulumuz
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            FİDE’yi birlikte büyüten ekip
          </h2>

          <p className="text-white/75 text-lg leading-8 max-w-md mb-8">
            Fotoğraflara tıklayarak yönetim kurulu üyelerimizi ve görevlerini
            inceleyebilirsiniz.
          </p>

          <div className="max-w-md bg-white/10 border border-white/15 rounded-[2rem] p-6 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-5">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-white/30"
              />

              <div>
                <h3 className="text-2xl font-bold leading-tight">
                  {selectedMember.name}
                </h3>

                <p className="text-white/70 mt-1">
                  {selectedMember.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[560px] flex items-center justify-center perspective-[1700px] lg:-translate-y-6">
          <div className="board-tower relative w-[200px] h-[340px] transform-style-3d">
            {boardMembers.map((member, index) => {
              const angle = (360 / boardMembers.length) * index;
              const isSelected = selectedMember.name === member.name;

              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className={`absolute inset-0 rounded-[2rem] overflow-hidden border bg-white/10 transition-all duration-300 ${
                    isSelected
                      ? "border-white shadow-[0_25px_80px_rgba(255,255,255,0.18)]"
                      : "border-white/15 shadow-2xl"
                  }`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(380px)`,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-5 pt-12 pb-5 text-left">
                    <p className="text-white text-lg font-bold leading-tight">
                      {member.name}
                    </p>
                    
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BoardTower;