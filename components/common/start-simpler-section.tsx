"use client"

import type React from "react"

import { motion, cubicBezier, type Variants } from "framer-motion"
import { Calendar, Rocket, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface CardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function Card({ icon, title, description, delay }: CardProps) {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.3 + delay * 0.2,
        ease: cubicBezier(0.25, 0.4, 0.25, 1),
      }}
      className={cn(
        "relative p-6 rounded-2xl backdrop-blur-sm",
        isDark ? "bg-white/[0.03] border border-white/[0.08]" : "bg-black/[0.03] border border-black/[0.08]",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-50 bg-gradient-to-br",
          isDark ? "from-white/[0.05] to-transparent" : "from-black/[0.03] to-transparent",
        )}
      />
      <div className="relative z-10">
        <div
          className={cn(
            "w-12 h-12 flex items-center justify-center rounded-full mb-5",
            "bg-gradient-to-br",
            isDark ? "from-indigo-500/20 to-rose-500/20" : "from-indigo-500/10 to-rose-500/10",
          )}
        >
          <div className={isDark ? "text-white/80" : "text-black/80"}>{icon}</div>
        </div>
        <h3 className={cn("text-xl font-semibold mb-3", isDark ? "text-white/90" : "text-black/90")}>{title}</h3>
        <p className={cn("text-sm leading-relaxed", isDark ? "text-white/40" : "text-black/60")}>{description}</p>
      </div>
    </motion.div>
  )
}

export default function StartSimplerSection() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.1,
        ease: cubicBezier(0.25, 0.4, 0.25, 1),
      },
    }),
  }

  return (
    <div className={cn("relative w-full py-24 overflow-hidden", isDark ? "bg-[#030303]" : "bg-[#f8f8f8]")}>
      <div
        className={cn(
          "absolute inset-0 blur-3xl",
          isDark
            ? "bg-gradient-to-tr from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]"
            : "bg-gradient-to-tr from-indigo-500/[0.02] via-transparent to-rose-500/[0.02]",
        )}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 tracking-tight",
              "bg-clip-text text-transparent",
              isDark ? "bg-gradient-to-r from-white to-white/80" : "bg-gradient-to-r from-black to-black/80",
            )}
          >
            Making Your Start Simpler
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500/50 to-rose-500/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <Card
            icon={<Calendar className="w-6 h-6" />}
            title="Schedule Your Call Today"
            description="Book a personalized consultation call with our experts to discuss your project needs and goals. We'll help you map out the perfect strategy."
            delay={0}
          />
          <Card
            icon={<Rocket className="w-6 h-6" />}
            title="Kickstart Your Journey"
            description="Begin your digital transformation with our streamlined onboarding process. We'll guide you through each step to ensure a smooth takeoff."
            delay={1}
          />
          <Card
            icon={<Target className="w-6 h-6" />}
            title="Stay Focused on Your Goals"
            description="We help you maintain clarity and direction throughout your project. Our team ensures you stay aligned with your business objectives."
            delay={2}
          />
        </div>

        <motion.div
          custom={4}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center"
        >
          <Button 
            onClick={() => window.open("https://wa.me/923447535644", "_blank")}
            className="px-8 py-6 rounded-full bg-gradient-to-r from-indigo-500/80 to-rose-500/80 hover:from-indigo-500/90 hover:to-rose-500/90 text-white font-medium text-lg transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-rose-500/30 border-0"
          >
            Book an Appointment
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

