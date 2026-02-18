"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        height: "3px",
        background: "linear-gradient(90deg, #4b5cff, #00c6ff)",
        boxShadow: "0 0 10px rgba(75,92,255,0.7)",
        position: "fixed",
        top: 60,
        left: 0,
        right: 0,
        zIndex: 9999
      }}
    />
  )
}
