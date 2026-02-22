"use client"

import { useEffect, useState } from "react";

function generateUUID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID()
  }

  return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === "x" ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}


export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    let visitorId = localStorage.getItem("visitor_id")

    if (!visitorId) {
      visitorId = generateUUID();
      localStorage.setItem("visitor_id", visitorId)
    }

    fetch("/api/visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ visitorId })
    })
      .then(res => res.json())
      .then(data => setCount(data.count))

    const interval = setInterval(() => {
      fetch("/api/visitor/count")
        .then(res => res.json())
        .then(data => setCount(data.count))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (count === null) return null

  return (
    <div
      className="
      justify-center
        inline-flex items-center gap-3
        px-5 py-2.5
        rounded-full
        backdrop-blur-xl
        border
        transition-all duration-300
      "
      style={{
        background: "rgba(20, 22, 50, 0.6)",
        borderColor: "rgba(255,255,255,0.08)",
        boxShadow: "0 0 25px rgba(75,92,255,0.25)"
      }}
    >
      {/* Pulsing Dot */}
      <span
        className="w-2.5 h-2.5 rounded-full"
        style={{
          background: "#00c6ff",
          boxShadow: "0 0 10px #00c6ff",
          animation: "pulse-dot 2s ease-in-out infinite"
        }}
      />

      {/* Count */}
      <span
        className="text-sm sm:text-base font-medium tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {count.toLocaleString()}
      </span>

      {/* Label */}
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {count > 1 ? 'Visitors' : 'Visitor'}
      </span>
    </div>
  )
}