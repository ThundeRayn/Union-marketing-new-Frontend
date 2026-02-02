
import { useState, useEffect, useRef } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const slides = [
    {
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459350/2021_09_28_12_28_44_thomson-c-1024x682-1_ojqhoh.jpg',
      title: 'Welcome to Union Marketing',
      subtitle: 'Your trusted real estate partner',
      link: '#about'
    },
    {
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459319/Untitled-design-4_ui8y7s.png',
      title: 'Find Your Dream Home',
      subtitle: 'Expert guidance every step of the way'
    },
    {
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459181/%E8%9E%A2%E5%B9%95%E6%88%AA%E5%9C%96-2025-03-16-%E4%B8%8B%E5%8D%8811.44.45_xocjxm.png',
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
    <div className="relative w-full bg-gray-800" style={{ height: 'calc(100vh - 80px)' }}>
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
          <div className="absolute inset-0 bg-black/50"></div>
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

      {/* conditional button with link */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 
          key={`title-${currentSlide}`}
          className="font-serif text-4xl font-bold text-white mb-4 drop-shadow-2xl animate-[slideDownFadeIn_0.8s_ease-out]"
        >
          {slides[currentSlide].title}
        </h1>
        <p 
          key={`subtitle-${currentSlide}`}
          className="font-light text-lg text-white mb-8 drop-shadow-lg animate-[slideDownFadeIn_0.8s_ease-out]"
        >
          {slides[currentSlide].subtitle}
        </p>
        {slides[currentSlide].link && (
          <a 
            key={`button-${currentSlide}`}
            href={slides[currentSlide].link}
            className="relative border border-yellow-400 text-white px-6 py-3 rounded-lg font-bold overflow-hidden group inline-block animate-[slideDownFadeIn_0.8s_ease-out]"
          >
            <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:opacity-0">
              MORE INFORMATION
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out text-white">
              CHECK NOW →
            </span>
          </a>
        )}
      </div>

        {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-6 bg-yellow-400' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero