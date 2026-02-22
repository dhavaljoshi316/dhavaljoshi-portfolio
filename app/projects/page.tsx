"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import { FiCode, FiGithub } from "react-icons/fi";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import { projectsContent } from "@/lib/data";

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

                            <div className="relative h-56 w-full flex items-center justify-center">

                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "radial-gradient(circle at center, rgba(75,92,255,0.15), transparent 70%)"
                                    }}
                                />

                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div
                                        className="flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-md z-10"
                                        style={{
                                            background: "rgba(0,0,0,0.5)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "#ffffff"
                                        }}
                                    >
                                        <FiCode size={24} />
                                    </div>
                                )}

                                <div
                                    className="absolute top-4 left-4 flex items-center gap-2.5 px-3 py-1 text-xs rounded-full backdrop-blur-md z-20"
                                    style={{
                                        background: "rgba(0,0,0,0.5)",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        color: "#ffffff",
                                        letterSpacing: "1px"
                                    }}
                                >
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

                                {project.category && <div
                                    className="absolute top-4 right-4 px-3 py-1 text-xs rounded-full backdrop-blur-md z-20"
                                    style={{
                                        background: "rgba(75,92,255,0.2)",
                                        border: "1px solid rgba(75,92,255,0.4)",
                                        color: "#cfd3ff",
                                        letterSpacing: "1px"
                                    }}
                                >
                                    {project.category}
                                </div>}

                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl mb-3">
                                    {project.name}
                                </h3>

                                {project.company && (
                                    <p className="text-sm text-primary mb-2">
                                        {project.company}
                                    </p>
                                )}

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

                                {/* Links Section */}
                                <div className="mt-6 flex items-center gap-4">
                                    {project.androidLink && (
                                        <a
                                            href={project.androidLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full backdrop-blur-md border transition hover:scale-110"
                                            style={{
                                                background: "rgba(75,92,255,0.15)",
                                                border: "1px solid rgba(75,92,255,0.4)",
                                                color: "#ffffff"
                                            }}
                                        >
                                            <SiGoogleplay size={16} />
                                        </a>
                                    )}

                                    {project.iOSLink && (
                                        <a
                                            href={project.iOSLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full backdrop-blur-md border transition hover:scale-110"
                                            style={{
                                                background: "rgba(75,92,255,0.15)",
                                                border: "1px solid rgba(75,92,255,0.4)",
                                                color: "#ffffff"
                                            }}
                                        >
                                            <SiAppstore size={16} />
                                        </a>
                                    )}

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-full backdrop-blur-md border transition hover:scale-110"
                                            style={{
                                                background: "rgba(75,92,255,0.15)",
                                                border: "1px solid rgba(75,92,255,0.4)",
                                                color: "#ffffff"
                                            }}
                                        >
                                            <FiGithub size={16} />
                                        </a>
                                    )}
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}
