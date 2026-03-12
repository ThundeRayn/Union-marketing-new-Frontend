import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const clients = [
  {
    name: 'Treasure Hill Homes',
    role: 'Home Builder',
    image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768280916/Our-Mission_tlwvlz.jpg',
  },
  {
    name: 'Conder Developments',
    role: 'Home Builder',
    image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281074/2023-12-13_g0dzy7.jpg',
  },
  {
    name: 'Cortel Group',
    role: 'Home Builder',
    image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281086/Calacatta-Sintered_Cortel-Group_Marble-Trend_c1cupk.jpg',
  },
]

const ClientCards = () => {
  const { ref, isVisible } = useScrollAnimation(0.05)

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
          Our Clients
        </p>

        <h2
          className={`text-3xl md:text-5xl lg:text-[3.2rem] font-normal text-white mb-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: 'var(--font-heading)', transitionDelay: '400ms' }}
        >
          Who We Work With
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${(index + 2) * 150}ms` : '0ms' }}
            >
              <div className="w-full h-64 mb-5 overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3
                className="text-lg font-normal text-white mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {client.name}
              </h3>
              <p
                className="text-[10px] tracking-[0.15em] uppercase text-white/50"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                {client.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientCards
