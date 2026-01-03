const Mission = () => {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/mission/600/400" 
              alt="Union Marketing Mission"
              className="w-full h-[400px] object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Union Marketing Realty, we are dedicated to providing exceptional real estate services 
              that exceed our clients' expectations. Our mission is to help individuals and families 
              find their perfect home while making the entire process smooth and stress-free.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We believe in building lasting relationships based on trust, integrity, and professional excellence. 
              Our team of experienced professionals is committed to understanding your unique needs and 
              delivering personalized solutions that align with your goals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a deep understanding of the local market and a passion for real estate, we strive to 
              be your trusted partner in every step of your property journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission