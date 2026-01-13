import Upbadge from "@/blocks/Upbadge"
import PictureRender from "@/components/PictureRender";

const EversleyPage = () => {
  const images = [
    'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277534/Site-Map_clyzsu.jpg'
  ];

  return (
    <div>
      <Upbadge 
        title='Eversley Project' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277530/2021_09_28_12_28_44_thomson-c-1024x682-1_wonxfk.jpg"
      />

      {/* Project Info Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-black">LUXURY SINGLES</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Location</h3>
            <p className="text-2xl font-semibold text-black">DUFFERIN STREET & SOUTH OF 15TH SIDEROAD</p>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-8">
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Container - Logo */}
          
          <div className="flex flex-col space-y-4">
            <img 
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277511/Eversley-Estate-King-City_kmpfyf.png" 
              alt="Main project"
              className="w-102 p-6 h-auto object-cover rounded-lg mb-4" 
            />
          </div>

          {/* Right Container - Image List */}
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

        {/* Picture Render Section */}
        <PictureRender
            title="Rendering"
            pictures={[
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277571/Eversley-Estates-Kitchen_jr3agk.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277567/Eversley-Estates-Family-Room_kffmay.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277563/Eversley-Estates-Ensuite-1_povqsz.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277559/Eversley-Estates-Dining-Room_zcb0rv.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277555/Eversley-Estates-Ensuite_t37zin.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277550/Eversley-Estates-Backyard_dh4vyb.webp',
            ]}
        />

        {/* Picture Render Section */}
        <PictureRender
            title="Model Home Gallery"
            pictures={[
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277605/Eversley-Estates-Model-1-1_kvkfag.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277602/Eversley-Estates-Model-2-1_jkib3s.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277598/Eversley-Estates-Model-4-1_dewbxq.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277595/Eversley-Estates-Model-3-1_o4swiv.webp',
                'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768277591/Eversley-Estates-Model-5-1_krykrb.webp'
            ]}
        />
    </div>
  )
}

export default EversleyPage