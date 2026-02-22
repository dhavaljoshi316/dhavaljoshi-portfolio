"use client"

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"
import VisitorCounter from "../ui/VisitorCounter"
import {footerContent} from "./../../lib/data"

export default function Footer() {
  return (
    <footer className="relative mt-24 pb-8">
      <div className="mt-8 text-center text-xs text-muted-foreground">
      <VisitorCounter />
      </div>
      <div className="mt-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {footerContent.name}. All rights reserved.
      </div>

    </footer>
  )
}
