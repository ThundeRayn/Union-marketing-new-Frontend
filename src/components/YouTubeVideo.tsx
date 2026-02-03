interface YouTubeVideoProps {
  videoId: string
  title?: string
}

const YouTubeVideo = ({ videoId, title = "Video" }: YouTubeVideoProps) => {
  return (
    <div className="w-full">
      <div className="w-full aspect-video">
        <iframe 
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&controls=1&modestbranding=1`}
          className="w-full h-full"
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen
          title={title}
        />
      </div>
    </div>
  )
}

export default YouTubeVideo
