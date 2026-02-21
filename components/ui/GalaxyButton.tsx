"use client"

import { motion } from "framer-motion"

interface GalaxyButtonProps {
  label: string
  type?: "button" | "submit"
  href?: string
  variant?: "primary" | "outline"
  isDownload?: boolean
  disabled?: boolean
}

export default function GalaxyButton({
  label,
  type = "button",
  href,
  variant = "primary",
  isDownload = false,
  disabled = false
}: GalaxyButtonProps) {

  const isPrimary = variant === "primary"

  const commonStyles = {
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
  }

  // 👉 If href exists → render link
  if (href) {
    return (
      <motion.a
        href={href}
        download={isDownload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="relative px-7 py-3 rounded-xl text-sm font-medium overflow-hidden transition-all duration-300 backdrop-blur-lg"
        style={commonStyles}
      >
        <span className="relative z-10">{label}</span>
      </motion.a>
    )
  }

  // 👉 Otherwise render button (for forms)
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative px-7 py-3 rounded-xl text-sm font-medium overflow-hidden transition-all duration-300 backdrop-blur-lg disabled:opacity-60"
      style={commonStyles}
    >
      <span className="relative z-10">{label}</span>
    </motion.button>
  )
}