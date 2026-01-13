
const SubHero = () => {
  return (
    <div 
      className="relative w-full h-[500px] flex items-start justify-center pt-20"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767459319/Untitled-design-4_ui8y7s.png)',
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
          style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.7)' }}
        >
          Integrity. 
          Excellence. 
          Collaboration.
        </h1>
        <h2 
          className="text-[3vh] lg:text-[4vh] font-semibold text-white px-[4vw] py-[1.5vh] inline-block animate-[slideDownFadeIn_0.8s_ease-out_0.2s_backwards]"
          style={{ textShadow: '0 8px 16px rgba(0, 0, 0, 0.5), 0 4px 8px rgba(0, 0, 0, 0.7)' }}
        >
          Bridging Visions, Building Futures - Uniting Ontario's Pre-Construction World​
        </h2>
      </div>
    </div>
  )
}

export default SubHero