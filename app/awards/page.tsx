"use client"

import { motion } from "framer-motion"
import { FiAward, FiCalendar } from "react-icons/fi"

const awardsContent = {
    heading: "Awards & Achievements",
    description: "Recognition and milestones in my professional journey.",
    items: [
        {
            title: "MCA Degree Completion",
            year: "2024",
            issuer: "Atmiya University"
        },
        {
            title: "Best Final Year Project",
            year: "2023",
            issuer: "College Technical Event"
        }
    ]
}

export default function Awards() {
    return (
        <section className="min-h-[100svh] pt-24 pb-20 relative overflow-hidden">

            <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-left"
                >
                    <h1 className="text-3xl sm:text-4xl font-semibold">
                        {awardsContent.heading}
                    </h1>

                    <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                        {awardsContent.description}
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {awardsContent.items.map((award, index) => (
                       <motion.div
                       key={index}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ delay: index * 0.1 }}
                       viewport={{ once: true }}
                       className="relative rounded-xl overflow-hidden backdrop-blur-xl border transition-all duration-300 hover:scale-[1.03]"
                       style={{
                         background: "rgba(20, 22, 50, 0.5)",
                         borderColor: "rgba(255,255,255,0.08)",
                         boxShadow: "0 0 30px rgba(0,0,0,0.4)"
                       }}
                     >
                     
                       {/* Top Badge Section */}
                       <div className="relative h-32 w-full flex items-center justify-center">
                     
                         {/* Spotlight Gradient */}
                         <div
                           className="absolute inset-0"
                           style={{
                             background:
                               "radial-gradient(circle at center, rgba(75,92,255,0.15), transparent 70%)"
                           }}
                         />
                     
                         {/* Award Icon */}
                         <div
                           className="flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-md"
                           style={{
                             background: "rgba(0,0,0,0.5)",
                             border: "1px solid rgba(255,255,255,0.15)",
                             color: "#ffffff"
                           }}
                         >
                           <FiAward size={26} />
                         </div>
                     
                       </div>
                     
                       {/* Content */}
                       <div className="p-6">
                     
                         {/* Award Title */}
                         <h3 className="text-xl mb-3">
                           {award.title}
                         </h3>
                     
                         {/* Issuer */}
                         <p
                           className="mb-4"
                           style={{ color: "var(--text-secondary)" }}
                         >
                           {award.issuer}
                         </p>
                     
                         {/* Year Badge */}
                         <div
                           className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full backdrop-blur-md"
                           style={{
                             background: "rgba(75, 92, 255, 0.15)",
                             border: "1px solid rgba(75, 92, 255, 0.4)",
                             color: "#cfd3ff"
                           }}
                         >
                           <FiCalendar size={12} />
                           {award.year}
                         </div>
                     
                       </div>
                     
                     </motion.div>
                     
                    ))}

                </div>

            </div>
        </section>
    )
}
