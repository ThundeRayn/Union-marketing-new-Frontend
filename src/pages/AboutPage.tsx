import ContactUs from "@/blocks/ContactUs"
import Customer from "@/blocks/Customer"
import SubHero from "@/blocks/SubHero"
import YTVideo from "@/components/YTVideo"


const AboutPage = () => {
  return (
    <div>
        <SubHero    />
        <YTVideo videoId="ncvwHd0c_Rg" title="About Us" />
        
        {/* Client Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold mb-10 text-center">Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Client Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768280916/Our-Mission_tlwvlz.jpg"
                  alt="Client 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Treasure Hill Homes</h3>
              <p className="text-sm text-gray-600">Home Builder</p>
            </div>

            {/* Client Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281074/2023-12-13_g0dzy7.jpg"
                  alt="Client 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conder Developments</h3>
              <p className="text-sm text-gray-600">home builder</p>
            </div>

            {/* Client Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281086/Calacatta-Sintered_Cortel-Group_Marble-Trend_c1cupk.jpg"
                  alt="Client 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cortel Group</h3>
              <p className="text-sm text-gray-600">home builder</p>
            </div>
          </div>
        </div>

        <Customer/>
        <ContactUs/>
    </div>
  )
}

export default AboutPage