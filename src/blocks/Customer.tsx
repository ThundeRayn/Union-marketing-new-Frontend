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
        <p
          className={`text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-4 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontFamily: 'var(--font-label)', transitionDelay: '200ms' }}
        >
          Our Partners
        </p>
        <h2
          className={`text-3xl md:text-5xl lg:text-[3.2rem] font-normal text-white mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: 'var(--font-heading)', transitionDelay: '400ms' }}
        >
          They Believe In Us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
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