"use client"

import { motion } from "framer-motion"
import GalaxyButton from "@/components/ui/GalaxyButton"

const errorContent = {
  code: "404",
  title: "Lost in the Tech Universe",
  description:
    "The page you are looking for drifted out of orbit.",
  button: {
    label: "Return Home",
    href: "/"
  }
}

export default function NotFound() {
  return (
    <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />

      <div className="relative text-center px-6">

        {/* 404 Code */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-7xl sm:text-8xl font-bold text-primary"
        >
          {errorContent.code}
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-2xl sm:text-3xl font-semibold"
        >
          {errorContent.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-sm sm:text-base text-muted-foreground max-w-md mx-auto"
        >
          {errorContent.description}
        </motion.p>

        {/* Button */}
        <div className="mt-8">
          <GalaxyButton
            label={errorContent.button.label}
            href={errorContent.button.href}
            variant="solid"
          />
        </div>

      </div>

    </section>
  )
}
