"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-mobile";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { useTheme } from "next-themes";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Projects", href: "/#projects" },
  { label: "Privacy Policy", href: "/privacy-policy" }
];

export default function HeaderGeometric() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)") || false;
  const { theme } = useTheme();
  const isDark = theme !== "light";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -20 },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 md:py-6 px-3 sm:px-4 md:px-8",
        isScrolled
          ? isDark
            ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.05] shadow-lg shadow-black/10"
            : "bg-[#f8f8f8]/80 backdrop-blur-md border-b border-black/[0.05] shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
                    <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Nexora Hub"
            width={48}
            height={48}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <span
            className={cn("font-medium text-base sm:text-lg tracking-tight", isDark ? "text-white" : "text-black")}
          >
            Nexora Hub
          </span>
        </Link>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "transition-colors duration-300 text-sm font-medium",
                    isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {/* CTA Button and Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="hidden md:block">
              <ModeToggle />
            </div>
            <Link
              href="https://wa.me/923447535644"
              className={cn(
                "inline-flex items-center justify-center px-4 py-2 rounded-full",
                "bg-gradient-to-r from-indigo-500/80 to-rose-500/80",
                "text-white text-sm font-medium",
                "border border-white/10 shadow-lg shadow-indigo-500/20"
              )}
            >
              Book an Appointment
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn("md:hidden hover:text-white", isDark ? "text-white/80" : "text-black/80")}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        className={cn(
          "fixed inset-0 top-[60px] sm:top-[72px] backdrop-blur-sm z-40 md:hidden",
          isDark ? "bg-[#030303]/95 border-t border-white/[0.05]" : "bg-[#f8f8f8]/95 border-t border-black/[0.05]"
        )}
      >
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "transition-colors duration-300 text-lg font-medium py-2 border-b",
                  isDark
                    ? "text-white/70 hover:text-white border-white/[0.05]"
                    : "text-black/70 hover:text-black border-black/[0.05]"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex justify-center">
              <ModeToggle />
            </div>
            <Link
              href="https://wa.me/923447535644"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "inline-flex items-center justify-center px-4 py-3 mt-2 rounded-full",
                "bg-gradient-to-r from-indigo-500/80 to-rose-500/80",
                "text-white text-base font-medium",
                "border border-white/10 shadow-lg shadow-indigo-500/20"
              )}
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
