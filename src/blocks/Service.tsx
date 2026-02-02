
import AccordionCard from '@/components/AccordionCard'

const Service = () => {
  const servicesData1 = [
    {
      subtitle: "Demographic Studies",
      description: "Analyzing target demographics to align project offerings with market needs."
    },
    {
      subtitle: "Competitive Analysis",
      description: "Assessing market competition to identify unique selling propositions and market gaps."
    },
    {
      subtitle: "Marketing Insights",
      description: "Delivering comprehensive market research and insights to inform project development and positioning."
    }
  ]

  const servicesData2 = [
    {
      subtitle: "Land Acquisition",
      description: "Offering expert advice on strategic land purchases and site selection."
    },
    {
      subtitle: "Regulatory Compliance",
      description: "Navigating legal and regulatory requirements for smooth project development."
    },
    {
      subtitle: "Builder Focus",
      description: "Partnering with architects and designers to ensure projects meet market expectations and aesthetic standards."
    }
  ]

  const servicesData3 = [
    {
      subtitle: "Branding & Promotion",
      description: "Creating compelling branding and promotional campaigns tailored to target audiences."
    },
    {
      subtitle: "Digital Marketing",
      description: "Implementing online marketing tactics to maximize reach and engagement."
    },
    {
      subtitle: "Sales Development",
      description: "Establishing and optimizing various sales channels, including broker networks and direct sales."
    }
  ]

  const servicesData4 = [
    {
      subtitle: "Investor Engagement",
      description: "Strengthening relationships with investors through regular updates and tailored communication."
    },
    {
      subtitle: "Builder Partnership Support",
      description: "Collaborating with builders to ensure project specifications and timelines are met."
    },
    {
      subtitle: "Stakeholder Coordination",
      description: "Facilitating effective communication and coordination among all project stakeholders."
    }
  ]

  return (
    <div className="py-20 px-4 md:px-14 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Service Card 1 */}
        <AccordionCard
          title="Strategic Market Analysis"
          shortDescription="This service encompasses a comprehensive approach to understanding and interpreting market dynamics to inform and guide real estate projects. It involves:"
          items={servicesData1}
          imageUrl="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281404/Untitled-design_z0zzrk.png"
          imageAlt="Strategic Market Analysis"
        />

        {/* Service Card 2 */}
        <AccordionCard
          title="Planning &Marketing"
          shortDescription="This service offers expert guidance and support throughout the project development process, including:"
          items={servicesData2}
          imageUrl="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281398/Untitled-design-1_uucu7z.png"
          imageAlt="Planning & Marketing"
        />

        
        {/* Service Card 3 */}
        <AccordionCard
          title="Integrated Marketing & Sales Solutions"
          shortDescription="A comprehensive suite of services designed to effectively market and sell real estate projects:"
          items={servicesData3}
          imageUrl="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281410/Untitled-design-3_llkzqd.png"
          imageAlt="Integrated Marketing & Sales Solutions"
        />

        
        {/* Service Card 4 */}
        <AccordionCard
          title="Builder Relationship Management"
          shortDescription="Focused on maintaining and strengthening relationships with key project stakeholders:"
          items={servicesData4}
          imageUrl="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768281416/Untitled-design-2_ftiwxs.png"
          imageAlt="Builder Relationship Management"
        />
      </div>
    </div>
  )
}

export default Service