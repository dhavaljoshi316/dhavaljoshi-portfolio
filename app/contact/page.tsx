"use client"

import { motion } from "framer-motion"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"
import GlassCard from "@/components/ui/GlassCard"
import CosmicButton from "@/components/ui/CosmicButton"
import GalaxyButton from "@/components/ui/GalaxyButton"
import { useEffect, useState } from "react"

const contactContent = {
  heading: "Let’s Work Together",
  description:
    "Have a project idea or just want to connect? Drop a message below.",
  email: "dhavaljoshi0316@gmail.com",
  responseNote:
    "Let’s build something impactful.",
  button: {
    label: "Send Message",
    variant: "primary"
  }
}


const formFields = [
  { type: "text", name: "name", placeholder: "Your Name" },
  { type: "email", name: "email", placeholder: "Your Email" },
  {
    type: "textarea",
    name: "message",
    placeholder: "Your Message",
    rows: 5
  }
]

const socialLinks = [
  { icon: FiGithub, href: "https://www.github.com/dhavaljoshi316" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/dhaval-joshi-290528252/" }
]

const visitorContent = {
  label: "Portfolio Visitor",
  count: 1, // later can be dynamic
  note: "Thanks for stopping by."
}


export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(formData.name)) {
      newErrors.name = "Enter valid name (letters only)"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter valid email address"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    try {
      setLoading(true)

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        alert("Message sent successfully")
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Failed to send message")
      }

    } catch (error) {
      console.error(error)
      alert("Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  return (
    <section className="min-h-svh pt-24 lg:pt-28 pb-16">
      <div className="container-custom px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {contactContent.heading}
          </h1>

          <p className="mt-6 text-sm sm:text-base text-muted-foreground">
            {contactContent.description}
          </p>
        </motion.div>

        {/* Contact Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "rgba(20, 22, 50, 0.5)",
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 0 30px rgba(0,0,0,0.4)"
            }}
          >

            {/* Subtle Spotlight Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at top center, rgba(75,92,255,0.12), transparent 70%)"
              }}
            />

            <div className="p-5 sm:p-6 lg:p-8">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                  {formFields.map((field, index) => {
                    if (field.type === "textarea") {
                      return (
                        <div className="flex flex-col">
                          <textarea
                            key={index}
                            name={field.name}
                            rows={field.rows}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            className="w-full rounded-xl px-4 py-3 bg-background/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition"
                          />


                          {errors[field.name] && (
                            <p className="text-xs text-red-500 mt-1 animate-fadeIn ml-2">
                              {errors[field.name]}
                            </p>
                          )}
                        </div>

                      )
                    }

                    return (
                      <div className="flex flex-col">
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full rounded-xl px-4 py-3 bg-background/60 border border-border focus:outline-none focus:ring-2 focus:ring-primary transition"
                        />

                        {errors[field.name] && (
                          <p className="text-xs text-red-500 mt-1 animate-fadeIn ml-2">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>

                    )
                  })}

                  <GalaxyButton
                    label={loading ? "Sending..." : contactContent.button.label}
                    type="submit"
                    variant={contactContent.button.variant}
                    disabled={loading}
                  />
                </form>

                {/* INFO SECTION */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="flex items-center gap-4">
                    <FiMail className="text-xl text-primary" />
                    <span className="text-sm sm:text-base">
                      {contactContent.email}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-xl">
                    {socialLinks.map((social, index) => {
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

                  <p className="text-sm text-muted-foreground">
                    {contactContent.responseNote}
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>


        <div className="mt-14 flex justify-center">
          <div className="relative w-full max-w-3xl h-[1px]">

            {/* Faded base line */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 to-transparent blur-sm" />

          </div>
        </div>

        {/* Visitors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 lg:mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground tracking-wide uppercase">
            {visitorContent.label}
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            {visitorContent.count.toLocaleString()}
          </h2>

          <p className="mt-4 text-sm text-muted-foreground">
            {visitorContent.note}
          </p>
        </motion.div>


      </div>
    </section>
  )
}
