import { useState } from "react";
import Select from "react-select";

function Ortaklik() {
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const partnershipOptions = [
    { value: "sponsor", label: "Sponsor olmak istiyorum" },
    { value: "event", label: "Etkinlik iş birliği yapmak istiyorum" },
    { value: "project", label: "Ortak proje geliştirmek istiyorum" },
    { value: "media", label: "Medya / Tanıtım desteği sağlamak istiyorum" },
    { value: "product", label: "Ürün / Hizmet desteği sağlamak istiyorum" },
    { value: "other", label: "Diğer" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^05[0-9]{9}$/;

    if (!emailRegex.test(formData.email)) {
      setStatus("Lütfen geçerli bir e-posta adresi giriniz.");
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      setStatus("Telefon numarası 05 ile başlamalı ve 11 haneli olmalıdır.");
      return;
    }

    if (!formData.partnershipType) {
      setStatus("Lütfen iş birliği türünü seçiniz.");
      return;
    }

    setStatus("Gönderiliyor...");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxLgZ0PtYPA1ifV1R_IBkCSXNOSo_1UFklrzUlOM_2LtAtz45lL7khtQVk2BUX2XIp9qQ/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      setStatus(result.message);

      if (result.result === "success") {
        setFormData({
          company: "",
          contactName: "",
          email: "",
          phone: "",
          partnershipType: "",
          message: "",
        });
      }
    } catch (error) {
      setStatus("Bir hata oluştu. Lütfen tekrar deneyiniz.");
    }
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-white py-24 px-6 text-center">
        <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase">
          Ortaklık Başvurusu
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
          FİDE ile İş Birliği Yapın
        </h1>

        <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
          Fikir ve Değerler Derneği’nin sosyal sorumluluk, gençlik, kültür ve
          gelişim alanındaki projelerine sponsor olabilir veya iş birliği
          önerilerinizi bizimle paylaşabilirsiniz.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-md p-8 md:p-12 grid gap-5"
        >
          <input
            type="text"
            name="company"
            placeholder="Kurum / Marka Adı *"
            value={formData.company}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="contactName"
            placeholder="Yetkili Kişi *"
            value={formData.contactName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="E-posta *"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-xl px-4 py-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="05XXXXXXXXX *"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="^05[0-9]{9}$"
            maxLength="11"
            className="border border-gray-300 rounded-xl px-4 py-3"
          />

          <Select
            options={partnershipOptions}
            isSearchable
            isClearable
            placeholder="İş birliği türünü seçiniz *"
            className="text-left"
            noOptionsMessage={() => "Seçenek bulunamadı"}
            onChange={(selected) =>
              setFormData({
                ...formData,
                partnershipType: selected?.label || "",
              })
            }
          />

          <textarea
            name="message"
            placeholder="Mesajınız / İş birliği öneriniz"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border border-gray-300 rounded-xl px-4 py-3"
          />

          <button
            type="submit"
            className="bg-[#0F3D3E] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
          >
            Başvuruyu Gönder
          </button>

          {status && (
            <p className="text-[#0F3D3E] font-semibold text-center">
              {status}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Ortaklik;