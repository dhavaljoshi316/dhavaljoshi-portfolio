"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const projectsContent = {
    title: "Projects",
    subtitle: "Selected work showcasing my development experience.",
    projects: [
        {
            name: "Project One",
            type: "Web App",
            description:
                "Fullstack web application built with scalable architecture and optimized performance.",
            //image: "/assets/projects/project1.jpg",
            technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind"]
        },
        {
            name: "Project Two",
            type: "Mobile Application",
            description:
                "React Native mobile application with real-time features and smooth UI.",
            //image: "/assets/projects/project2.jpg",
            technologies: ["React Native", "Firebase", "Redux"]
        },
        {
            name: "Project Three",
            type: "Backend API",
            description:
                "REST API backend system built using Express and PostgreSQL.",
            //image: "/assets/projects/project3.jpg",
            technologies: ["Express", "PostgreSQL", "Docker"]
        }
    ]
}

export default function ProjectsPage() {
    return (
        <div className="section pt-32">
            <div className="container-custom">

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-semibold mb-4"
                >
                    {projectsContent.title}
                </motion.h1>

                <p
                    className="mb-12"
                    style={{ color: "var(--text-secondary)" }}
                >
                    {projectsContent.subtitle}
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    {projectsContent.projects.map((project, index) => (
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

                            {/* Project Image */}
                            <div className="relative h-56 w-full">
                                {
                                    project.image &&
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                }

                                <div
                                    className="absolute top-4 left-4 flex items-center gap-2.5 px-3 py-1 text-xs rounded-full backdrop-blur-md"
                                    style={{
                                        background: "rgba(0,0,0,0.5)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        color: "#ffffff",
                                        letterSpacing: "1px"
                                    }}
                                >

                                    {/* Blinking Dot */}
                                    <span
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            borderRadius: "50%",
                                            background: "#00c6ff",
                                            boxShadow: "0 0 8px #00c6ff",
                                            animation: "pulse-dot 2s ease-in-out infinite"
                                        }}
                                    />

                                    {project.type}

                                </div>

                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl mb-3">
                                    {project.name}
                                </h3>

                                <p
                                    className="mb-4"
                                    style={{ color: "var(--text-secondary)" }}
                                >
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full"
                                            style={{
                                                background: "rgba(75, 92, 255, 0.15)",
                                                border: "1px solid rgba(75, 92, 255, 0.4)",
                                                color: "#cfd3ff"
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}
