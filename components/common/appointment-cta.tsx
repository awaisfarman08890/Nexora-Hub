"use client"

import { motion, cubicBezier } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Calendar } from "lucide-react"
import { useTheme } from "next-themes"

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

export default function AppointmentCTA() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  return (
    <section className={cn("relative py-12 overflow-hidden", isDark ? "bg-[#030303]" : "bg-[#f8f8f8]")}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          width={250}
          height={60}
          rotate={15}
          gradient={isDark ? "from-indigo-500/[0.1]" : "from-indigo-500/[0.05]"}
          className="left-[10%] top-[30%]"
        />

        <ElegantShape
          width={200}
          height={50}
          rotate={-12}
          gradient={isDark ? "from-rose-500/[0.1]" : "from-rose-500/[0.05]"}
          className="right-[10%] top-[40%]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: cubicBezier(0.25, 0.4, 0.25, 1) }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="https://wa.me/923447535644"
            className={cn(
              "group relative",
              "inline-flex items-center gap-3 px-8 py-4 rounded-full",
              "bg-gradient-to-r from-indigo-500 to-rose-500",
              "text-white text-lg font-medium",
              "border border-white/10 shadow-xl shadow-indigo-500/20",
              "transition-all duration-300 ease-out",
              "hover:shadow-2xl hover:shadow-rose-500/30 hover:scale-105",
              "active:scale-95",
            )}
          >
            <Calendar className="w-5 h-5" />
            Book an Appointment
            <span
              className={cn(
                "absolute inset-0 rounded-full",
                "bg-gradient-to-r from-indigo-600/0 via-white/10 to-rose-600/0",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              )}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

