"use client"

import { FiDownload } from "react-icons/fi"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FloatingCVButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <Link
        href="/DhavalJoshi.pdf"
        download
        className="
          flex items-center gap-2
          px-5 py-3
          rounded-full
          backdrop-blur-xl
          border
          text-sm sm:text-base
          transition-all duration-300
          hover:scale-105
        "
        style={{
          background: "rgba(20, 22, 50, 0.6)",
          borderColor: "rgba(75,92,255,0.4)",
          boxShadow:
            "0 0 20px rgba(75,92,255,0.4), inset 0 0 10px rgba(255,255,255,0.05)"
        }}
      >
        <FiDownload className="text-primary" />
        {/* <span
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "1px"
          }}
        >
          Download CV
        </span> */}
      </Link>
    </motion.div>
  )
}
