"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Background() {
   
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Galaxy Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/space/galaxy.jpg"
          alt="Galaxy Background"
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
      </div>

      {/* Twinkling Stars */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20% 30%, white, transparent),
            radial-gradient(2px 2px at 70% 80%, white, transparent),
            radial-gradient(1.5px 1.5px at 40% 60%, white, transparent),
            radial-gradient(1px 1px at 90% 10%, white, transparent),
            radial-gradient(1.5px 1.5px at 15% 75%, white, transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "800px 800px",
          mixBlendMode: "screen"
        }}
      />

      {/* Moving Star Layer (Slower on Mobile) */}
      <motion.div
        className="absolute inset-0 hidden sm:block"
        animate={{ x: [0, -20, 0], y: [0, -15, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 20%, white, transparent),
            radial-gradient(1px 1px at 30% 70%, white, transparent),
            radial-gradient(1px 1px at 80% 40%, white, transparent)
          `,
          backgroundSize: "1000px 1000px",
          backgroundRepeat: "repeat",
          opacity: 0.4,
          mixBlendMode: "screen"
        }}
      />

      {/* Cinematic Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.9))"
        }}
      />

      {/* Large Earth Planet */}
      <motion.div
  animate={{ y: [0, -30, 0] }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="
    absolute
    right-[-100px] sm:right-[-150px] lg:right-[-200px]
    top-[10%]
    w-[240px] h-[240px]
    sm:w-[450px] sm:h-[450px]
    lg:w-[700px] lg:h-[700px]
    will-change-transform
  "
  style={{
    transform: "translateZ(0)"
  }}
>
  <Image
    src="/assets/space/planet-earth.png"
    alt="Planet Earth"
    fill
    className="
      object-contain
      sm:drop-shadow-[0_0_60px_rgba(0,150,255,0.4)]
    "
    sizes="(max-width: 640px) 240px,
           (max-width: 1024px) 450px,
           700px"
  />
</motion.div>


      {/* Small Floating Planet */}
      <motion.div
  animate={{ y: [0, 20, 0] }}
  transition={{
    duration: 14,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  className="
    absolute
    left-[5%]
    bottom-[10%]
    w-[70px] h-[70px]
    sm:w-[130px] sm:h-[130px]
    lg:w-[180px] lg:h-[180px]
    will-change-transform
  "
  style={{
    transform: "translateZ(0)"
  }}
>
  <Image
    src="/assets/space/planet-purple.png"
    alt="Small Planet"
    fill
    className="
      object-contain
      sm:drop-shadow-[0_0_40px_rgba(150,0,255,0.4)]
    "
    sizes="(max-width: 640px) 70px,
           (max-width: 1024px) 130px,
           180px"
  />
</motion.div>


    </div>
  )
}
