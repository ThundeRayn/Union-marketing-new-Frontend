

const Customer = () => {
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
    <div className="py-20 px-14 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl font-bold text-gray-900 mb-12 text-center">
          They Believe In Us
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={client.logo} 
                alt={client.name}
                className="w-32 h-32 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Customer