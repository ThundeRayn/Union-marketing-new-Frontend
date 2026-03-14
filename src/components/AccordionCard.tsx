import { useState } from 'react'

interface AccordionItem {
  subtitle: string
  description: string
}

interface AccordionCardProps {
  title: string
  shortDescription: string
  items: AccordionItem[]
  imageUrl: string
  imageAlt?: string
}

const AccordionCard = ({
  title,
  shortDescription,
  items,
  imageUrl,
  imageAlt = 'Card Image'
}: AccordionCardProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="bg-(--color-secondary) rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18 p-8 px-12">
        {/* Left Section */}
        <div className="flex flex-col justify-between">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-(family-name:--font-heading) text-3xl md:text-5xl font-normal text-white mb-6">
              {title}
            </h2>
            <p className="font-(family-name:--font-body) text-white/50 text-sm leading-relaxed">
              {shortDescription}
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleAccordion(index)}
                  onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
                  className={`font-(family-name:--font-body) w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-(--color-primary) text-black font-semibold'
                      : 'bg-white/10 text-white/80 hover:bg-white/15'
                  }`}
                >
                  {item.subtitle}
                </button>

                {/* Expanded Description */}
                {activeIndex === index && (
                  <div className="mt-2 p-4 bg-white/5 rounded-lg border border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="font-(family-name:--font-body) text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex items-center justify-center">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  )
}

export default AccordionCard
