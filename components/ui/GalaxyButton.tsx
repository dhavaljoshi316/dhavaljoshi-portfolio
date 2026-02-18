"use client"

import { motion } from "framer-motion"

interface GalaxyButtonProps {
  label: string
  href?: string
  variant?: "primary" | "outline"
  isDownload?: boolean
}

export default function GalaxyButton({
  label,
  href = "#",
  variant = "primary",
  isDownload = false
}: GalaxyButtonProps) {
  const isPrimary = variant === "primary"

  return (
    <motion.a
      download={isDownload}
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative px-7 py-3 rounded-xl text-sm font-medium overflow-hidden transition-all duration-300 backdrop-blur-lg"
      style={{
        background: isPrimary
          ? "linear-gradient(135deg, #4b5cff, #00c6ff)"
          : "rgba(20, 22, 50, 0.4)",
        border: isPrimary
          ? "none"
          : "1px solid rgba(255,255,255,0.15)",
        boxShadow: isPrimary
          ? "0 0 25px rgba(75, 92, 255, 0.6)"
          : "0 0 15px rgba(0,0,0,0.4)",
        color: "white"
      }}
    >
      <span className="relative z-10">{label}</span>

      {/* Glow Layer */}
      <span
        className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.4), transparent 70%)"
        }}
      />
    </motion.a>
  )
}
