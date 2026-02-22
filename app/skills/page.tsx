"use client"

import { skillsContent } from "@/lib/data";
import { motion } from "framer-motion";



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

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8">

          {skillsContent.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-xl backdrop-blur-xl border p-6 transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "rgba(20, 22, 50, 0.5)",
                borderColor: "rgba(255,255,255,0.08)",
                boxShadow: "0 0 30px rgba(0,0,0,0.4)"
              }}
            >

              {/* Card Title */}
              <h3
                className="text-lg mb-6 text-primary tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {category.title}
              </h3>

              {/* Items */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border"
                    style={{
                      background: "rgba(75, 92, 255, 0.15)",
                      border: "1px solid rgba(75, 92, 255, 0.4)",
                      color: "#cfd3ff"
                    }}
                  >
                    {skill.icon && (
                      <skill.icon className="text-primary text-sm" />
                    )}
                    <span className="text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
