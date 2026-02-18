"use client"

import { motion } from "framer-motion"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className="relative group">

      {/* Rotating Border Layer */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear"
        }}
        className="
          absolute
          -inset-[1px]
          rounded-3xl
          bg-gradient-to-r
          from-transparent
          via-primary
          to-transparent
          opacity-40
          blur-[2px]
        "
      />

      {/* Main Card */}
      <div
        className={`
          relative
          rounded-3xl
          border border-border
          bg-background/50
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          ${className}
        `}
      >
        {children}
      </div>

    </div>
  )
}
