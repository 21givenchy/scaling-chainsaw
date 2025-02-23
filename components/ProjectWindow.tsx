import RetroWindow from "./RetroWindow"
import Image from "next/image"

interface ProjectWindowProps {
  title: string
  icon: string
  description: string
  tech: string[]
  image: string
}

export default function ProjectWindow({ title, icon, description, tech, image }: ProjectWindowProps) {
  return (
    <RetroWindow title={title}>
      <div className="p-4 space-y-4">
        <div className="flex items-start gap-4">
          <Image src={icon || "/placeholder.svg"} width={48} height={48} alt={title} className="pixelated" />
          <div>
            <p className="font-chicago mb-2">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className="px-2 py-1 bg-[#999999] border border-black text-xs font-chicago rounded">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-2 border-black p-1 bg-white">
          <Image
            src={image || "/placeholder.svg"}
            width={800}
            height={400}
            alt={`${title} screenshot`}
            className="w-full"
          />
        </div>
      </div>
    </RetroWindow>
  )
}

