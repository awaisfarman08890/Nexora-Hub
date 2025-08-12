"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, cubicBezier } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ExternalLink, X } from "lucide-react"
import ProjectModal from "./project-modal"
import { useTheme } from "next-themes"

interface Project {
  id: number
  title: string
  category: string
  image: string
  url: string
  description?: string
}

// Project data
const projects: Project[] = [
  {
    id: 10,
    title: "Check Car Inventory",
    category: "Check Car Vin",
    image: "/images/checkcarvin.png",
    url: "https://www.fusionscar.com/",
    description:
      "Fusionscar is an international provider of vehicle histories with the goal of making the used car market more transparent and our roads safer worldwide",
  },
  {
    id: 11,
    title: "Professional Truck Dispatch Services",
    category: "Trucking",
    image: "/images/truck.png",
    url: "https://smenterprises.us/",
    description:
      "SME Enterprises is a company that provides services to the trucking industry",
  },
  {
    id: 1,
    title: "Nexus Listings",
    category: "Marketing Platform",
    image: "/images/project1.jpg",
    url: "/",
    description:
      "A comprehensive marketing platform that helps businesses find new listing opportunities and connect with potential clients through an engaging interface.",
  },
  {
    id: 2,
    title: "Omnimatic",
    category: "Healthcare Platform",
    image: "/images/project2.jpg",
    url: "/projects/omnimatic",
    description:
      "A telemedicine platform with a modern gradient theme and interactive elements that showcase the company's innovative approach to healthcare technology.",
  },
  {
    id: 3,
    title: "Bluenet Digital",
    category: "Crypto Trading",
    image: "/images/project3.jpg",
    url: "/projects/bluenet-digital",
    description:
      "A crypto trading platform featuring bold typography, dark theme, and a clean layout that highlights algorithmic trading strategies.",
  },
  {
    id: 4,
    title: "Retrix Solutions",
    category: "Fitness & Wellness",
    image: "/images/project4.jpg",
    url: "/projects/retrix-solutions",
    description:
      "A fitness platform with an intuitive interface designed for personal training clients, featuring clear service offerings and membership options.",
  },
  {
    id: 5,
    title: "American Spirits",
    category: "Gym & Wellness",
    image: "/images/project5.jpg",
    url: "/",
    description:
      "A gym and wellness center website featuring virtual training, pricing packages, and fitness calculators with a sleek dark theme.",
  },
  {
    id: 6,
    title: "Cloudvista",
    category: "Task Management",
    image: "/images/project6.jpg",
    url: "/",
    description:
      "A workflow management SaaS with a clean, modern interface that helps teams optimize their daily tasks and workflows.",
  },
  {
    id: 7,
    title: "Fintech Dashboard",
    category: "Mobile Connectivity",
    image: "/images/project7.jpg",
    url: "/",
    description:
      "A mobile connectivity platform that provides real-time analytics and insights for telecommunications professionals.",
  },
  {
    id: 8,
    title: "EcoStore",
    category: "Solar Energy",
    image: "/images/project8.jpg",
    url: "/",
    description:
      "A solar panel and energy system provider website with a professional design, showcasing services and customer projects.",
  },
  {
    id: 8,
    title: "EcoStore",
    category: "Solar Energy",
    image: "/images/15.jpg",
    url: "/",
    description:
      "A solar panel and energy system provider website with a professional design, showcasing services and customer projects.",
  },
  {
    id: 8,
    title: "EcoStore",
    category: "Solar Energy",
    image: "/images/16.jpg",
    url: "/",
    description:
      "A solar panel and energy system provider website with a professional design, showcasing services and customer projects.",
  },
]

function ElegantShape({
  className,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  return (
    <div className={cn("absolute", className)} id="projects">
      <div
        style={{
          width,
          height,
          transform: `rotate(${rotate}deg)`,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            isDark
              ? "backdrop-blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
              : "backdrop-blur-[2px] border-2 border-black/[0.15] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)]",
            isDark
              ? "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
              : "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]",
          )}
        />
      </div>
    </div>
  )
}

export default function RecentProjects() {
  const [modalOpen, setModalOpen] = useState(false)
  const { theme } = useTheme()
  const isDark = theme !== "light"

  // const openProjectModal = (projectId: number) => {
  //   setSelectedProjectId(projectId)
  //   setModalOpen(true)
  // }

  return (
    <section className={cn("relative py-20 overflow-hidden", isDark ? "bg-[#030303]" : "bg-[#f8f8f8]")}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute inset-0 blur-3xl",
            isDark
              ? "bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]"
              : "bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]",
          )}
        />

        <ElegantShape
          width={400}
          height={100}
          rotate={-15}
          gradient={isDark ? "from-indigo-500/[0.1]" : "from-indigo-500/[0.05]"}
          className="left-[-5%] top-[10%]"
        />

        <ElegantShape
          width={300}
          height={80}
          rotate={12}
          gradient={isDark ? "from-rose-500/[0.1]" : "from-rose-500/[0.05]"}
          className="right-[-2%] bottom-[15%]"
        />

        <ElegantShape
          width={200}
          height={50}
          rotate={-8}
          gradient={isDark ? "from-amber-500/[0.1]" : "from-amber-500/[0.05]"}
          className="left-[20%] bottom-[5%]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: cubicBezier(0.25, 0.4, 0.25, 1) }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight",
              "bg-clip-text text-transparent",
              isDark ? "bg-gradient-to-r from-white to-white/80" : "bg-gradient-to-r from-black to-black/80",
            )}
          >
            Our Recent Projects
          </h2>
          <p className={cn("text-base sm:text-lg mb-8 max-w-2xl mx-auto", isDark ? "text-white/50" : "text-black/60")}>
            Explore our portfolio of successful projects that showcase our expertise in creating stunning digital
            experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projects={projects}
        initialProjectId={10}
      />
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [showViewButton, setShowViewButton] = useState(true)
  const imageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isDark = theme !== "light"

  // Handle hover effect for image scrolling
  useEffect(() => {
    if (!imageRef.current || isExpanded) return

    if (isHovered) {
      imageRef.current.style.transform = "translateY(calc(-100% + 450px))"
    } else {
      imageRef.current.style.transform = "translateY(0)"
    }
  }, [isHovered, isExpanded])

  // Handle click to expand image
  const handleCardClick = () => {
    setIsExpanded(!isExpanded)
    setShowViewButton(false)

    if (imageRef.current) {
      // Reset to top position when expanding
      if (!isExpanded) {
        imageRef.current.style.transform = "translateY(0)"
      }
    }
  }

  // Handle view details button click
  const handleViewDetails = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent card click
    if (project.id === 10 || project.id === 11) {
      window.open(project.url, "_blank")
    } else {
      window.open("/", "_blank")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group"
    >
      <div
        ref={cardRef}
        className={cn(
          "relative overflow-hidden rounded-xl",
          "backdrop-blur-sm",
          "transition-all duration-500",
          "hover:shadow-lg",
          isExpanded ? "h-[900px]" : "h-[450px]", // Expand to full height on click
          isExpanded ? "cursor-zoom-out" : "cursor-pointer",
          isDark
            ? "border border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15] hover:shadow-black/20"
            : "border border-black/[0.08] bg-black/[0.02] hover:border-black/[0.15] hover:shadow-black/10",
        )}
        onClick={handleCardClick}
        onMouseEnter={() => !isExpanded && setIsHovered(true)}
        onMouseLeave={() => !isExpanded && setIsHovered(false)}
      >
        {/* Project Image with Scroll Effect */}
        <div
          ref={imageRef}
          className={cn(
            "relative w-full h-[900px]",
            isExpanded ? "transition-none" : "transition-transform duration-[4s] ease-linear",
          )}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        </div>

        {/* Overlay that appears on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "flex flex-col justify-end p-6",
            isDark ? "from-black/90 via-black/50 to-transparent" : "from-black/80 via-black/40 to-transparent",
          )}
        >
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className={cn("text-sm font-medium mb-2", isDark ? "text-white/70" : "text-white/90")}>
              {project.category}
            </div>
            <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
            {showViewButton && (
              <button
                onClick={handleViewDetails}
                className="flex items-center text-white/80 text-sm hover:text-white transition-colors"
              >
                {(project.id === 10 || project.id === 11) ? "Visit Website" : "View Profile"} <ExternalLink className="ml-2 w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Close button for expanded view */}
        {isExpanded && (
          <button
            className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setIsExpanded(false)
            }}
          >
            <X className="w-5 h-5" />
          </button>
        )}

      </div>
    </motion.div>
  )
}

