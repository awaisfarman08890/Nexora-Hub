"use client"

import React from "react"

import { motion, cubicBezier, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Code, Layout, LineChart, ShoppingCart, Smartphone, Layers, Gauge, Database, Workflow } from "lucide-react"
import { useTheme } from "next-themes"

interface ServiceCard {
  icon: React.ElementType
  title: string
  description: string
  href: string
  gradient: string
}

const services: ServiceCard[] = [
  {
    icon: Layout,
    title: "Website Design",
    description: "Stunning, responsive websites that captivate your audience and reflect your brand's unique identity.",
    href: "/",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
    href: "/",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Database,
    title: "SaaS Development",
    description: "End-to-end SaaS solutions that transform your ideas into market-ready software products.",
    href: "/",
    gradient: "from-cyan-500 to-teal-600",
  },
  {
    icon: Workflow,
    title: "Marketing Funnels",
    description:
      "Strategic funnels designed to convert visitors into leads and customers with optimized user journeys.",
    href: "/",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Layers,
    title: "WordPress Development",
    description: "Custom WordPress solutions that combine flexibility with powerful functionality for your business.",
    href: "/",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs optimized for all devices, ensuring a seamless experience across platforms.",
    href: "/",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Custom online stores that drive sales with intuitive shopping experiences and secure checkouts.",
    href: "/",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: LineChart,
    title: "Analytics Integration",
    description: "Data-driven insights that help you understand user behavior and optimize for better conversions.",
    href: "/",
    gradient: "from-fuchsia-500 to-purple-600",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Speed optimizations that enhance user experience, SEO rankings, and overall site performance.",
    href: "/",
    gradient: "from-sky-500 to-blue-600",
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

export default function ExploreServices() {
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
    <section className={cn("relative py-20 overflow-hidden", isDark ? "bg-[#030303]" : "bg-[#f8f8f8]")} id="services">
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
            Explore Services
          </h2>
          <p className={cn("text-base sm:text-lg mb-8 max-w-2xl mx-auto", isDark ? "text-white/50" : "text-black/60")}>
            Discover our comprehensive range of digital solutions designed to elevate your online presence and drive
            business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link href={service.href}>
                <div
                  className={cn(
                    "h-full p-6 md:p-8 rounded-2xl border backdrop-blur-sm",
                    "transition-all duration-300",
                    "hover:shadow-lg flex flex-col",
                    isDark
                      ? "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.15] hover:shadow-black/20"
                      : "border-black/[0.08] bg-black/[0.02] hover:bg-black/[0.04] hover:border-black/[0.15] hover:shadow-black/10",
                  )}
                >
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl mb-6 flex items-center justify-center",
                      "bg-gradient-to-br",
                      service.gradient,
                      "shadow-lg",
                      `shadow-${service.gradient.split(" ")[0]}/20`,
                    )}
                  >
                    {React.createElement(service.icon, {
                      className: "text-white",
                      size: 24,
                      strokeWidth: 2,
                    })}
                  </div>

                  {/* Content */}
                  <h3
                    className={cn(
                      "text-xl font-semibold mb-3",
                      isDark ? "text-white group-hover:text-white/90" : "text-black group-hover:text-black/90",
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm leading-relaxed mb-4 flex-grow",
                      isDark ? "text-white/50 group-hover:text-white/60" : "text-black/60 group-hover:text-black/70",
                    )}
                  >
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors duration-300",
                      isDark ? "text-white/70 group-hover:text-white" : "text-black/70 group-hover:text-black",
                    )}
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

