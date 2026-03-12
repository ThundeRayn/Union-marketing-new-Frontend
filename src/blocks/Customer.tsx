import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Customer = () => {
  const { ref, isVisible } = useScrollAnimation(0.05)

  const clients = [
    {
      name: "Client 1 Conder Developments",
      logo: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486806/logo-9_cylws1.png"
    },
    {
      name: "Client 2 treasure hill",
      logo: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486888/Treasure-Hill-1_hp69af.webp"
    },
    {
      name: "Client 3",
      logo: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486776/logo-removebg-preview_t0imsb.png"
    },
    {
      name: "Client 4",
      logo: "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486870/Cortel-Group-with-text_p5vbhf.png"
    }
  ]

  return (
    <div ref={ref} className="py-20 px-6 md:px-16 lg:px-24 bg-(--color-secondary)">
      <div className="max-w-7xl mx-auto">
        {/* Gold accent line */}
        <div
          className={`h-px bg-(--color-primary) mb-8 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 w-12' : 'opacity-0 w-0'
          }`}
        />
        <div className="flex items-start justify-between">
          <div>
            <p
              className={`text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-4 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ fontFamily: 'var(--font-label)', transitionDelay: '200ms' }}
            >
              Our Partners
            </p>
            <h2
              className={`text-3xl md:text-5xl lg:text-[3.2rem] font-normal text-white mb-10 lg:mb-0 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ fontFamily: 'var(--font-heading)', transitionDelay: '400ms' }}
            >
              They Believe In Us
            </h2>
          </div>

          {/* Scroll animation hint — desktop */}
          <div
            className={`hidden lg:flex items-center gap-3 mt-2 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <span
              className="text-[9px] tracking-[0.2em] uppercase text-white/30"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Scroll
            </span>
            <div className="h-6 w-px bg-(--color-primary)/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-3 bg-(--color-primary) animate-[scrollPulse_2s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Desktop split layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start mt-6">
          {/* Left: description */}
          <div
            className={`pr-8 xl:pr-16 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <p
              className="text-white/60 text-sm leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Union Marketing is a premier real estate marketing firm specializing in pre-construction developments across Ontario. We understand that every project tells a unique story, and our mission is to bring that story to life.
            </p>
            <p
              className="text-white/60 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              We meticulously select and represent the finest pre-construction projects, offering bespoke marketing strategies that highlight the uniqueness and potential of each development. With deep market expertise and innovative approaches, we set the standard for excellence.
            </p>
          </div>

          {/* Right: 2x2 logo grid */}
          <div className="grid grid-cols-2 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-4 border border-white/10 hover:border-(--color-primary)/30 transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms' }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-32 h-32 object-contain brightness-0 invert opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/iPad: logo grid only */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center lg:hidden">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-4 border border-white/10 hover:border-(--color-primary)/30 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-32 h-32 object-contain brightness-0 invert opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customer