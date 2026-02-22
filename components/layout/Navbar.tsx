"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"
import { navbarContent } from "./../../lib/data";

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const starStyles = {
        backgroundImage: `
          radial-gradient(2px 2px at 10% 20%, rgba(255,255,255,0.9), transparent),
          radial-gradient(1.5px 1.5px at 30% 70%, rgba(255,255,255,0.8), transparent),
          radial-gradient(1.5px 1.5px at 80% 40%, rgba(255,255,255,0.7), transparent),
          radial-gradient(2px 2px at 60% 10%, rgba(255,255,255,0.85), transparent),
          radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.6), transparent)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "400px 400px"
    }


    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY

            document.body.style.position = "fixed"
            document.body.style.top = `-${scrollY}px`
            document.body.style.left = "0"
            document.body.style.right = "0"
            document.body.style.width = "100%"
        } else {
            const scrollY = document.body.style.top
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.left = ""
            document.body.style.right = ""
            document.body.style.width = ""

            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || "0") * -1)
            }
        }

        return () => {
            document.body.style.position = ""
            document.body.style.top = ""
        }
    }, [isOpen])

    return (
        <>
            <motion.nav
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 w-full z-50 backdrop-blur-xl border-b"
                style={{
                    background: "rgba(10, 12, 30, 0.6)",
                    borderColor: "rgba(255,255,255,0.08)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
                }}
            >
                <div className="container-custom flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">

                    {/* Brand */}
                    <Link
                        href="/"
                        className="text-lg sm:text-xl lg:text-2xl tracking-widest whitespace-nowrap"
                        style={{
                            fontFamily: "var(--font-heading)",
                            background: "linear-gradient(90deg, #4b5cff, #00c6ff)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: "0 0 15px rgba(75,92,255,0.6)"
                        }}
                    >
                        {navbarContent.brand}
                    </Link>

                    {/* Desktop Section */}
                    <div className="hidden md:flex items-center gap-10">

                        {/* Nav Links */}
                        <div className="flex items-center gap-8">
                            {navbarContent.navLinks.map((link, index) => {
                                const isActive = pathname === link.href
                                return (
                                    <div key={index} className="relative">
                                        <Link href={link.href}>{link.label}</Link>

                                        {isActive && (
                                            <span
                                                className="absolute left-0 -bottom-2 h-[2px] w-full"
                                                style={{
                                                    background:
                                                        "linear-gradient(90deg, transparent, #4b5cff, transparent)"
                                                }}
                                            />
                                        )}
                                    </div>
                                )
                            })}
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-5 text-lg">
                            {navbarContent.socialLinks.map((social, index) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition duration-300 hover:scale-110"
                                    >
                                        <Icon />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden text-2xl text-primary"
                    >
                        <FiMenu />
                    </button>
                </div>
            </motion.nav>

            {/* ================= MOBILE DRAWER ================= */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="
  fixed top-0 right-0
  h-full w-[85%] max-w-sm
  z-[9999] md:hidden
  backdrop-blur-2xl
"
                            style={{
                                background: "rgba(15, 18, 45, 0.25)",
                                boxShadow: "-20px 0 60px rgba(0,0,0,0.6)"
                            }}

                        >

                            {/* Starfield Background */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                animate={{ opacity: [0.25, 0.35, 0.25] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                style={starStyles}
                            />


                            {/* Close Button */}
                            <div className="flex justify-end p-6">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl text-primary"
                                >
                                    <FiX />
                                </button>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center gap-6 pb-6 text-xl">
                                {navbarContent.socialLinks.map((social, index) => {
                                    const Icon = social.icon
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted-foreground hover:text-primary transition"
                                        >
                                            <Icon />
                                        </a>
                                    )
                                })}
                            </div>

                            {/* Glowing Divider */}
                            <div
                                className="mx-6 h-[1px] mb-8"
                                style={{
                                    background:
                                        "linear-gradient(90deg, transparent, var(--primary), transparent)"
                                }}
                            />

                            {/* Nav Links */}
                            <div className="flex flex-col px-6 relative z-10">

                                {navbarContent.navLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.15 }}
                                    >

                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            style={{ color: "var(--text-secondary)" }}
                                            className="
          block py-4 text-center text-base tracking-wide
          transition-all duration-300 hover:text-primary
        "
                                        >
                                            {link.label}
                                        </Link>

                                        {/* Shimmer Divider */}
                                        {index !== navbarContent.navLinks.length - 1 && (
                                            <div className="relative h-[1px] overflow-hidden">
                                                <div
                                                    className="absolute inset-0"
                                                    style={{
                                                        background:
                                                            "linear-gradient(90deg, transparent, rgba(75,92,255,0.5), transparent)",
                                                        animation: "shimmer-line 3s linear infinite"
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                            </div>


                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
