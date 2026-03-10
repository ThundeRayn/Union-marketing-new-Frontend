import ContactUs from "@/blocks/ContactUs"
import Customer from "@/blocks/Customer"
import SubHero from "@/blocks/SubHero"
import YTVideo from "@/components/YTVideo"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const AboutPage = () => {
  const { ref: clientsRef, isVisible: clientsVisible } = useScrollAnimation(0.05)
  return (
    <div>
        <SubHero titleShadow descriptionShadow />
        <YTVideo videoId="ncvwHd0c_Rg" title="About Us" />
        
        {/* Client Section */}
        <div ref={clientsRef} className="container mx-auto px-4 py-12">
          <h2 className={`font-serif mx-10 text-2xl md:text-4xl font-normal text-gray-900 mb-10 text-center transition-all duration-700 ease-out ${
            clientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>Our Clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Client Card 1 */}
            <div className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
              clientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: clientsVisible ? '0ms' : '0ms' }}>
              <div className="w-full h-64 mb-4 overflow-hidden rounded-xl">
                <img
                  src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768280916/Our-Mission_tlwvlz.jpg"
                  alt="Client 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Treasure Hill Homes</h3>
              <p className="text-sm text-gray-600">Home Builder</p>
            </div>

            {/* Client Card 2 */}
            <div className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
              clientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: clientsVisible ? '120ms' : '0ms' }}>
              <div className="w-full h-64 mb-4 overflow-hidden rounded-xl">
                <img
                  src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281074/2023-12-13_g0dzy7.jpg"
                  alt="Client 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conder Developments</h3>
              <p className="text-sm text-gray-600">home builder</p>
            </div>

            {/* Client Card 3 */}
            <div className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
              clientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: clientsVisible ? '240ms' : '0ms' }}>
              <div className="w-full h-64 mb-4 overflow-hidden rounded-xl">
                <img
                  src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281086/Calacatta-Sintered_Cortel-Group_Marble-Trend_c1cupk.jpg"
                  alt="Client 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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