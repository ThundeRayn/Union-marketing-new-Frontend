import Upbadge from "@/blocks/Upbadge"
import PictureRender from "@/components/PictureRender"
import YouTubeVideo from "@/components/YouTubeVideo"

const CGTowerPage = () => {
  return (
    <div>
      {/* Video Section */}
      <YouTubeVideo videoId="G0atJezPcLk" title="Project Video" />

      {/* Project Info Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h3 className="text-lg font-bold text-gray-700 mb-2">Project Type</h3>
            <p className="text-2xl font-semibold text-black">RESIDENTIAL TOWER</p>
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
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279354/summer-view_boayn8.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279350/park_ilvsk1.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279345/Model-Suite-4_yjkwww.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279339/skating-loop-view_tqauyi.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279333/Model-Suite-5_y8oxn5.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279327/Model-Suite-3_tkkc0b.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279318/Model-Suite-1_u5bx0j.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279313/Expo-Tower-2_pxpojx.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279309/Expo-32nd-Floor-Rendering_v2jin7.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279305/Expo-5-Pool-Rendering-2_otncuw.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279300/Expo-Aerial_eglbh9.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279296/Expo-5-Lobby-Rendering_tsgxwa.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279291/Expo-5_wulne7.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279287/Expo-5-Pool-Rendering_o0a46z.jpg',
          'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279281/VMC-Aerial-View_yjam91.jpg'
        ]}
      />
      {/* The Builder Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">The Builder</h2>
        <div className="flex items-center justify-center gap-4">
          <img 
            src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767486870/Cortel-Group-with-text_p5vbhf.png" 
            alt="Builder icon"
            className="w-102 object-cover rounded-lg" 
          />
        </div>
      </div>

      
      
      <Upbadge 
        title='CG Tower' 
        description='NOW SELLING'
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768279277/project-part-2_q0iobc.jpg"
      />
    </div>
  )
}

export default CGTowerPage
