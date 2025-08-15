"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-16 right-6 z-50">
      <a
        href="https://calendly.com/trevomedia5"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center w-16 h-16 rounded-full shadow-lg cursor-pointer",
          "bg-gradient-to-r from-indigo-500 to-rose-500 hover:from-indigo-600 hover:to-rose-600",
          "text-white transition-all duration-300",
          "border-2 border-white/20 hover:border-white/40 hover:scale-110 active:scale-95"
        )}
        style={{
          boxShadow: "0 8px 32px rgba(99, 102, 241, 0.3)",
        }}
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
