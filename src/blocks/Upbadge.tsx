interface SubHeroProps {
  title: string;
  description?: string;
  url?: string;
  fullScreen?: boolean;
  iconImage?: string;
}

const SubHero = ({ title, description, url, fullScreen = true, iconImage }: SubHeroProps) => {
  return (
    <div
      className="relative flex items-center justify-center parallax-bg"
      style={{
        height: fullScreen ? 'calc(100vh - 80px)' : '60vh',
        backgroundImage: `url(${url || 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1767497882/RenderingA_nvcuji.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {iconImage ? (
        <div className="relative z-10 flex items-center justify-center px-4 w-full">
          <div className="max-w-[240px] sm:max-w-sm md:max-w-md w-full mx-auto">
            <img
              src={iconImage}
              alt={title}
              className="max-h-[40vh] max-w-full object-contain drop-shadow-2xl animate-[iconReveal_1.5s_ease-out_forwards] mx-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
      ) : (
        <div className="relative z-10 text-center space-y-4 px-4">
          <h1 className="font-serif mx-10 text-2xl md:text-5xl font-normal text-white mb-4 drop-shadow-2xl animate-[slideDownFadeIn_0.8s_ease-out]">
            {title}
          </h1>
          {description && (
            <p className="font-light text-lg text-white mb-8 drop-shadow-lg animate-[slideDownFadeIn_0.8s_ease-out]">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default SubHero
