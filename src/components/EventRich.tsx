import { useState } from 'react'

interface EventRichProps {
  id: number
  title: string
  description: string
  date: string
  time: string
  address: string
  backgroundImage: string
}

const EventRich = ({
  id,
  title,
  description,
  date,
  time,
  address,
  backgroundImage
}: EventRichProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopyAddress = (addressText: string) => {
    navigator.clipboard.writeText(addressText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
            key={`title-${id}`}
            className="font-serif text-4xl font-bold text-white mb-4 drop-shadow-2xl animate-[slideDownFadeIn_0.8s_ease-out]"
          >
            {title}
          </h2>
          
          <p 
            key={`subtitle-${id}`}
            className="font-light text-lg text-white mb-8 drop-shadow-lg animate-[slideDownFadeIn_0.8s_ease-out]"
          >
            {description}
          </p>

          <div className="flex justify-center items-center">
            <button 
              key={`button-${id}`}
              onClick={() => handleCopyAddress(address)}
              className="relative border border-yellow-400 text-white px-6 py-3 rounded-lg font-bold overflow-hidden group inline-block cursor-pointer transition-all duration-300 animate-[slideDownFadeIn_0.8s_ease-out]"
            >
              <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:opacity-0">
                {date}, {time}
              </span>
              <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out text-white">
                {copied ? '✓ Copied!' : address}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventRich
