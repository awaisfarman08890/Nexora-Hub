"use client"

import { motion, cubicBezier, type Variants } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Linkedin } from "lucide-react"
import { useTheme } from "next-themes"

interface FooterLink {
  title: string
  links: {
    label: string
    href: string
  }[]
}

const footerLinks: FooterLink[] = [
  {
    title: "Product",
    links: [
      { label: "Services", href: "/#services" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Project", href: "/#project" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Industries", href: "/#industries" },
      { label: "Book an appointment", href: "/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Review", href: "/#review" },
      { label: "Contact", href: "/#contact" },
    ],
  },
]

const socialLinks = [
  { icon: Linkedin, href: "", label: "LinkedIn" },
];

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

export default function FooterGeometric() {
  const { theme } = useTheme()
  const isDark = theme !== "light"

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 + i * 0.1,
        ease: cubicBezier(0.25, 0.4, 0.25, 1),
      },
    }),
  }

  return (
    <footer className={cn("relative pt-20 pb-10 overflow-hidden", isDark ? "bg-[#030303]" : "bg-[#f8f8f8]")}>
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
          width={300}
          height={80}
          rotate={15}
          gradient={isDark ? "from-indigo-500/[0.1]" : "from-indigo-500/[0.05]"}
          className="left-[-5%] bottom-[10%]"
        />

        <ElegantShape
          width={250}
          height={60}
          rotate={-10}
          gradient={isDark ? "from-rose-500/[0.1]" : "from-rose-500/[0.05]"}
          className="right-[5%] bottom-[20%]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 mb-12">
          {/* Brand Column */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
                    <Link href="/" className="flex items-center gap-2 mb-6">
          <Image src="/logo.png" alt="Nexora Hub" width={40} height={40} />
          <span className={cn("font-medium text-xl tracking-tight", isDark ? "text-white" : "text-black")}>
            Nexora Hub
          </span>
        </Link>
            <p className={cn("text-sm leading-relaxed mb-6 max-w-md", isDark ? "text-white/50" : "text-black/60")}>
            🌐🚀 Complete digital solutions – from 🌟 Website & SaaS Development to 📱💬 Social Media Marketing, 🛒📦 E-commerce (Amazon | eBay | Walmart | Etsy | Shopify), 🔍📈 SEO & Product Research, 🎬✨ Video Editing & more – to grow your business fast! 💡📊
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={cn(
                      "transition-colors duration-300",
                      isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black",
                    )}
                  >
                    <Icon href={social.href} size={18} />
                  </Link>
                )
              })}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerLinks.map((column, i) => (
            <motion.div
              key={column.title}
              custom={i + 1}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className={cn("font-medium text-base mb-4", isDark ? "text-white" : "text-black")}>{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm transition-colors duration-300",
                        isDark ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black",
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className={cn(
            "pt-8 mt-8 text-center md:flex md:justify-between md:items-center",
            "border-t",
            isDark ? "border-white/[0.08]" : "border-black/[0.08]",
          )}
        >
          <p className={cn("text-xs md:text-sm mb-4 md:mb-0", isDark ? "text-white/40" : "text-black/40")}>
            © {new Date().getFullYear()} Media . All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm">
            <Link
              href="/privacy-policy"
              className={cn(
                "transition-colors duration-300",
                isDark ? "text-white/40 hover:text-white/70" : "text-black/40 hover:text-black/70",
              )}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-condition"
              className={cn(
                "transition-colors duration-300",
                isDark ? "text-white/40 hover:text-white/70" : "text-black/40 hover:text-black/70",
              )}
            >
              Terms of Service
            </Link>
          </div>
          <script src="//code.tidio.co/pjn3klkt4iy275pwtwp3o1gddklodkau.js" async></script>
        </motion.div>
      </div>
    </footer>
  )
}

