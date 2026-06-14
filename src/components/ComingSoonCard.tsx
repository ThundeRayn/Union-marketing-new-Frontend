import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/Toast';

interface ComingSoonCardProps {
  title: string;
  type: string;
  coverImage: string;
  mobileCoverImage?: string;
  ratio?: string;
}

const ComingSoonCard = ({ title, type, coverImage, mobileCoverImage, ratio = '4/3' }: ComingSoonCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const { showToast } = useToast();

  return (
    <div className="block relative overflow-hidden bg-black cursor-pointer" onClick={showToast}>
      <div className="relative w-full overflow-hidden project-card-ratio" style={{ '--card-ratio': ratio } as React.CSSProperties}>
        {!loaded && <Skeleton className="absolute inset-0 rounded-none z-1" />}
        <div className="absolute inset-0">
          <picture>
            {mobileCoverImage && <source media="(max-width: 767px)" srcSet={mobileCoverImage} />}
            <img
              src={coverImage}
              alt={title}
              onLoad={() => setLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </picture>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/20" />
        </div>

        {/* Coming Soon badge — top left */}
        <div className={`absolute top-5 left-5 z-10 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <span
            className="inline-block px-4 py-1.5 text-[11px] tracking-[0.25em] uppercase border border-(--color-primary) text-(--color-primary)"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Coming Soon
          </span>
        </div>

        {/* Bottom text: type + title (no address) */}
        <div className={`absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <p
            className="text-[10px] tracking-[0.15em] uppercase text-(--color-primary) mb-1"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            {type}
          </p>
          <h2
            className="text-lg font-normal text-white"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonCard;
