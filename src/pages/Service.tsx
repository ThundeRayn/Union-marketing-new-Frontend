
const Service = () => {
  const services = [
    {
      title: "Strategic Marketing",
      content: "We develop comprehensive marketing strategies tailored to each project, ensuring maximum visibility and engagement with your target audience through digital and traditional channels."
    },
    {
      title: "Market Analysis",
      content: "Our expert team conducts thorough market research and analysis to identify opportunities and position your pre-construction project for optimal success in the competitive Ontario market."
    },
    {
      title: "Client Relations",
      content: "We prioritize building strong relationships with developers and buyers alike, providing personalized service and maintaining transparent communication throughout the entire process."
    },
    {
      title: "Project Showcase",
      content: "Through innovative presentation techniques and cutting-edge technology, we showcase each development's unique features, amenities, and investment potential to prospective buyers."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Mission */}
          <div className="lg:sticky lg:top-24">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Mission
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              To meticulously select and represent the finest pre construction projects in Ontario; 
              offering bespoke marketing strategies that highlight the uniqueness and potential of 
              each development.
            </p>
          </div>

          {/* Right Side - Service Blocks */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-[fadeInUp_0.6s_ease-out_both]"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service