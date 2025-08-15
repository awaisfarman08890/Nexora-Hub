"use client"

import { motion, cubicBezier } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"

// Define real company logos
const logos = [
  {
    id: 1,
    name: "Omnihub Connect",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-6hAQ3cV7wLFD0rwhTHZcE42zHU8Y93.webp",
  },
  {
    id: 2,
    name: "PBL",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-7EQF8sN3Xw51tC2AIaA7QpWFmI6Qqg.webp",
  },
  {
    id: 3,
    name: "Hexagon",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-wstXMeH4hZlDqqejt6zZU30EyTlkBD.webp",
  },
  {
    id: 4,
    name: "Leotech",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-6uPnY5qdn7s81it1CPdt89Hu0vSedL.webp",
  },
  {
    id: 5,
    name: "RN Home Buyers",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-qwcjQf3GObnKrtCoklWi3rzUxinvsO.webp",
  },
  {
    id: 6,
    name: "Focali",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-yW6vheKX1t0HRW2uTHLx2T8FER7X1v.webp",
  },
  {
    id: 7,
    name: "Gold Lion Technologies",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-ZNyMLTBwheB6A3mKQCATgxvYzHLCww.webp",
  },
  {
    id: 8,
    name: "Wire Consultancy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-UaX6wBdLsO7Hy86RRInAMXP4O2DRrd.webp",
  },
  { id: 9, name: "Nexora Hub", logo: "/logo/1.webp" },
  {
    id: 10,
    name: "Blacksmith",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-b2rJM152giuf5hdicHTlx8ru4XP8mG.webp",
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

export default function TrustedBySection() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

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
          width={350}
          height={90}
          rotate={-12}
          gradient={isDark ? "from-indigo-500/[0.1]" : "from-indigo-500/[0.05]"}
          className="left-[5%] top-[15%]"
        />

        <ElegantShape
          width={280}
          height={70}
          rotate={15}
          gradient={isDark ? "from-rose-500/[0.1]" : "from-rose-500/[0.05]"}
          className="right-[10%] bottom-[20%]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* CTA Content */}
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
            Ready to transform your digital presence?
          </h2>
          <p className={cn("text-base sm:text-lg mb-8 max-w-2xl mx-auto", isDark ? "text-white/50" : "text-black/60")}>
            Join thousands of businesses that have already elevated their digital experience with our innovative
            solutions.
          </p>
          <Link
            href="https://calendly.com/trevomedia5"
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full",
              "bg-gradient-to-r from-indigo-500 to-rose-500",
              "text-white text-base font-medium",
              "hover:from-indigo-600 hover:to-rose-600 transition-all duration-300",
              "border border-white/10 shadow-lg shadow-indigo-500/20",
            )}
          >
            Get Started Today <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          <h3
            className={cn(
              "text-sm uppercase tracking-widest font-medium mb-8",
              isDark ? "text-white/60" : "text-black/60",
            )}
          >
            Trusted by innovative companies
          </h3>
        </motion.div>

        {/* Continuous Logo Scroll */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays */}
          <div
            className={cn(
              "absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none",
              "bg-gradient-to-r",
              isDark ? "from-[#030303] to-transparent" : "from-[#f8f8f8] to-transparent",
            )}
          />
          <div
            className={cn(
              "absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none",
              "bg-gradient-to-l",
              isDark ? "from-[#030303] to-transparent" : "from-[#f8f8f8] to-transparent",
            )}
          />

          {/* First Logo Track */}
          <div className="flex items-center justify-around">
            <motion.div
              className="flex items-center gap-16 py-4"
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  duration: 40,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {/* Double the logos to create seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className={cn(
                    "flex-shrink-0 h-12 w-32 flex items-center justify-center mx-4 rounded-md px-4 py-2",
                    isDark
                      ? "bg-white/[0.03] border border-white/[0.08]"
                      : "bg-black/[0.03] border border-black/[0.08]",
                  )}
                >
                  <Image
                    src={logo.logo || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className={cn(
                      "transition-opacity duration-300 grayscale hover:grayscale-0",
                      isDark ? "opacity-60 hover:opacity-100" : "opacity-70 hover:opacity-100",
                    )}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Logo Track (Reverse Direction) */}
          <div className="flex items-center justify-around mt-8">
            <motion.div
              className="flex items-center gap-16 py-4"
              animate={{ x: [-1920, 0] }}
              transition={{
                x: {
                  duration: 50,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {/* Double the logos to create seamless loop */}
              {[...logos, ...logos].reverse().map((logo, index) => (
                <div
                  key={`${logo.id}-reverse-${index}`}
                  className={cn(
                    "flex-shrink-0 h-12 w-32 flex items-center justify-center mx-4 rounded-md px-4 py-2",
                    isDark
                      ? "bg-white/[0.03] border border-white/[0.08]"
                      : "bg-black/[0.03] border border-black/[0.08]",
                  )}
                >
                  <Image
                    src={logo.logo || "/placeholder.svg"}
                    alt={logo.name}
                    width={120}
                    height={40}
                    className={cn(
                      "transition-opacity duration-300 grayscale hover:grayscale-0",
                      isDark ? "opacity-60 hover:opacity-100" : "opacity-70 hover:opacity-100",
                    )}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

