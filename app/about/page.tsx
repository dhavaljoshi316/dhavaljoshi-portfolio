"use client"

import { motion } from "framer-motion"
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi"
import { educationContent, aboutContent } from "@/lib/data"

export default function About() {
  return (
    <>

      <section id={aboutContent.id} className="section">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-8"
          >
            {aboutContent.title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {aboutContent.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mt-0 sm:mt-0">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 gap-8">

            {educationContent.items.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-xl p-6 backdrop-blur-xl border transition-all duration-300"
                  style={{
                    background: "rgba(20, 22, 50, 0.5)",
                    borderColor: "rgba(255,255,255,0.08)",
                    boxShadow: "0 0 30px rgba(0,0,0,0.4)"
                  }}
                >

                  {/* Top Icon */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(75,92,255,0.15)",
                      border: "1px solid rgba(75,92,255,0.4)",
                      boxShadow: "0 0 15px rgba(75,92,255,0.5)"
                    }}
                  >
                    <Icon className="text-primary text-lg" />
                  </div>

                  {/* Degree */}
                  <h3 className="text-lg font-semibold">
                    {item.degree}
                  </h3>

                  {/* CGPA Badge */}
                  {item.cgpa && (
                    <div
                      className="mt-3 inline-flex items-center px-3 py-1 text-xs rounded-full"
                      style={{
                        background: "rgba(75, 92, 255, 0.15)",
                        border: "1px solid rgba(75, 92, 255, 0.4)",
                        color: "#cfd3ff"
                      }}
                    >
                      CGPA: {item.cgpa}
                    </div>
                  )}

                  {/* University */}
                  <p
                    className="mt-2 text-sm flex items-center gap-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <FiMapPin className="text-primary text-xs" />
                    {item.university}
                  </p>



                  {/* Duration */}
                  <p
                    className="mt-4 text-xs uppercase tracking-wide text-primary/80 flex items-center gap-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <FiCalendar className="text-primary text-xs" />
                    {item.duration}
                  </p>

                </motion.div>
              )
            })}

          </div>
        </div>
      </section>
    </>
  )
}
