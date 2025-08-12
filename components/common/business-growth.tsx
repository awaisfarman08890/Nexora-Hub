"use client"

import React from "react"

import { motion, cubicBezier, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { LineChart, Users, Zap, HeadphonesIcon, TrendingUp, Rocket } from 'lucide-react'
import { useTheme } from "next-themes"

interface GrowthCard {
  icon: React.ElementType
  title: string
  description: string
  gradient: string
}

const growthCards: GrowthCard[] = [
  {
    icon: LineChart,
    title: "Conversion-Focused Design",
    description:
      "Our designs are strategically crafted to guide visitors toward conversion, with clear CTAs and optimized user journeys that drive results.",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Loved by Users",
    description:
      "We create intuitive, engaging experiences that users love, resulting in longer session times, lower bounce rates, and higher satisfaction.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Zap,
    title: "Automation Expert",
    description:
      "Streamline your operations with our custom automation solutions that save time, reduce errors, and allow your team to focus on growth.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description:
      "Our dedicated support team is always ready to assist with any questions or issues, ensuring your digital presence runs smoothly.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Designed for Growth",
    description:
      "Scalable solutions built to grow with your business, from startup phase to enterprise level, without the need for complete rebuilds.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Rocket,
    title: "Connect Fast, Start Fast",
    description:
      "Quick implementation and onboarding processes get your solutions up and running rapidly, so you can start seeing results sooner.",
    gradient: "from-cyan-500 to-teal-600",
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
              : "after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"
          )}
        />
      </div>
    </div>
  )
}

export default function BusinessGrowth() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 + i * 0.05,
        ease: cubicBezier(0.25, 0.4, 0.25, 1),
      },
    }),
  }

  return (
    <section className={cn(
      "relative py-20 overflow-hidden",
      isDark ? "bg-[#030303]" : "bg-[#f8f8f8]"
    )}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute inset-0 blur-3xl",
          isDark 
            ? "bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" 
            : "bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]"
        )} />

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
          <h2 className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight",
            "bg-clip-text text-transparent",
            isDark 
              ? "bg-gradient-to-r from-white to-white/80" 
              : "bg-gradient-to-r from-black to-black/80"
          )}>
            Experience Transformative Business Growth with <span className="text-indigo-500">Nexora Hub</span>
          </h2>
          <p className={cn(
            "text-base sm:text-lg mb-8 max-w-2xl mx-auto",
            isDark ? "text-white/50" : "text-black/60"
          )}>
            We combine cutting-edge technology with strategic design to deliver solutions that drive measurable business
            results.
          </p>
        </motion.div>

        {/* Growth Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {growthCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div
                className={cn(
                  "h-full p-6 md:p-8 rounded-2xl border backdrop-blur-sm",
                  "transition-all duration-300",
                  "hover:shadow-lg flex flex-col",
                  isDark 
                    ? "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-black/20" 
                    : "border-black/[0.08] bg-black/[0.02] hover:bg-black/[0.04] hover:border-black/[0.15] hover:shadow-black/10"
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl mb-6 flex items-center justify-center",
                    "bg-gradient-to-br",
                    card.gradient,
                    "shadow-lg",
                    `shadow-${card.gradient.split(" ")[0]}/20`,
                  )}
                >
                  {React.createElement(card.icon, {
                    className: "text-white",
                    size: 24,
                    strokeWidth: 2,
                  })}
                </div>

                {/* Content */}
                <h3 className={cn(
                  "text-xl font-semibold mb-3",
                  isDark 
                    ? "text-white group-hover:text-white/90" 
                    : "text-black group-hover:text-black/90"
                )}>
                  {card.title}
                </h3>
                <p className={cn(
                  "text-sm leading-relaxed mb-4 flex-grow",
                  isDark 
                    ? "text-white/50 group-hover:text-white/60" 
                    : "text-black/60 group-hover:text-black/70"
                )}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
