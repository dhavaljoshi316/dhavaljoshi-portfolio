"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface CosmicButtonProps {
  label: string
  href?: string
  type?: "button" | "submit"
  variant?: "solid" | "outline"
  className?: string
}

export default function CosmicButton({
  label,
  href,
  type = "button",
  variant = "solid",
  className = ""
}: CosmicButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium overflow-hidden transition-all duration-300"

  const variants = {
    solid: `
      bg-primary text-primary-foreground
      hover:shadow-[0_0_30px_var(--primary)]
    `,
    outline: `
      border border-border text-foreground
      hover:border-primary hover:text-primary
      hover:shadow-[0_0_20px_var(--primary)]
    `
  }

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      className="relative z-10"
    >
      {label}
    </motion.span>
  )

  const glowLayer = (
    <span
      className="
        absolute inset-0
        bg-gradient-to-r
        from-transparent
        via-primary/20
        to-transparent
        -translate-x-full
        group-hover:translate-x-full
        transition-transform duration-700
      "
    />
  )

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} group ${className}`}
      >
        {content}
        {glowLayer}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} group ${className}`}
    >
      {content}
      {glowLayer}
    </button>
  )
}
