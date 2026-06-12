function StatsSection() {
  // These stats should ideally come from a data file or API
  // For now, using placeholder data that reflects the organization's impact
  const stats = [
    {
      number: "1+",
      label: "Yıl Deneyimi",
      icon: "📅",
      color: "bg-[#0F3D3E]/10 text-[#0F3D3E]"
    },
    {
      number: "100+",
      label: "Etkinlik",
      icon: "🎯",
      color: "bg-[#0F3D3E]/10 text-[#0F3D3E]"
    },
    {
      number: "250+",
      label: "Gönüllü",
      icon: "🤝",
      color: "bg-[#0F3D3E]/10 text-[#0F3D3E]"
    },
    {
      number: "5000+",
      label: "Etkilenen Kişi",
      icon: "💫",
      color: "bg-[#0F3D3E]/10 text-[#0F3D3E]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#0F3D3E] font-semibold tracking-widest uppercase mb-4">
            Sayılarla FİDE
          </p>

          <h2 className="text-4xl font-bold text-center mb-6 font-playfair">
            Etkimiz Sayılarda
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-lg {stat.color}">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <p className="text-3xl font-bold mb-2 font-playfair">
                {stat.number}
              </p>
              <p className="text-gray-600 font-inter">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;