"use client"

import { motion } from "framer-motion"
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi"
import GlassCard from "@/components/ui/GlassCard"
import CosmicButton from "@/components/ui/CosmicButton"
import GalaxyButton from "@/components/ui/GalaxyButton"

const contactContent = {
  heading: "Let’s Work Together",
  description:
    "Have a project idea or just want to connect? Drop a message below.",
  email: "dhavaljoshi0316@gmail.com",
  responseNote:
    "I usually respond within 24 hours. Let’s build something impactful.",
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
                <form className="space-y-6">
                  {formFields.map((field, index) => {
                    if (field.type === "textarea") {
                      return (
                        <textarea
                          key={index}
                          name={field.name}
                          rows={field.rows}
                          placeholder={field.placeholder}
                          className="
                    w-full rounded-xl px-4 py-3
                    bg-background/60
                    border border-border
                    focus:outline-none
                    focus:ring-2 focus:ring-primary
                    transition
                  "
                        />
                      )
                    }

                    return (
                      <input
                        key={index}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        className="
                  w-full rounded-xl px-4 py-3
                  bg-background/60
                  border border-border
                  focus:outline-none
                  focus:ring-2 focus:ring-primary
                  transition
                "
                      />
                    )
                  })}

                  <GalaxyButton
                    label={contactContent.button.label}
                    type="submit"
                    variant={contactContent.button.variant}
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
