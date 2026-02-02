
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
      <div className="relative z-10 text-center space-y-[4vh]">
        <h1 
          className="text-[5vh] lg:text-[7vh] lg:font-serif lg:font-bold font-bold font-serif text-yellow-400 px-[4vw] py-[2vh] inline-block animate-[slideDownFadeIn_0.8s_ease-out]"
          style={{ textShadow: titleShadow ? '0 8px 16px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.7)' : 'none' }}
        >
          {title}
        </h1>
        <h2 
          className="text-[3vh] lg:text-[4vh] font-semibold text-white px-[4vw] py-[1.5vh] inline-block animate-[slideDownFadeIn_0.8s_ease-out_0.2s_backwards]"
          style={{ textShadow: descriptionShadow ? '0 8px 16px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.7)' : 'none' }}
        >
          {description}
        </h2>
      </div>
    </div>
  )
}

export default SubHero