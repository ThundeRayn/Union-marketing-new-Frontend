interface SubHeroProps {
  title: string;
  description?: string;
  url?: string;
  fullScreen?: boolean;
}

const SubHero = ({ title, description, url, fullScreen = true }: SubHeroProps) => {
  return (
    <div 
      className="relative flex items-center justify-center"
      style={{
        height: fullScreen ? 'calc(100vh - 80px)' : '60vh',
        backgroundImage: `url(${url || 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767497882/RenderingA_nvcuji.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Titles with border */}
      <div className="relative z-10 text-center space-y-4 px-4">
        <h1 className="font-serif mx-10 text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-2xl animate-[slideDownFadeIn_0.8s_ease-out]">
          {title}
        </h1>
        {description && (
          <p className="font-light text-lg text-white mb-8 drop-shadow-lg animate-[slideDownFadeIn_0.8s_ease-out]">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SubHero