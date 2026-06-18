import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

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
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);
  const menuItems = (
    <>
     

      <Link to="/biz-kimiz" onClick={() => setMenuOpen(false)}>
        BİZ KİMİZ?
      </Link>

      <Link to="/etkinlikler" onClick={() => setMenuOpen(false)}>
        ETKİNLİKLER
      </Link>

      <Link to="/geleceketkinlikler" onClick={() => setMenuOpen(false)}>
        GELECEK ETKİNLİKLER
      </Link>

      <Link to="/bize-ulasin" onClick={() => setMenuOpen(false)}>
        BİZE ULAŞIN
      </Link>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
    ref={navRef}
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-beige/80 backdrop-blur-md" : "bg-black/20 backdrop-blur-sm"
    } text-black`}
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
      className="text-xl md:text-xl font-bold text-[#0F3D3E]"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      Fikir ve Değerler
    </h1>

    <p className="text-xs md:text-sm tracking-[0.25em] text-[#0F3D3E]/80 uppercase">
      Derneğİ
    </p>
  </div>
</Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

        <div className="hidden md:flex gap-8 text-sm font-semibold">
          {menuItems}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0B2F30] px-6 py-5 flex flex-col gap-4 text-sm font-semibold">
          {menuItems}
        </div>
      )}
    </nav>
  );
}

export default Navbar;