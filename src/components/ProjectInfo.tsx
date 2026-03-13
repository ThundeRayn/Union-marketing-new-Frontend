interface ProjectInfoProps {
  type: string
  location: string
}

const ProjectInfo = ({ type, location }: ProjectInfoProps) => {
  return (
    <div className="mx-auto px-6 md:px-16 lg:px-24 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="bg-(--color-secondary-light) p-6 rounded-lg border-l-4 border-(--color-primary)">
          <h3 className="text-lg font-bold text-white/60 mb-2">Project Type</h3>
          <p className="text-2xl font-semibold text-white">{type}</p>
        </div>
        <div className="bg-(--color-secondary-light) p-6 rounded-lg border-l-4 border-(--color-primary)">
          <h3 className="text-lg font-bold text-white/60 mb-2">Location</h3>
          <p className="text-2xl font-semibold text-white">{location}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo
