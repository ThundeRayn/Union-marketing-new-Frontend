import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useMediaLoaded } from '@/hooks/useMediaLoaded';

interface PictureRenderProps {
  title: string;
  pictures: string[];
}

const PictureRender = ({ title, pictures }: PictureRenderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);
  const currentImageLoaded = useMediaLoaded(pictures[currentIndex]);
  const isMounted = useRef(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pictures.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useLayoutEffect(() => {
    isMounted.current = false;
  }, []);

  // Scroll active thumbnail into view on mobile — skip initial mount
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (thumbnailContainerRef.current) {
      const activeButton = thumbnailContainerRef.current.querySelector('button[data-active="true"]') as HTMLElement;
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [currentIndex]);

  if (!pictures || pictures.length === 0) {
    return (
      <div className="w-full h-[50vh] md:h-screen flex items-center justify-center">
        <div className="text-center">
          <h2
            className="text-xs tracking-[0.2em] uppercase text-(--color-primary) mb-4"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            {title}
          </h2>
          <p className="text-white/40">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[50vh] md:h-screen overflow-hidden">
      {/* Structural skeleton matching PictureRender layout */}
      {!currentImageLoaded && (
        <>
          <Skeleton className="absolute inset-0 rounded-none z-0" />
          {/* Title position */}
          <div className="absolute top-8 left-0 right-0 z-1 px-6 md:px-16 lg:px-24 pointer-events-none">
            <Skeleton className="h-3 w-24" />
          </div>
          {/* Bottom controls: counter + thumbnails */}
          <div className="absolute bottom-0 left-0 right-0 z-1 px-6 md:px-16 lg:px-24 pb-6 pointer-events-none">
            <Skeleton className="h-3 w-12 mb-4" />
            <div className="flex gap-1 md:gap-2">
              {pictures.slice(0, 5).map((_, i) => (
                <Skeleton key={i} className="shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-none" />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Parallax Background Image */}
      <div
        className={`absolute inset-0 w-full h-full parallax-bg transition-opacity duration-700 ${currentImageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${pictures[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Title */}
      <div className="absolute top-8 left-0 right-0 z-10 px-6 md:px-16 lg:px-24">
        <p
          className="text-xs tracking-[0.2em] uppercase text-(--color-primary) drop-shadow-lg"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          {title}
        </p>
      </div>

      {/* Navigation Arrows */}
      {pictures.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-linear-to-t from-black/70 to-transparent pt-16 pb-6 px-6 md:px-16 lg:px-24">
        {/* Image Counter */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="text-xs tracking-[0.15em] text-white/60"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            {currentIndex + 1} / {pictures.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {pictures.length > 1 && (
          <div ref={thumbnailContainerRef} className="flex gap-1 md:gap-2 overflow-x-auto pb-2 scroll-smooth">
            {pictures.map((picture, index) => (
              <button
                key={index}
                data-active={index === currentIndex}
                onClick={() => goToSlide(index)}
                className={`shrink-0 w-14 h-14 md:w-20 md:h-20 overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-(--color-primary) scale-105'
                    : 'border-white/20 hover:border-white/40 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={picture}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PictureRender;
