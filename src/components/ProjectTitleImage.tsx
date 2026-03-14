interface ProjectTitleImageProps {
  src: string
  alt: string
  noFilter?: boolean
}

const ProjectTitleImage = ({ src, alt, noFilter = false }: ProjectTitleImageProps) => {
  return (
    <div className="mx-auto px-6 md:px-16 lg:px-24 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center p-6 border border-white/10">
          <img
            src={src}
            alt={alt}
            className="max-w-full h-auto object-contain"
            style={noFilter ? undefined : { filter: 'brightness(0) invert(1)', opacity: 0.3 }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectTitleImage
