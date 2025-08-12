"use client"

import React from "react"

import { motion, cubicBezier } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import {
  Briefcase,
  ShoppingBag,
  Plane,
  Heart,
  Building2,
  Utensils,
  Landmark,
  Truck,
  Hammer,
  Lightbulb,
  Microscope,
  Smartphone,
  GraduationCap,
  Home,
  Leaf,
} from "lucide-react"

interface Industry {
  name: string
  icon: React.ElementType
  gradient: string
}

// Industries data
const industries: Industry[] = [
  { name: "Finance", icon: Landmark, gradient: "from-blue-500 to-indigo-600" },
  { name: "E-commerce", icon: ShoppingBag, gradient: "from-emerald-500 to-green-600" },
  { name: "Travel", icon: Plane, gradient: "from-cyan-500 to-blue-600" },
  { name: "Health", icon: Heart, gradient: "from-rose-500 to-pink-600" },
  { name: "Business", icon: Briefcase, gradient: "from-violet-500 to-purple-600" },
  { name: "Food & Beverage", icon: Utensils, gradient: "from-amber-500 to-orange-600" },
  { name: "Logistics", icon: Truck, gradient: "from-indigo-500 to-blue-600" },
  { name: "Construction", icon: Hammer, gradient: "from-yellow-500 to-amber-600" },
  { name: "Energy", icon: Lightbulb, gradient: "from-red-500 to-rose-600" },
  { name: "Science & Research", icon: Microscope, gradient: "from-teal-500 to-cyan-600" },
  { name: "Technology", icon: Smartphone, gradient: "from-fuchsia-500 to-purple-600" },
  { name: "Education", icon: GraduationCap, gradient: "from-sky-500 to-blue-600" },
  { name: "Real Estate", icon: Home, gradient: "from-orange-500 to-red-600" },
  { name: "Environment", icon: Leaf, gradient: "from-green-500 to-emerald-600" },
  { name: "Corporate", icon: Building2, gradient: "from-slate-500 to-gray-600" },
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

export default function IndustriesServed() {
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
            Industries We Serve
          </h2>
          <p className={cn("text-base sm:text-lg mb-8 max-w-2xl mx-auto", isDark ? "text-white/50" : "text-black/60")}>
            Our expertise spans across multiple industries, delivering tailored solutions that address unique
            sector-specific challenges.
          </p>
        </motion.div>
      </div>

      {/* Continuous Industry Cards Scroll */}
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

        {/* Industry Cards Track */}
        <div className="flex items-center justify-around">
          <motion.div
            className="flex items-center gap-6 py-4"
            animate={{ x: [0, -2400] }}
            transition={{
              x: {
                duration: 50,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                repeatType: "loop",
              },
            }}
          >
            {/* Double the industries to create seamless loop */}
            {[...industries, ...industries].map((industry, index) => (
              <div
                key={`${industry.name}-${index}`}
                className={cn(
                  "flex-shrink-0 flex flex-col items-center justify-center",
                  "p-4 rounded-xl backdrop-blur-sm",
                  "transition-all duration-300",
                  "hover:shadow-lg",
                  "w-48 h-48 mx-3",
                  isDark
                    ? "border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-black/20"
                    : "border border-black/[0.08] bg-black/[0.03] hover:bg-black/[0.06] hover:border-black/[0.15] hover:shadow-black/10",
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full mb-4 flex items-center justify-center",
                    "bg-gradient-to-br",
                    industry.gradient,
                    "shadow-lg",
                    `shadow-${industry.gradient.split(" ")[0]}/20`,
                  )}
                >
                  {React.createElement(industry.icon, {
                    className: "text-white",
                    size: 24,
                    strokeWidth: 2,
                  })}
                </div>
                <h3 className={cn("font-medium text-lg mb-2", isDark ? "text-white" : "text-black")}>
                  {industry.name}
                </h3>
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-indigo-500/50 to-rose-500/50" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

