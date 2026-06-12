import { Link } from "react-router-dom";

function Footer() {
  const socialLinks = [
    {
      href: "https://instagram.com/fikirvedegerler",
      src: "/icons/instagram.svg",
      alt: "Instagram",
    },
    {
      href: "https://x.com/fikirvedegerler",
      src: "/icons/square-x-twitter.svg",
      alt: "X",
    },
    {
      href: "https://tiktok.com/@fikirvedegerler",
      src: "/icons/tiktok-icon.svg",
      alt: "TikTok",
    },
    {
      href: "https://linkedin.com/@fikirvedegerler",
      src: "/icons/linkedin.svg",
      alt: "LinkedIn",
    },
    {
      href: "https://youtube.com/@fikirvedegerler",
      src: "/icons/youtube.svg",
      alt: "YouTube",
    },
    {
      href: "mailto:fikirvedegerler@gmail.com",
      src: "/icons/gmail.svg",
      alt: "Mail",
    },
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <Link
            to="/"
            className="flex items-center justify-center md:justify-start gap-3"
          >
            <img
              src="/fidelogo.png"
              alt="Fikir ve Değerler Derneği"
              className="h-11 w-auto bg-white p-1"
            />

            <div className="text-center md:text-left">
              <p className="font-bold text-lg logo-title">
                Fikir ve Değerler Derneği
              </p>
              <p className="text-white/45 text-xs mt-1">
                Değerler Fikirlerin FİDE’sidir.
              </p>
            </div>
          </Link>

          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.alt}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto") ? undefined : "noreferrer"}
                aria-label={item.alt}
                className="opacity-50 hover:opacity-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-5 w-5 grayscale invert"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs text-white/40">
          © 2026 Fikir ve Değerler Derneği. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

export default Footer;