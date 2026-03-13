import { Button } from "@/components/ui/button"

export interface ProjectButton {
  id: number
  label: string
  link?: string
  target?: string
  onClick?: () => void
}

interface ProjectButtonListProps {
  buttons: ProjectButton[]
}

const ProjectButtonList = ({ buttons }: ProjectButtonListProps) => {
  return (
    <div className="flex flex-col space-y-4">
      {buttons.map((button) => (
        <Button
          key={button.id}
          variant="price"
          size="union"
          asChild={!button.onClick}
          onClick={button.onClick}
        >
          {button.onClick ? (
            <span>{button.label}</span>
          ) : (
            <a href={button.link} target={button.target} rel={button.target === '_blank' ? 'noopener noreferrer' : undefined}>
              {button.label}
            </a>
          )}
        </Button>
      ))}
    </div>
  )
}

export default ProjectButtonList
