interface SubHeroProps {
  title: string;
  description?: string;
  url?: string;
}

const SubHero = ({ title, description, url }: SubHeroProps) => {
  return (
    <div 
      className="relative h-[60vh] flex items-center justify-center mb-12"
      style={{
        backgroundImage: `url(${url || 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767497882/RenderingA_nvcuji.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Titles with border */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white  px-8 py-4 inline-block animate-[slideDownFadeIn_0.8s_ease-out]">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto animate-[slideDownFadeIn_0.8s_ease-out]">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SubHero