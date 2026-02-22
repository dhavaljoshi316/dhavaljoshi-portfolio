"use client"

import { motion } from "framer-motion"
import GalaxyButton from "@/components/ui/GalaxyButton"
import { useEffect, useState } from "react";
import { heroContent, heroStats } from "./../../lib/data";

function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1000
    const increment = value / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= value) {
        start = value
        clearInterval(counter)
      }
      setCount(Math.floor(start))
    }, 16)

    return () => clearInterval(counter)
  }, [value])

  return <>{count}</>
}

export default function Hero() {
  return (
    <section className="min-h-[100svh] flex items-center pt-24 pb-16">
      <div className="container-custom px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {heroContent.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-xl text-sm sm:text-base md:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          {heroContent.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-nowrap items-center gap-3 sm:gap-6"
        >
          <GalaxyButton
            label={heroContent.primaryButton.label}
            href={heroContent.primaryButton.href}
            variant="primary"
            isDownload={true}
          />

          <GalaxyButton
            label={heroContent.secondaryButton.label}
            href={heroContent.secondaryButton.href}
            variant="outline"
          />
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 sm:mt-16 max-w-4xl"
        >
          <div
            className="
            grid grid-cols-3
              rounded-2xl
              border border-border
              backdrop-blur-xl
              bg-background/40
              overflow-hidden
            "
          >
            {heroStats.map((stat, index) => (
              <div
                key={index}
                className="
                  relative
                  py-6 sm:py-8
                  text-center
                  transition-all duration-300
                  hover:bg-primary/5
                "
              >
                {/* Divider (only desktop) */}
                {index !== heroStats.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-[1px] bg-border hidden sm:block" />
                )}

                {/* Number */}
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-primary drop-shadow-[0_0_10px_var(--primary)]">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </h3>

                {/* Label */}
                <p className="mt-2 text-[12px] sm:text-smtext-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
