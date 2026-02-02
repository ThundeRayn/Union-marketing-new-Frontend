import SubHero from "@/blocks/SubHero"
import ContactUs from "@/blocks/ContactUs"
import Upbadge from "@/blocks/Upbadge"

const ContactPage = () => {
  return (
    <>
      <Upbadge 
        title='CONTACT' 
        description="We'd love to hear from you. Connect to discuss your real estate projects." 
        fullScreen={false}
        url="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459181/%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96-2025-03-16-%E4%B8%8B%E5%8D%8811.44.45_xocjxm.png"
         />
      
      <ContactUs />

      {/* Info Section */}
      <div className="py-20 px-14 bg-gray-50 max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our location
          </h3>
          <p className="text-gray-700 leading-relaxed">
            139 Main St., #206, Unionville<br />
            Markham L3R 2G6
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Contact us
          </h3>
          <div className="space-y-2">
            <p className="text-gray-700">
              <a href="mailto:info@unionmarketingrealty.ca" className="hover:text-yellow-400 transition-colors">
                info@unionmarketingrealty.ca
              </a>
            </p>
            <p className="text-gray-700">
              <a href="tel:+19053581369" className="hover:text-yellow-400 transition-colors">
                +1 (905) 358-1369
              </a>
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default ContactPage
