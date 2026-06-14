function EventCard({ event }) {
    const hoverImage = event.hoverImage || event.image;

    return (
        <div className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
            <div className="relative h-72 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />

                <img
                    src={hoverImage}
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="absolute top-4 left-4 bg-white/90 text-[#0F3D3E] px-4 py-2 rounded-full text-xs font-bold shadow">
                    {event.category}
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span>📅</span>
                    <span>{event.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#0F3D3E] transition">
                    {event.title}
                </h3>

                <p className="text-gray-600 leading-7">
                    {event.description}
                </p>
            </div>
        </div>
    );
}

export default EventCard;