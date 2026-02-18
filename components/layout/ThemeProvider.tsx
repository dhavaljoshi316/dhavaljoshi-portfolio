"use client"

import { useEffect, useState } from "react"
import { themeColors } from "@/lib/colors"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const root = document.documentElement
    const colors = themeColors[theme]

    Object.entries(colors).forEach(([key, value]) => {
      const cssVar = "--" + key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
      root.style.setProperty(cssVar, value)
    })

    root.setAttribute("data-theme", theme)
  }, [theme])

  return <>{children}</>
}
