
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const menuItems = (
    <>
      <Link
        className="text-sm font-semibold text-[#0F3D3E] hover:text-[#557A70] transition-colors duration-300"
        to="/biz-kimiz"
        onClick={() => setMenuOpen(false)}
      >
        BİZ KİMİZ
      </Link>

      <Link
        className="text-sm font-semibold text-[#0F3D3E] hover:text-[#557A70] transition-colors duration-300"
        to="/etkinlikler"
        onClick={() => setMenuOpen(false)}
      >
        ETKİNLİKLER
      </Link>

      <Link
        className="text-sm font-semibold text-[#0F3D3E] hover:text-[#557A70] transition-colors duration-300"
        to="/geleceketkinlikler"
        onClick={() => setMenuOpen(false)}
      >
        GELECEK ETKİNLİKLER
      </Link>

      <Link
        className="text-sm font-semibold text-[#0F3D3E] hover:text-[#557A70] transition-colors duration-300"
        to="/basinda-fide"
        onClick={() => setMenuOpen(false)}
      >
        BASINDA FİDE
      </Link>

      <Link
        className="text-sm font-semibold text-[#0F3D3E] hover:text-[#557A70] transition-colors duration-300"
        to="/bize-ulasin"
        onClick={() => setMenuOpen(false)}
      >
        BİZE ULAŞIN
      </Link>
    </>
  );

  const drawerMenuItems = [
    { label: "BİZ KİMİZ?", path: "/biz-kimiz" },
    { label: "ETKİNLİKLER", path: "/etkinlikler" },
    { label: "GELECEK ETKİNLİKLER", path: "/geleceketkinlikler" },
    { label: "BASINDA FİDE", path: "/basinda-fide" },
    { label: "BİZE ULAŞIN", path: "/bize-ulasin" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F5EF]/90 backdrop-blur-md shadow-sm"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/fide.png"
            alt="Fikir ve Değerler Derneği"
            className="h-16 md:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
          />

          <div className="leading-tight">
            <h1
              className="text-xl font-bold text-[#0F3D3E]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Fikir ve Değerler
            </h1>

            <p className="text-xs md:text-sm tracking-[0.25em] text-[#0F3D3E]/80 uppercase">
              DERNEĞİ
            </p>
          </div>
        </Link>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-[#0F3D3E]"
          aria-label="Menüyü aç"
        >
          <HiOutlineMenuAlt3 size={32} />
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {menuItems}
        </div>
      </div>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[55] md:hidden"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="fixed top-0 right-0 h-screen w-[82%] max-w-sm bg-[#F8F5EF] z-[60] md:hidden shadow-2xl px-8 py-8 flex flex-col overflow-y-auto animate-[drawerSlide_0.35s_ease-out]">
            <div className="flex justify-end">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#0F3D3E]"
                aria-label="Menüyü kapat"
              >
                <HiX size={34} />
              </button>
            </div>

            <div className="flex flex-col items-center mt-3">
              <img src="/fide.png" alt="FİDE" className="h-24 w-auto" />

              <h2
                className="mt-4 text-2xl font-bold text-[#0F3D3E]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Fikir ve Değerler
              </h2>

              <p className="tracking-[0.35em] text-sm text-[#0F3D3E]/70 uppercase">
                DERNEĞİ
              </p>

              <p className="mt-6 text-center italic text-[#0F3D3E]/70 leading-7">
                "Değerler Fikirlerin FİDE'sidir."
              </p>
            </div>

            <div className="my-8 border-t border-[#0F3D3E]/15"></div>

            <div className="flex flex-col">
              <div className="border-t border-[#0F3D3E]/15"></div>

              {drawerMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between border-b border-[#0F3D3E]/15 py-3 text-left text-lg font-semibold tracking-wide text-[#0F3D3E] hover:text-[#557A70] transition-colors duration-300"
                >
                  <span>{item.label}</span>

                  <span className="text-3xl leading-none text-[#0F3D3E]/60 group-hover:translate-x-1 group-hover:text-[#557A70] transition-all duration-300">
                    ›
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 pb-4">
              <div className="flex justify-center gap-7">
                <a
                  href="https://instagram.com/fikirvedegerler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/icons/instagram.svg"
                    alt="Instagram"
                    className="w-5 h-5 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </a>

                <a
                  href="https://x.com/fikirvedegerler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/icons/square-x-twitter.svg"
                    alt="X"
                    className="w-5 h-5 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </a>

                <a
                  href="https://tiktok.com/@fikirvedegerlerr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/icons/tiktok-icon.svg"
                    alt="TikTok"
                    className="w-5 h-5 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </a>

                <a
                  href="https://linkedin.com/company/fikirvedegerler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    className="w-5 h-5 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </a>

                <a
                  href="https://youtube.com/@fikirvedegerler"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/icons/youtube.svg"
                    alt="YouTube"
                    className="w-5 h-5 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </a>
              </div>

              <p className="mt-8 text-center text-xs text-[#0F3D3E]/60">
                © 2025 Fikir ve Değerler Derneği
              </p>
            </div>
          </aside>
        </>
      )}
    </nav>
  );
}

export default Navbar;
