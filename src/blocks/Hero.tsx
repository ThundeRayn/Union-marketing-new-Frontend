
import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const slides = [
    {
      image: 'https://picsum.photos/seed/house1/1920/600',
      title: 'Welcome to Union Marketing',
      subtitle: 'Your trusted real estate partner',
      link: '#about'
    },
    {
      image: 'https://picsum.photos/seed/house2/1920/600',
      title: 'Find Your Dream Home',
      subtitle: 'Expert guidance every step of the way'
    },
    {
      image: 'https://picsum.photos/seed/house3/1920/600',
      title: 'Professional Real Estate Services',
      subtitle: 'Building innovative solutions for a better tomorrow',
      link: '#contact'
    }
  ]

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 8000)
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-[500px] bg-gray-800">
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl text-white mb-8 drop-shadow-lg">
          {slides[currentSlide].subtitle}
        </p>
        {slides[currentSlide].link && (
          <a 
            href={slides[currentSlide].link}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition"
          >
            MORE INFORMATION
          </a>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-yellow-400' : 'w-3 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero