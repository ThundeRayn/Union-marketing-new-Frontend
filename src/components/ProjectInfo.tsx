interface ProjectInfoProps {
  type: string
  location: string
}

const ProjectInfo = ({ type, location }: ProjectInfoProps) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Project Type</h3>
          <p className="text-2xl font-semibold text-black">{type}</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-400">
          <h3 className="text-lg font-bold text-gray-700 mb-2">Location</h3>
          <p className="text-2xl font-semibold text-black">{location}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo
