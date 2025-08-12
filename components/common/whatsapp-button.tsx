"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const whatsappUrl = "https://wa.me/923447535644";
    try {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      // Fallback: try to open in same window
      window.location.href = whatsappUrl;
    }
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-16 right-6 z-50"
    >
      <motion.a
        href="https://wa.me/923447535644"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          "flex items-center justify-center w-16 h-16 rounded-full shadow-lg cursor-pointer",
          "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
          "text-white transition-all duration-300",
          "border-2 border-white/20 hover:border-white/40"
        )}
        style={{
          boxShadow: "0 8px 32px rgba(34, 197, 94, 0.3)",
        }}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
      
      
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
