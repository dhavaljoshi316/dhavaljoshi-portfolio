"use client"

import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress
} from "react-icons/si"

const skillsContent = {
  heading: "Skills",
  description: "Technologies and tools I work with.",
  items: [
    { name: "React Native", level: 90, icon: SiReact },
    { name: "React.js", level: 85, icon: SiReact },
    { name: "Node.js", level: 80, icon: SiNodedotjs },
    { name: "Express.js", level: 80, icon: SiExpress },
    { name: "MongoDB", level: 75, icon: SiMongodb },
    { name: "TypeScript", level: 85, icon: SiTypescript },
    { name: "Next.js", level: 85, icon: SiNextdotjs },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss }
  ]
}

export default function SkillsPage() {
  return (
    <section className="min-h-[100svh] pt-24 pb-20">
      <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold"
          >
            {skillsContent.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground"
            style={{ color: "var(--text-secondary)" }}
          >
            {skillsContent.description}
          </motion.p>
        </div>

        <div className="mt-10 max-w-4xl space-y-8">
          {skillsContent.items.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-3">

                <div className="flex items-center gap-3">

                  <skill.icon className="text-lg text-primary opacity-80" />

                  <span
                    className="text-sm sm:text-base tracking-wider"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {skill.name}
                  </span>

                </div>

                <span className="text-sm text-primary" style={{ fontFamily: "var(--font-heading)" }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 rounded-full bg-background/40 overflow-hidden border border-border">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #4b5cff, #00c6ff)",
                    boxShadow:
                      "0 0 15px rgba(75,92,255,0.6)"
                  }}
                />

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
