
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Skeleton } from '@/components/ui/skeleton'

const slides = [
  {
    image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459350/2021_09_28_12_28_44_thomson-c-1024x682-1_ojqhoh.jpg',
    title: 'Advisory & Real Support',
    description: 'Comprehensive support in project planning and execution, including land acquisition, regulatory compliance and tailored development strategies.',
  },
  {
    image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459319/Untitled-design-4_ui8y7s.png',
    title: 'Marketing & Sales Strategy',
    description: 'Tailored marketing and sales strategies for pre-construction low-rise projects, encompassing market analysis, branding, and targeted campaigns for maximum sales effectiveness.',
  },
  {
    image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1773305589/img_2_clzm3k.jpg',
    title: 'Network & Expert CoBuilders',
    description: 'Fostering strategic partnerships with developers and builders, providing insights and support to enhance project viability and success in the pre-construction low-rise market.',
  },
  {
    image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767497882/RenderingA_nvcuji.png',
    title: 'Consult & Market Analysis',
    description: 'In-depth market analysis and consultation services, including demographic studies, pricing strategies, and trend insights for project optimization.',
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [firstImageLoaded, setFirstImageLoaded] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Preload first slide image
  useEffect(() => {
    const img = new Image()
    const markLoaded = () => setFirstImageLoaded(true)
    img.onload = markLoaded
    img.src = slides[0].image
    if (img.complete) {
      setTimeout(markLoaded, 0)
    }
  }, [])

  // Only start carousel after first image is loaded
  useEffect(() => {
    if (!firstImageLoaded) return
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 8000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [firstImageLoaded])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="relative w-full h-screen bg-gray-800">
      {!firstImageLoaded && <Skeleton className="absolute inset-0 rounded-none z-0" />}

      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className={`absolute top-0 left-0 w-full h-full parallax-bg transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <h1
          key={`title-${currentSlide}`}
          className="font-serif mx-10 text-2xl md:text-5xl font-normal text-white mb-4 drop-shadow-2xl animate-[slideDownFadeIn_0.8s_ease-out]"
        >
          {slides[currentSlide].title}
        </h1>
        <p
          key={`desc-${currentSlide}`}
          className="font-light text-sm md:text-lg text-white/70 mb-8 max-w-2xl leading-relaxed drop-shadow-lg animate-[slideDownFadeIn_0.8s_ease-out]"
        >
          {slides[currentSlide].description}
        </p>
        <Link
          key={`button-${currentSlide}`}
          to="/service"
          className="relative border border-yellow-400 text-white px-6 py-3 rounded-lg font-semibold overflow-hidden group inline-block animate-[slideDownFadeIn_0.8s_ease-out]"
        >
          <span className="relative z-10 transition-all duration-300 ease-in-out group-hover:opacity-0">
            VIEW MORE
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out text-white">
            LEARN MORE →
          </span>
        </Link>
      </div>

      {/* Bottom bar: arrows + indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6 md:px-16">
        <div className="flex items-center justify-between md:justify-center md:gap-6">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
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

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
