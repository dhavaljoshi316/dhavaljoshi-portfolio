"use client"

import { motion } from "framer-motion"
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi"

const educationContent = {
  heading: "Education",
  description: "My academic journey that shaped my technical foundation.",
  items: [
    {
      icon: FiBookOpen,
      duration: "2022 – 2024",
      degree: "Master of Computer Applications (MCA)",
      university: "Atmiya University"
    },
    {
      icon: FiBookOpen,
      duration: "2019 – 2022",
      degree: "Bachelor of Computer Applications (BCA)",
      university: "Atmiya University"
    },
    {
      icon: FiBookOpen,
      duration: "2019 – 2022",
      degree: "Bachelor of Computer Applications (BCA)",
      university: "Atmiya University"
    },
    {
      icon: FiBookOpen,
      duration: "2019 – 2022",
      degree: "Bachelor of Computer Applications (BCA)",
      university: "Atmiya University"
    }
  ]
}

const aboutContent = {
  id: "about",
  title: "About Me",
  description: [
    "I am a Fullstack and React Native Developer with 3+ years of experience building scalable web and mobile applications.",
    "I focus on performance, clean architecture, and maintainable code while delivering real-world business solutions.",
    // "Currently aiming to work on international projects and build high-impact products."
  ]
}

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
          {/* Timeline */}
          <div className="mt-0 relative">
            <div className="space-y-12">
              {educationContent.items.map((item, index) => {
                const Icon = item.icon

                return (
                  <div key={index} className="relative flex items-start gap-5 pb-0 last:pb-8">

                    {/* Icon + Line */}
                    <div className="relative flex flex-col items-center">

                      {/* Icon */}
                      <div className="
      w-10 h-10
      rounded-full
      bg-background
      border-2 border-primary
      flex items-center justify-center
      z-10
    ">
                        <Icon className="text-primary text-sm" />
                      </div>

                      {/* Glowy Vertical Line */}
                      {index !== educationContent.items.length - 1 && (
                        <div className="relative mt-2 w-[2px] flex-1 min-h-[40px]">
                          <div className="absolute inset-0 bg-border" />
                          <div className="absolute inset-0 bg-primary/50 blur-sm opacity-60" />
                        </div>
                      )}

                    </div>

                    {/* Content */}
                    <div className="flex-1">

                      {/* Degree (Primary Text) */}
                      <h3 className="text-lg sm:text-xl font-semibold">
                        {item.degree}
                      </h3>

                      {/* University */}
                      <p className="mt-1 text-sm text-muted-foreground flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                        <FiMapPin className="text-primary text-xs" />
                        {item.university}
                      </p>

                      {/* Duration */}
                      <p className="mt-2 text-xs uppercase tracking-wide text-primary/80 flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                        <FiCalendar className="text-primary text-xs" />
                        {item.duration}
                      </p>


                    </div>

                  </div>

                )
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
