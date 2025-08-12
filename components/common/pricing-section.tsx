"use client"

import { motion, cubicBezier, type Variants } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

interface PricingTierProps {
  title: string
  price?: string
  description: string
  features: string[]
  allServices: string[]
  highlighted?: boolean
  delay: number
}

function PricingTier({
  title,
  price = "",
  description,
  features,
  allServices,
  highlighted = false,
  delay,
}: PricingTierProps) {
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
        "relative p-6 rounded-2xl border backdrop-blur-sm h-full flex flex-col",
        highlighted
          ? isDark
            ? "bg-gradient-to-b from-indigo-500/10 to-rose-500/10 border-white/[0.15]"
            : "bg-gradient-to-b from-indigo-500/5 to-rose-500/5 border-black/[0.15]"
          : isDark
            ? "bg-white/[0.03] border-white/[0.08]"
            : "bg-black/[0.03] border-black/[0.08]",
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-50",
          highlighted
            ? isDark
              ? "from-indigo-500/[0.08] to-rose-500/[0.08]"
              : "from-indigo-500/[0.05] to-rose-500/[0.05]"
            : isDark
              ? "from-white/[0.03] to-transparent"
              : "from-black/[0.03] to-transparent",
        )}
      />

      <div className="relative z-10 flex flex-col flex-1">
        <h3 className={cn("text-xl font-semibold mb-2", isDark ? "text-white/90" : "text-black/90")}>{title}</h3>
        {price && (
          <div className="mb-4">
            <span className={cn("text-3xl font-bold", isDark ? "text-white" : "text-black")}>{price}</span>
          </div>
        )}
        <p className={cn("text-sm mb-6", isDark ? "text-white/40" : "text-black/60")}>{description}</p>

        <ul className="space-y-3 mb-8 flex-1">
          {allServices.map((service, index) => {
            const isIncluded = features.includes(service)
            return (
              <li key={index} className="flex items-start gap-2">
                {isIncluded ? (
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                )}
                <span
                  className={cn(
                    "text-sm",
                    isIncluded
                      ? isDark
                        ? "text-white/60"
                        : "text-black/70"
                      : isDark
                        ? "text-white/30"
                        : "text-black/40",
                  )}
                >
                  {service}
                </span>
              </li>
            )
          })}
        </ul>

        <Button
          onClick={() => window.open("https://wa.me/923447535644", "_blank")}
          className={cn(
            "w-full py-5 rounded-lg font-medium transition-all duration-300",
            highlighted
              ? "bg-gradient-to-r from-indigo-500/80 to-rose-500/80 hover:from-indigo-500/90 hover:to-rose-500/90 text-white shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-rose-500/30 border-0"
              : isDark
                ? "bg-white/[0.05] hover:bg-white/[0.1] text-white/80 border border-white/[0.1]"
                : "bg-black/[0.05] hover:bg-black/[0.1] text-black/80 border border-black/[0.1]",
          )}
        >
          Book an Appointment
        </Button>
      </div>
    </motion.div>
  )
}

export default function PricingSection() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const allServices = [
    "Funnel Design",
    "Figma Design",
    "Business Setup",
    "Unlimited Revisions",
    "Slack Support",
    "Live Figma Design for Funnel & Website",
    "Business Strategy on Mindmap",
    "Domain and Mailgun Setup",
    "Graphic Designing",
    "Zoom Support",
    "Complete Automation",
    "Website and Funnel Development",
    "Client Onboarding Calls",
    "Social Media Management",
    "White-label Services",
    "Zoom Calls & Slack Support",
    "SaaS Design & Development",
    "All Types of Website Development",
    "AI SaaS Design",
    "Extension Development",
    "Plugin Development",
    "App Development & App Design",
    "Digital Marketing",
    "Shopify Web Design",
    "WordPress Web Development",
    "Divi Development",
    "Elementor Development",
    "Logo Design & Branding",
    "Marketing Funnel Designs",
    "24/7 Support",
  ]

  const basicServices = [
    "Funnel Design",
    "Figma Design",
    "Business Setup",
    "Unlimited Revisions",
    "Slack Support",
    "Domain and Mailgun Setup",
    "Graphic Designing",
  ]

  const proServices = [
    ...basicServices,
    "Live Figma Design for Funnel & Website",
    "Business Strategy on Mindmap",
    "Zoom Support",
    "Complete Automation",
    "Website and Funnel Development",
    "Client Onboarding Calls",
    "Social Media Management",
  ]

  const agencyServices = [
    ...proServices,
    "White-label Services",
    "Zoom Calls & Slack Support",
    "SaaS Design & Development",
    "AI SaaS Design",
    "Shopify Web Design",
    "WordPress Web Development",
    "Divi Development",
    "Elementor Development",
    "Logo Design & Branding",
    "Marketing Funnel Designs",
    "24/7 Support",
  ]

  const agencysServices = [
    ...proServices,
    "White-label Services",
    "Zoom Calls & Slack Support",
    "SaaS Design & Development",
    "All Types of Website Development",
    "AI SaaS Design",
    "Extension Development",
    "Plugin Development",
    "App Development & App Design",
    "Digital Marketing",
    "Shopify Web Design",
    "WordPress Web Development",
    "Divi Development",
    "Elementor Development",
    "Logo Design & Branding",
    "Marketing Funnel Designs",
    "24/7 Support",
  ]

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
            ? "bg-gradient-to-bl from-violet-500/[0.03] via-transparent to-cyan-500/[0.03]"
            : "bg-gradient-to-bl from-violet-500/[0.02] via-transparent to-cyan-500/[0.02]",
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
            Choose Your Plan
          </h2>
          <p className={cn("max-w-2xl mx-auto", isDark ? "text-white/40" : "text-black/60")}>
            Select the perfect package that aligns with your business needs and goals. Our flexible pricing options are
            designed to accommodate businesses of all sizes.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500/50 to-cyan-500/50 mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 items-stretch">
          <PricingTier
            title="Basic"
            description="Perfect for small businesses just getting started with their digital presence."
            features={basicServices}
            allServices={allServices}
            delay={0}
          />
          <PricingTier
            title="Pro"
            description="Ideal for growing businesses looking to expand their digital footprint."
            features={proServices}
            allServices={allServices}
            highlighted
            delay={1}
          />
          <PricingTier
            title="Agency"
            description="Comprehensive solution for established businesses requiring full-service digital support."
            features={agencyServices}
            allServices={allServices}
            delay={2}
          />
          <PricingTier
            title="Agency Plus"
            description="Best for large businesses that want it all — every service from design to deployment."
            features={agencysServices}
            allServices={allServices}
            delay={3}
          />
        </div>
      </div>
    </div>
  )
}
