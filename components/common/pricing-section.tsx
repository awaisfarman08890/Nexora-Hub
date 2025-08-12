"use client"

import { motion, cubicBezier, type Variants } from "framer-motion"
import { Check, Star, Zap, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function PricingSection() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const nexoraHubServices = [
    "🌐 Website Development",
    "💻 SaaS Development",
    "📱 Social Media Management",
    "📢 Social Media Marketing",
    "🎬 Video Editing",
    "🚚 Truck Dispatching",
    "📦 Amazon Services",
    "🛒 eBay Services",
    "🏬 Walmart Services",
    "🎁 Etsy Services",
    "🛍 Shopify Development",
    "📈 Alibaba Product Research & SEO",
    "🖥 WordPress Development",
    "🎨 Figma Design",
    "⚡ Custom Websites",
  ]

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1 + i * 0.03,
        ease: cubicBezier(0.25, 0.4, 0.25, 1),
      },
    }),
  }

  return (
    <div className={cn("relative w-full py-20 overflow-hidden", isDark ? "bg-[#030303]" : "bg-[#f8f8f8]")}>
      {/* Enhanced background effects */}
      <div
        className={cn(
          "absolute inset-0 blur-3xl",
          isDark
            ? "bg-gradient-to-bl from-violet-500/[0.05] via-indigo-500/[0.03] to-rose-500/[0.05]"
            : "bg-gradient-to-bl from-violet-500/[0.03] via-indigo-500/[0.02] to-rose-500/[0.03]",
        )}
      />
      
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20"
        >
          <Sparkles className="w-6 h-6 text-indigo-400" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-32"
        >
          <Sparkles className="w-4 h-4 text-rose-400" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-1/3"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </div>
          
          <h2
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight",
              "bg-clip-text text-transparent",
              isDark ? "bg-gradient-to-r from-white via-indigo-200 to-white" : "bg-gradient-to-r from-black via-indigo-600 to-black",
            )}
          >
            Nexora Hub Plan
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className={cn(
              "relative p-10 md:p-16 rounded-3xl border backdrop-blur-sm overflow-hidden",
              isDark
                ? "bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-rose-500/20 border-white/[0.2] shadow-2xl shadow-indigo-500/20"
                : "bg-gradient-to-br from-indigo-500/10 via-purple-500/8 to-rose-500/10 border-black/[0.15] shadow-2xl shadow-indigo-500/10"
            )}
          >
            {/* Animated background gradient */}
            <div
              className={cn(
                "absolute inset-0 rounded-3xl opacity-60",
                isDark
                  ? "bg-gradient-to-br from-indigo-500/[0.15] via-purple-500/[0.1] to-rose-500/[0.15]"
                  : "bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.06] to-rose-500/[0.08]"
              )}
            />
            
            {/* Animated border glow */}
            <motion.div
              animate={{ 
                background: [
                  "conic-gradient(from 0deg, #6366f1, #8b5cf6, #ec4899, #6366f1)",
                  "conic-gradient(from 360deg, #6366f1, #8b5cf6, #ec4899, #6366f1)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl p-[2px] opacity-30"
            >
              <div className={cn("w-full h-full rounded-3xl", isDark ? "bg-[#030303]" : "bg-[#f8f8f8]")} />
            </motion.div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {nexoraHubServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={cn(
                      "group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 cursor-pointer",
                      isDark
                        ? "bg-white/[0.05] border-white/[0.1] hover:bg-white/[0.08] hover:border-white/[0.2] hover:shadow-lg hover:shadow-indigo-500/20"
                        : "bg-black/[0.03] border-black/[0.08] hover:bg-black/[0.06] hover:border-black/[0.15] hover:shadow-lg hover:shadow-indigo-500/10"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className={cn("text-base font-semibold", isDark ? "text-white/90" : "text-black/90")}>
                        {service}
                      </span>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-rose-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-rose-500/10 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Button
                    onClick={() => window.open("https://wa.me/923447535644", "_blank")}
                    className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 hover:from-indigo-600 hover:via-purple-600 hover:to-rose-600 text-white shadow-2xl shadow-indigo-500/30 hover:shadow-3xl hover:shadow-rose-500/40 border-0 px-12 py-6 text-xl font-bold rounded-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      Book an Appointment Now
                      <Zap className="w-5 h-5" />
                    </span>
                    
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Button>
                </motion.div>
                
                <p className={cn("text-sm mt-4 font-medium", isDark ? "text-white/60" : "text-black/60")}>
                  Transform your business with our comprehensive digital solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
