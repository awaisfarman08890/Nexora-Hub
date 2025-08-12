"use client"
import { X } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface Project {
  id: number
  title: string
  category: string
  image: string
  url: string
  description?: string
}

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  projects: Project[]
  initialProjectId: number
}

export default function ProjectModal({ isOpen, onClose, projects, initialProjectId }: ProjectModalProps) {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const project = projects.find((p) => p.id === initialProjectId)

  if (!project || !isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div
          className={cn(
            "w-full max-w-3xl transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all relative",
            isDark ? "bg-[#030303]" : "bg-[#f8f8f8]",
          )}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={cn(
              "absolute top-4 right-4 transition-colors duration-200",
              isDark ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black",
            )}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-6">
            {/* Project Image */}
            <div className="relative w-full h-80 rounded-xl overflow-hidden mb-4">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>

            {/* Project Details */}
            <h3 className={cn("text-2xl font-semibold leading-tight mb-2", isDark ? "text-white" : "text-black")}>
              {project.title}
            </h3>
            <div className={cn("text-sm font-medium mb-3", isDark ? "text-white/60" : "text-black/60")}>
              {project.category}
            </div>
            <p className={cn("text-base", isDark ? "text-white/50" : "text-black/60")}>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

