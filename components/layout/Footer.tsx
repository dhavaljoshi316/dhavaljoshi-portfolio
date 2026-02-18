"use client"

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

const footerContent = {
  name: "Dhaval Joshi",
  tagline: "Fullstack & React Native Developer",
  socials: [
    {
      icon: FiGithub,
      href: "https://www.github.com/dhavaljoshi316"
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/dhaval-joshi-290528252/"
    },
    {
      icon: FiInstagram,
      href: "https://instagram.com"
    }
  ]
}

export default function Footer() {
  return (
    <footer className="relative mt-24 pb-8">

        <div className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {footerContent.name}. All rights reserved.
        </div>

    </footer>
  )
}
