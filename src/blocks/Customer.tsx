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
    <div ref={ref} className="py-20 px-6 md:px-14 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className={`font-serif text-3xl md:text-5xl font-normal text-gray-900 mb-12 text-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          They Believe In Us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-32 h-32 object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customer