"use client"

import { motion, AnimatePresence } from "framer-motion"

interface GlassAlertProps {
  message: string
  type?: "success" | "error"
  isVisible: boolean
}

export default function GlassAlert({
  message,
  type = "success",
  isVisible
}: GlassAlertProps) {

  const isSuccess = type === "success"

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
          className="
            fixed z-50
            top-4 sm:top-6
            left-1/2 -translate-x-1/2
            w-[92%] sm:w-auto
            max-w-md
            px-4 sm:px-6
            py-3 sm:py-4
            rounded-xl
            backdrop-blur-xl
            border
            shadow-lg
          "
          style={{
            background: "rgba(20, 22, 50, 0.75)",
            borderColor: isSuccess
              ? "rgba(0, 255, 180, 0.4)"
              : "rgba(255, 80, 120, 0.4)",
            boxShadow: isSuccess
              ? "0 0 20px rgba(0,255,180,0.4)"
              : "0 0 20px rgba(255,80,120,0.4)",
          }}
        >
          <p
            className={`
              text-sm sm:text-base
              text-center
              font-medium
              break-words
              ${isSuccess ? "text-emerald-300" : "text-red-300"}
            `}
          >
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}