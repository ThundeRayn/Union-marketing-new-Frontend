import Upbadge from "@/blocks/Upbadge"
import PictureRender from "@/components/PictureRender"
import YouTubeVideo from "@/components/YouTubeVideo"

const AbejaPage = () => {

  return (
    <div>

      <YouTubeVideo videoId="KX63R85lUOc" title="Project Video" />
      
      {/* Project Info Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-black">CONDOMINIUM</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Location</h3>
            <p className="text-2xl font-semibold text-black">JANE STREET & RUTHERFORD ROAD</p>
          </div>
        </div>
      </div>

      {/* Picture Render Section */}
      <PictureRender
        title="Rendering"
        pictures={[
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095926/render-1_ugefuc.png',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095920/siteplan_xtuiqg.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095900/index-slider-v3_fhhaj5.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095886/index-slider-v4_ps8otu.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1770095878/index-slider-v2_y1toqv.jpg',
        ]}
      />

      {/* The Builder Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">The Builder</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <img 
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486870/Cortel-Group-with-text_p5vbhf.png" 
            alt="Builder icon"
            className="w-102 object-cover rounded-lg" 
          />
          <img src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279495/AbejaDistrictCondos_logo_zv7baw.jpg"
            alt="Abeja logo"
            className="w-102 object-cover rounded-lg" 
          />
        </div>
      </div>

      

      <Upbadge 
        title='Abeja Project' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279500/index-slider-v1_kamq7j.jpg"
      />

    </div>
  )
}

export default AbejaPage
