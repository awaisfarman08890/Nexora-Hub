"use client"

import { useState, useRef, useEffect } from "react"
import { motion, cubicBezier } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

// Define real images for the slider
const images = [
  {
    id: 1,
    alt: "NFT Marketplace Design",
    src: "/images/1.jpg",
    title: "NFT Marketplace",
    description: "Digital art platform with live bidding functionality",
  },
  {
    id: 2,
    alt: "Multi-purpose Website Templates",
    src: "/images/3.jpg",
    title: "Website Templates",
    description: "Collection of responsive designs for various industries",
  },
  {
    id: 3,
    alt: "Digital Agency Website",
    src: "/images/4.jpg",
    title: "Digital Agency",
    description: "Professional web design and development services",
  },
  {
    id: 4,
    alt: "Design Agency Website",
    src: "/images/5.jpg",
    title: "UI/UX Design",
    description: "Modern interface design with pricing plans",
  },
  {
    id: 5,
    alt: "Healthcare Website",
    src: "/images/6.jpg",
    title: "Medical Services",
    description: "Healthcare platform with appointment scheduling",
  },
  {
    id: 6,
    alt: "Real Estate Website",
    src: "/images/7.jpg",
    title: "Property Listings",
    description: "Real estate platform with search functionality",
  },
  {
    id: 7,
    alt: "Real Estate Platform",
    src: "/images/8.jpg",
    title: "Property Finder",
    description: "Find your dream home with advanced filtering",
  },
  {
    id: 8,
    alt: "Design Agency Portfolio",
    src: "/images/10.webp",
    title: "Creative Agency",
    description: "Build your dream website with our design team",
  },
  {
    id: 9,
    alt: "NFT Investment Platform",
    src: "/images/11.webp",
    description: "Start investing in digital art collections",
  },
  {
    id: 10,
    alt: "Fashion E-commerce",
    src: "/images/12.webp",
    description: "Explore the latest trends in clothing and accessories",
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
    <div className={cn("absolute", className)}>
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

export default function ImageSlider() {
  const [isHovering, setIsHovering] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const isDark = theme !== "light"

  // Auto-scroll functionality
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering])

  // Calculate the translation value based on the current index
  const getTranslateX = () => {
    if (!sliderRef.current) return 0
    const slideWidth = sliderRef.current.offsetWidth
    return -currentIndex * slideWidth
  }

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
          width={320}
          height={80}
          rotate={18}
          gradient={isDark ? "from-violet-500/[0.1]" : "from-violet-500/[0.05]"}
          className="left-[15%] top-[10%]"
        />

        <ElegantShape
          width={250}
          height={60}
          rotate={-20}
          gradient={isDark ? "from-amber-500/[0.1]" : "from-amber-500/[0.05]"}
          className="right-[5%] bottom-[15%]"
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
            Our Portfolio
          </h2>
          <p className={cn("text-base sm:text-lg mb-8 max-w-2xl mx-auto", isDark ? "text-white/50" : "text-black/60")}>
            Explore our showcase of stunning website designs and digital experiences. Hover over the slider to pause.
          </p>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Gradient Overlays */}
          <div
            className={cn(
              "absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none",
              "bg-gradient-to-r",
              isDark ? "from-[#030303] to-transparent" : "from-[#f8f8f8] to-transparent",
            )}
          />
          <div
            className={cn(
              "absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none",
              "bg-gradient-to-l",
              isDark ? "from-[#030303] to-transparent" : "from-[#f8f8f8] to-transparent",
            )}
          />

          {/* Slider Container */}
          <div
            className={cn(
              "relative overflow-hidden rounded-xl shadow-xl",
              isDark ? "border border-white/[0.08] shadow-black/20" : "border border-black/[0.08] shadow-black/10",
            )}
          >
            {/* Slider Track */}
            <div
              ref={sliderRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${getTranslateX()}px)` }}
            >
              {images.map((image) => (
                <div key={image.id} className="flex-shrink-0 w-full relative">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      priority={image.id === 1}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white text-xl font-medium mb-2">{image.title}</h3>
                      <p className="text-white/70 text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentIndex === index ? "bg-white w-6" : "bg-white/40 hover:bg-white/60",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Status Indicator */}
          <div
            className={cn(
              "absolute top-4 right-4 backdrop-blur-md rounded-full px-3 py-1 text-xs z-20",
              isDark
                ? "bg-black/50 text-white/80 border border-white/10"
                : "bg-white/50 text-black/80 border border-black/10",
            )}
          >
            {isHovering ? "Paused" : "Auto-playing"} • {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

