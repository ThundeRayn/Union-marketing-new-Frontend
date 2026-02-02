import { useNavigate } from 'react-router-dom'

interface EventSellProps {
  id: number
  title: string
  description: string
  button: string
  hover: string
  link: string
  backgroundImage: string
}

const EventSell = ({
  title,
  description,
  button,
  hover,
  link,
  backgroundImage
}: EventSellProps) => {
  const navigate = useNavigate()

  return (
    <div className="event-card">
      {/* Event Hero Section */}
      <div 
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: 'calc(100vh - 80px)',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 space-y-6">
          <h2 
            className="font-serif text-4xl font-bold text-white mb-4 drop-shadow-2xl animate-[slideDownFadeIn_0.8s_ease-out]"
          >
            {title}
          </h2>
          
          <p 
            className="font-light text-lg text-white mb-8 drop-shadow-lg animate-[slideDownFadeIn_0.8s_ease-out]"
          >
            {description}
          </p>

          <div className="flex justify-center items-center">
            <button 
              onClick={() => navigate(link)}
              className="relative border border-yellow-400 text-white px-6 py-3 rounded-lg font-bold overflow-hidden group inline-block cursor-pointer transition-all duration-300 animate-[slideDownFadeIn_0.8s_ease-out]"
            >
              <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:opacity-0">
                {button}
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out text-white">
                {hover}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventSell