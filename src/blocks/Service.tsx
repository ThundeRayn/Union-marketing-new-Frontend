
import AccordionCard from '@/components/AccordionCard'

const Service = () => {
  const servicesData1 = [
    {
      subtitle: "Market Analysis",
      description: "Comprehensive market research and competitive analysis to identify opportunities and positioning strategies for your pre-construction projects in Ontario."
    },
    {
      subtitle: "Strategic Planning",
      description: "Develop tailored strategies that align with your project goals, timeline, and target demographics for maximum market impact."
    },
    {
      subtitle: "Implementation",
      description: "Execute plans with precision, managing all marketing initiatives and ensuring consistent brand messaging across all channels."
    }
  ]

  const servicesData2 = [
    {
      subtitle: "Client Relationship",
      description: "Build and maintain strong relationships with developers, builders, and buyers through transparent communication and personalized service."
    },
    {
      subtitle: "Expert Consultation",
      description: "Provide specialized insights and expert guidance on market trends, pricing strategies, and development opportunities."
    },
    {
      subtitle: "Project Support",
      description: "Ongoing support throughout the entire project lifecycle, from pre-construction planning to final delivery and beyond."
    }
  ]

  return (
    <div className="py-20 px-4 md:px-14 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Service Card 1 */}
        <AccordionCard
          title="Marketing & Sales Strategy"
          shortDescription="Tailored marketing and sales strategies for pre-construction low-rise projects, encompassing market analysis, branding, and targeted campaigns."
          items={servicesData1}
          imageUrl="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281404/Untitled-design_z0zzrk.png"
          imageAlt="Marketing Strategy"
        />

        {/* Service Card 2 */}
        <AccordionCard
          title="Advisory & Expert Support"
          shortDescription="Comprehensive support in project planning and execution, providing strategic partnerships and expert insights for enhanced project viability."
          items={servicesData2}
          imageUrl="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281398/Untitled-design-1_uucu7z.png"
          imageAlt="Advisory Support"
        />
      </div>
    </div>
  )
}

export default Service