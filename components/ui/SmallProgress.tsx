"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const percent = docHeight > 0 ? scrollTop / docHeight : 0
      setProgress(percent > 1 ? 1 : percent)
    }

    window.addEventListener("scroll", updateScroll)
    window.addEventListener("resize", updateScroll)

    updateScroll()

    return () => {
      window.removeEventListener("scroll", updateScroll)
      window.removeEventListener("resize", updateScroll)
    }
  }, [])

  return (
    <motion.div
      animate={{ scaleX: progress }}
      transition={{ type: "spring", stiffness: 100, damping: 30 }}
      style={{
        transformOrigin: "0%",
        height: "3px",
        background: "linear-gradient(90deg, #4b5cff, #00c6ff)",
        boxShadow: "0 0 10px rgba(75,92,255,0.7)",
        position: "fixed",
        top: 60,
        left: 0,
        right: 0,
        zIndex: 8888
      }}
    />
  )
}