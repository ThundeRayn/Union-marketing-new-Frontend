import Customer from "@/blocks/Customer"
import Hero from "../blocks/Hero"
import Mission from "../blocks/Mission"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import ContactUs from "@/blocks/ContactUs"

const HomePage = () => {
  const services = [
    {
      title: "Advisory & Real Support",
      description: "Comprehensive support in project planning and execution, including land acquisition, regulatory compliance and tailored development strategies."
    },
    {
      title: "Marketing & Sales Strategy",
      description: "Tailored marketing and sales strategies for pre-construction low-rise projects, encompassing market analysis, branding, and targeted campaigns for maximum sales effectiveness."
    },
    {
      title: "Network & Expert CoBuilders",
      description: "Fostering strategic partnerships with developers and builders, providing insights and support to enhance project viability and success in the pre-construction low-rise market."
    },
    {
      title: "Consult & Market Analysis",
      description: "In-depth market analysis and consultation services, including demographic studies, pricing strategies, and trend insights for project optimization."
    }
  ]

  return (
    <div>
      <Hero/>
      <Mission/>

      {/* Our services */}
      <div 
        className="py-20 px-14 relative"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767497882/RenderingA_nvcuji.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl font-serif font-bold text-white mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-[50px] p-8 shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-in-out">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-normal mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="default" asChild>
                  <Link to="/service">VIEW MORE &rarr;</Link>
                </Button>
              </div>
            ))}

          </div>
        </div>
      </div>

      <Customer/>
      <ContactUs/>
      
    </div>
  )
}

export default HomePage