import { useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Select from "react-select";
import { FaWhatsapp } from "react-icons/fa";
import { universities } from "../data/universities";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university:"",
    department: "",
    message: "",
  });
  
  const universityOptions = universities.map((university) => ({
    value: university,
    label: university,
  }));

  const [status, setStatus] = useState("");
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Gönderiliyor...");
  
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzBzCngnfcOJuO4J7wNEWLASV3T8T7vLNUHFswlwJ5WeJcX-j9zJbys5dHTDQyVGEHjxA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      setStatus("Başvurunuz başarıyla alındı.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        university:"",
        department: "",
        message: "",
      });
    } catch (error) {
      setStatus("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };
    return (
      <main className="bg-slate-50 min-h-screen">
  
        {/* Başlık */}
        <section className="bg-white py-20 px-6 text-center">
          <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase">
            BİZE ULAŞIN
          </p>
  
          <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
            Fikir ve Değerler Derneği ile İletişime Geçin
          </h1>
  
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Etkinliklerimiz, projelerimiz, gönüllülük faaliyetlerimiz ve iş
            birlikleri hakkında bizimle iletişime geçebilirsiniz.
          </p>
        </section>
  
        {/* İletişim Kartları */}
        <section className="max-w-5xl mx-auto px-6 py-16">
  
        <div className="bg-white rounded-3xl shadow-md p-10">
            <h2 className="text-2xl font-bold text-[#0F3D3E] mb-6">
              İletişim Bilgileri
            </h2>
  
            <div className="space-y-5 text-gray-700">
           
            <p className="flex items-center gap-2">
  <a
    href="mailto:fikirvedegerler@gmail.com"
    className="flex items-center gap-2 hover:opacity-80 transition"
  >
    <img
      src="/icons/gmail.svg"
      alt="Mail"
      className="w-6 h-6"
    />
<span><strong>Gmail:</strong></span>
<a href="mailto:fikirvedegerler@gmail.com">
  fikirvedegerler@gmail.com
</a>
  </a>
</p>
 
              <p>
  📍 <strong>Adres:</strong>
   Çankaya / Ankara
</p>

<a
  href="https://maps.google.com/?q=Ahlatlıbel,Yavuz+Sultan+Selim+Blv,06810+Çankaya+Ankara"
  target="_blank"
  rel="noreferrer"
  className="inline-block mt-3 text-[#0F3D3E] font-semibold hover:underline"
>
<iframe
  title="FİDE Konum"
  src="https://www.google.com/maps?q=Ahlatlıbel,Yavuz+Sultan+Selim+Blv,06810+Çankaya+Ankara&output=embed"
  className="w-full h-64 rounded-2xl mt-6 border-0"
  loading="lazy"
/>
</a>
  
            </div>
          </div>
  
          <div className="text-center py-2">
  <h2 className="text-xl font-bold text-[#0F3D3E] mb-3">
    Sosyal Medyada Biz
  </h2>

  <div className="flex justify-center gap-10 mt-8">

  <a
    href="https://instagram.com/fikirvedegerler"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="/icons/instagram.svg"
      alt="Instagram"
      className="w-8 h-8 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
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
      className="w-8 h-8 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
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
      className="w-8 h-8 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
    />
  </a>
  <a
    href="https://linkedin.com/@fikirvedegerler"
    target="_blank"
    rel="noreferrer"
  >
    <img
      src="/icons/linkedin.svg"
      alt="Linkedin"
      className="w-8 h-8 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
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
      className="w-8 h-8 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"
    />
  </a>


  </div>

  <div className="mt-8 text-center text-white/80 text-sm">
  
  </div>
</div>
  
        </section>
  
        {/* Katılım Çağrısı */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="bg-white rounded-3xl shadow-md p-10 text-center">
  
            <h2 className="text-3xl font-bold text-[#0F3D3E] mb-4">
              Aramıza Katılın
            </h2>
  
            <p className="text-gray-600 leading-8 mb-8">
              Gençlerin gelişimine katkı sunan projelerde yer almak,
              sosyal sorumluluk faaliyetlerine katılmak ve yeni fikirler
              üretmek için siz de Fikir ve Değerler Derneği gönüllüleri
              arasında yerinizi alabilirsiniz.
            </p>
  
           
            <form onSubmit={handleSubmit} className="grid gap-4 mt-8">
  <input
    type="text"
    name="name"
    placeholder="Ad Soyad"
    value={formData.name}
    onChange={handleChange}
    required
    className="border border-gray-300 rounded-xl px-4 py-3"
  />

  <input
    type="email"
    name="email"
    placeholder="E-posta"
    value={formData.email}
    onChange={handleChange}
    required
    className="border border-gray-300 rounded-xl px-4 py-3"
  />

<input
  type="tel"
  name="phone"
  placeholder="05XXXXXXXXX"
  value={formData.phone}
  onChange={handleChange}
  required
  pattern="0[0-9]{10}"
  maxLength="11"
  className="border border-gray-300 rounded-xl px-4 py-3"
/>

 <div>

  <Select
  options={universityOptions}
  isSearchable
  isClearable
  placeholder="Üniversiteniz"
  className="text-left"
  noOptionsMessage={() => "Üniversite bulunamadı"}
  onChange={(selected) =>
    setFormData({
      ...formData,
      university: selected?.value || "",
    })
  }
/>
</div>
  <input
    type="text"
    name="department"
    placeholder="Bölüm"
    value={formData.department}
    onChange={handleChange}
    className="border border-gray-300 rounded-xl px-4 py-3"
  />

  <textarea
    name="message"
    placeholder="Kısaca kendinizden ve neden gönüllü olmak istediğinizden bahsedin."
    value={formData.message}
    onChange={handleChange}
    rows="4"
    className="border border-gray-300 rounded-xl px-4 py-3"
  />

  <button
    type="submit"
    className="bg-[#0F3D3E] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
  >
    Başvuruyu Gönder
  </button>

  {status && (
    <p className="text-[#0F3D3E] font-semibold mt-2">
      {status}
    </p>
  )}
</form>
<a
  href="https://wa.me/905XXXXXXXXX"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-green-600"
  aria-label="WhatsApp ile iletişime geç"
>
  <FaWhatsapp className="text-4xl" />
</a>
          </div>
        </section>
  
      </main>
      
    );
  }
  
  export default Contact;