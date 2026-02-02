import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface FloorPlan {
  id: string
  label: string
  link: string
  target?: string
}

interface FloorPlanSelectorProps {
  doubleGaragePlans: FloorPlan[]
  singleGaragePlans: FloorPlan[]
}

const FloorPlanSelector = ({ doubleGaragePlans, singleGaragePlans }: FloorPlanSelectorProps) => {
  const [layoutType, setLayoutType] = useState<'double' | 'single'>('double')

  return (
    <div>
      {/* Layout Type Switch */}
      <div className="flex justify-center gap-8 mb-8">
        <h3
          onClick={() => setLayoutType('double')}
          className={`text-2xl font-semibold cursor-pointer transition-all duration-300 ${
            layoutType === 'double'
              ? 'text-black border-b-4 border-yellow-400 pb-2'
              : 'text-gray-400 hover:text-gray-600 pb-2'
          }`}
        >
          Double Garage
        </h3>
        <h3
          onClick={() => setLayoutType('single')}
          className={`text-2xl font-semibold cursor-pointer transition-all duration-300 ${
            layoutType === 'single'
              ? 'text-black border-b-4 border-yellow-400 pb-2'
              : 'text-gray-400 hover:text-gray-600 pb-2'
          }`}
        >
          Single Garage
        </h3>
      </div>

      {/* Floor Plan Buttons */}
      <div className="flex flex-col space-y-4 max-w-md mx-auto">
        {(layoutType === 'double' ? doubleGaragePlans : singleGaragePlans).map((plan) => (
          <Button
            key={plan.id}
            variant="price"
            size="union"
            asChild
          >
            <a href={plan.link} target="_blank" rel="noopener noreferrer">
              {plan.label}
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default FloorPlanSelector
