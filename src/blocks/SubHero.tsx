
interface SubHeroProps {
  title?: string
  description?: string
  backgroundImage?: string
  titleShadow?: boolean
  descriptionShadow?: boolean
}

const SubHero = ({
  title = "Integrity. Excellence. Collaboration.",
  description = "Bridging Visions, Building Futures - Uniting Ontario's Pre-Construction World​",
  backgroundImage = "https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459319/Untitled-design-4_ui8y7s.png",
  titleShadow = false,
  descriptionShadow = false
}: SubHeroProps = {}) => {
  return (
    <div 
      className="relative w-full flex items-center justify-center"
      style={{
        height: 'calc(100vh - 80px)',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Titles with border */}
      <div className="relative z-10 text-center space-y-4 px-4">
        <h1 
          className="font-serif mx-10 text-2xl md:text-4xl font-bold text-yellow-400 mb-4 drop-shadow-2xl animate-[slideDownFadeIn_0.8s_ease-out]"
          style={{ textShadow: titleShadow ? '0 8px 16px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.7)' : 'none' }}
        >
          {title}
        </h1>
        <p 
          className="font-light text-lg text-white mb-8 drop-shadow-lg animate-[slideDownFadeIn_0.8s_ease-out]"
          style={{ textShadow: descriptionShadow ? '0 8px 16px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.7)' : 'none' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default SubHero