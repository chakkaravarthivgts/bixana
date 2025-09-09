"use client";

const clientLogos = [
  {
    name: "Aramco Services Company",
    logo: "/aramco-services-company-logo-png_seeklogo-395706.png",
  },
  {
    name: "Hyundai Motor Company",
    logo: "/hyundai-motor-company-logo-png_seeklogo-69075.png",
  },
  {
    name: "Lukoil Oil Company",
    logo: "/lukoil-oil-company-logo-png_seeklogo-197214.png",
  },
  {
    name: "The Coca-Cola Company",
    logo: "/the-coca-cola-company-logo-png_seeklogo-138258.png",
  },
  { name: "Logo Placeholder", logo: "/logo_placeholder-1.png" },
];

export default function Clients() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
            <span className="text-black text-base font-normal uppercase tracking-wide">
              trusted partners
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-black leading-tight">
            Our Clients
          </h2>
        </div>

        {/* Scrolling Logos Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-12 items-center animate-scroll">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-56 h-36 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-48 h-28 object-contain"
                  onError={(e) => {
                    // Fallback to placeholder text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-gray-400 text-sm">${client.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-56 h-36 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-48 h-28 object-contain"
                  onError={(e) => {
                    // Fallback to placeholder text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-gray-400 text-sm">${client.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
