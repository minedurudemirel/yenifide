function Contact() {
    return (
      <main className="bg-slate-50 min-h-screen">
  
        {/* Başlık */}
        <section className="bg-white py-20 px-6 text-center">
          <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase">
            Bize Ulaşın
          </p>
  
          <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
            Fikir ve Değerler Derneği ile İletişime Geçin
          </h1>
  
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Etkinliklerimiz, projelerimiz, gönüllülük faaliyetlerimiz ve iş
            birlikleri hakkında bizimle iletişime geçebilir, çalışmalarımıza
            destek olmak için ekibimize katılabilirsiniz.
          </p>
        </section>
  
        {/* İletişim Kartları */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
  
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#0F3D3E] mb-6">
              İletişim Bilgileri
            </h2>
  
            <div className="space-y-5 text-gray-700">
  
              <p>
                📧 <strong>E-posta:</strong><br />
                fikirvedegerler@gmail.com
              </p>
  
              <p>
                📍 <strong>Konum:</strong><br />
                Ankara, Türkiye
              </p>
  
            </div>
          </div>
  
          <div className="bg-[#0F3D3E] text-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">
              Sosyal Medyada Biz
            </h2>
  
            <div className="space-y-4">
  
              <a
                href="https://instagram.com/fikirvedegerler"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/10 hover:bg-white/20 transition rounded-xl p-4"
              >
                📷 Instagram<br />
                <span className="text-white/80">
                  @fikirvedegerler
                </span>
              </a>
  
              <a
                href="https://tiktok.com/@fikirvedegerler"
                target="_blank"
                rel="noreferrer"
                className="block bg-white/10 hover:bg-white/20 transition rounded-xl p-4"
              >
                🎵 TikTok<br />
                <span className="text-white/80">
                  @fikirvedegerler
                </span>
              </a>
  
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
  
            <a
              href="#"
              className="inline-block bg-[#0F3D3E] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Gönüllü Başvuru Formu
            </a>
  
          </div>
        </section>
  
      </main>
    );
  }
  
  export default Contact;