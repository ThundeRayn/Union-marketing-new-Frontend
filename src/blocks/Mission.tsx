import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Mission = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <div ref={ref} className="py-26 px-14 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center transition-all duration-1000 ${isVisible ? 'animate-[slideDownFadeIn_0.8s_ease-out]' : 'opacity-0'}`}>
          {/* Image */}
          <div className="relative">
            <img 
              src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767460169/mitchell-kmetz-ztVcGTSD8xw-unsplash_xhtntl.jpg" 
              alt="Union Marketing Mission"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-[50px]"
            />
          </div>

          {/* Content */}
          <div className="p-6 ">
            <h2 className="text-6xl font-normal text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-8 md:mb-4 leading-relaxed">
              Union Marketing is a premier real estate marketing firm specializing in pre-construction 
              developments across Ontario. We understand that every project tells a unique story, and 
              our mission is to bring that story to life.
            </p>
            <p className="hidden md:block text-lg text-gray-700 mb-6 leading-relaxed">
              We meticulously select and represent the finest pre-construction projects, offering bespoke 
              marketing strategies that highlight the uniqueness and potential of each development. With 
              deep market expertise and innovative approaches, we bridge the gap between visionary 
              developers and prospective buyers.
            </p>
            
            <Button variant="union" size="union" asChild >
              <Link to="/service">VIEW MORE</Link>
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission