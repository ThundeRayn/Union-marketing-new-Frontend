//import Upbadge from "@/blocks/Upbadge"

const GeorginaPage = () => {
  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768278791/Georgina-Heights-Site-Plan-scaled_y38o3y.jpg'
  ];

  return (
    <div>
      {/* <Upbadge 
        title='Georgina Project' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768278560/Georgina-Heights-in-Keswick_ideq3b.jpg"
      /> */}
      
      {/* Video Section */}
      <div className="w-full">
        <div className="w-full aspect-video">
          <iframe 
            src="https://www.youtube.com/embed/9BYZTIMmJPA?autoplay=1&loop=1&mute=1&controls=1&modestbranding=1"
            className="w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Project Video"
          />
        </div>
      </div>

      {/* Project Info Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-black">SINGLES</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Location</h3>
            <p className="text-2xl font-semibold text-black">CHURCH STREET.& WOODBINE AVENUE.</p>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4">
          {images.map((image, index) => (
            <div key={index} className="w-full overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* The Builder Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">The Builder</h2>
        <div className="flex items-center justify-center gap-4">
          <img 
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486888/Treasure-Hill-1_hp69af.webp" 
            alt="Builder icon"
            className="w-102 object-cover rounded-lg" 
          />
        </div>
      </div>

      
    </div>
  )
}

export default GeorginaPage
