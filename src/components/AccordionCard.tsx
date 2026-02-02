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
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-18 p-8 px-12">
        {/* Left Section */}
        <div className="flex flex-col justify-between">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              {shortDescription}
            </p>
          </div>

          {/* Accordion Items */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-6 py-4 rounded-lg transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-yellow-400 text-black font-semibold'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {item.subtitle}
              </button>
            ))}
          </div>

          {/* Description */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              {items[activeIndex].description}
            </p>
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
